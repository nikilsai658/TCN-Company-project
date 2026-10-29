// Projects.tsx — portfolio row for the Software Development page
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

// "https://www.example.com/" -> "example.com"
const domainOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "shrink-0",
  "aria-hidden": true,
};

const GlobeIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);

const ExternalIcon = () => (
  <svg {...iconProps} width={14} height={14}>
    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const LockIcon = () => (
  <svg {...iconProps}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

// branded cover used when a project has no screenshots yet
function BrandCover({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(circle at 30% 20%, ${project.accent}55, transparent 60%), radial-gradient(circle at 80% 90%, ${project.accent}33, transparent 55%), ${project.logoBg}`,
      }}
    >
      {/* faint dot grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `radial-gradient(${project.accent} 1px, transparent 1px)`, backgroundSize: "18px 18px" }}
      />
      {project.logo ? (
        <img
          src={project.logo}
          alt=""
          className={`relative object-contain drop-shadow-lg ${large ? "max-h-[55%] max-w-[60%]" : "max-h-[60%] max-w-[65%]"}`}
        />
      ) : (
        <span
          className={`relative font-extrabold tracking-tight ${large ? "text-7xl" : "text-5xl"}`}
          style={{ color: project.accent }}
        >
          {project.initials}
        </span>
      )}
    </div>
  );
}

function LogoBadge({ project, size = "w-12 h-12" }: { project: Project; size?: string }) {
  return (
    <div
      className={`${size} rounded-xl border border-black/5 shadow-sm flex items-center justify-center overflow-hidden shrink-0`}
      style={{ background: project.logoBg }}
    >
      {project.logo ? (
        <img src={project.logo} alt={`${project.name} logo`} className="max-w-[80%] max-h-[80%] object-contain" />
      ) : (
        <span className="text-sm font-extrabold" style={{ color: project.accent }}>{project.initials}</span>
      )}
    </div>
  );
}

// card cover carousel: shows `perView` screenshots per slide
function Carousel({ project, onOpen }: { project: Project; onOpen: (n: number) => void }) {
  const perView = project.perView ?? 1;
  const slides = Math.ceil(project.gallery.length / perView);
  const [slide, setSlide] = useState(0);
  const go = (dir: number) => setSlide((s) => (s + dir + slides) % slides);

  return (
    <div className="group/carousel relative w-full h-full overflow-hidden" style={{ background: project.logoBg }}>
      <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${slide * 100}%)` }}>
        {Array.from({ length: slides }, (_, s) => (
          <div key={s} className="flex w-full h-full shrink-0 gap-2" style={perView > 1 ? { padding: "8px" } : undefined}>
            {project.gallery.slice(s * perView, s * perView + perView).map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => onOpen(s * perView + i)}
                aria-label={`Open ${project.name} screenshot ${s * perView + i + 1}`}
                className="flex-1 h-full overflow-hidden rounded-[inherit]"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`w-full h-full ${perView > 1 ? "object-contain" : "object-cover"} hover:scale-105 transition-transform duration-500`}
                />
              </button>
            ))}
          </div>
        ))}
      </div>

      {slides > 1 && (
        <>
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => go(dir)}
              aria-label={dir < 0 ? "Previous screenshot" : "Next screenshot"}
              className={`absolute top-1/2 -translate-y-1/2 ${dir < 0 ? "left-2" : "right-2"} w-8 h-8 rounded-full bg-white/90 shadow text-lg text-gray-800 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 transition`}
            >
              {dir < 0 ? "‹" : "›"}
            </button>
          ))}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {Array.from({ length: slides }, (_, s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSlide(s)}
                aria-label={`Go to slide ${s + 1}`}
                className="h-1.5 rounded-full transition-all"
                style={{ width: s === slide ? 18 : 6, background: s === slide ? project.accent : "rgba(255,255,255,0.7)" }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Lightbox({ project, start, onClose }: { project: Project; start: number; onClose: () => void }) {
  const hasGallery = project.gallery.length > 0;
  const count = project.gallery.length;
  const [index, setIndex] = useState(start);
  const step = useCallback((dir: number) => {
    if (count > 1) setIndex((i) => (i + dir + count) % count);
  }, [count]);

  // close on Escape, arrow keys switch images, lock page scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, step]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto md:overflow-hidden rounded-2xl bg-white shadow-2xl grid md:grid-cols-[3fr_2fr]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white shadow text-2xl leading-none text-gray-700 hover:bg-gray-100"
        >
          ×
        </button>

        {/* GALLERY */}
        <div className="flex flex-col bg-[#0f1417] md:max-h-[92vh]">
          <div className="relative flex-1 min-h-[260px] md:min-h-[420px] flex items-center justify-center">
            {hasGallery ? (
              <img
                src={project.gallery[index]}
                alt={`${project.name} screenshot ${index + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
              />
            ) : (
              <div className="absolute inset-0">
                <BrandCover project={project} large />
              </div>
            )}
            {count > 1 && (
              <>
                {[-1, 1].map((dir) => (
                  <button
                    key={dir}
                    type="button"
                    onClick={() => step(dir)}
                    aria-label={dir < 0 ? "Previous image" : "Next image"}
                    className={`absolute top-1/2 -translate-y-1/2 ${dir < 0 ? "left-3" : "right-3"} w-10 h-10 rounded-full bg-white/90 shadow text-2xl text-gray-800 hover:bg-white`}
                  >
                    {dir < 0 ? "‹" : "›"}
                  </button>
                ))}
                <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                  {index + 1} / {count}
                </span>
              </>
            )}
          </div>
          {count > 1 && (
            <div className="flex gap-2 overflow-x-auto p-3 [scrollbar-width:thin]">
              {project.gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  className="shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition"
                  style={{ borderColor: i === index ? project.accent : "transparent", opacity: i === index ? 1 : 0.55 }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="p-6 md:p-8 md:overflow-y-auto md:max-h-[92vh]">
          <div className="flex items-center gap-3 pr-10">
            <LogoBadge project={project} size="w-14 h-14" />
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{project.category}</span>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">{project.name}</h3>
            </div>
          </div>

          <p className="text-gray-600 mt-5 leading-relaxed text-[15px]">{project.description}</p>

          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-6 mb-3">Highlights</h4>
          <ul className="space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-gray-700">
                <span
                  className="mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ background: project.accent }}
                >
                  ✓
                </span>
                {h}
              </li>
            ))}
          </ul>

          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-6 mb-3">Tech stack</h4>
          <div className="space-y-3">
            {Object.entries(project.stack).map(([group, tools]) => (
              <div key={group} className="flex flex-wrap items-center gap-2">
                <span className="w-20 text-xs font-medium text-gray-500">{group}</span>
                {tools.map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-[#F2F2F2] text-[#2F3E46]">{t}</span>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-8">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2F3E46] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3d5059] transition"
              >
                <GlobeIcon /> Visit {domainOf(project.url)} <ExternalIcon />
              </a>
            ) : (
              <span className="inline-block rounded-lg border border-dashed border-gray-300 px-4 py-2.5 text-sm text-gray-500">
                {project.note ?? "Private client project"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [viewer, setViewer] = useState<{ project: Project; start: number } | null>(null);
  const close = useCallback(() => setViewer(null), []);
  const rowRef = useRef<HTMLDivElement>(null);

  // scroll by one card (card width + gap)
  const scrollRow = (dir: number) => {
    const row = rowRef.current;
    const card = row?.querySelector<HTMLElement>("article");
    if (row && card) row.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#F2F2F2]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E46] mt-2">Projects we've built</h2>
            <p className="text-gray-600 mt-3">
              Websites, platforms, apps and portals designed, developed and shipped by the TechNex team.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => scrollRow(dir)}
                aria-label={dir < 0 ? "Scroll projects left" : "Scroll projects right"}
                className="w-11 h-11 rounded-full border border-gray-300 bg-white text-2xl text-[#2F3E46] hover:bg-[#2F3E46] hover:text-white hover:border-[#2F3E46] transition"
              >
                {dir < 0 ? "‹" : "›"}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={rowRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p) => (
            <article
              key={p.name}
              className="group snap-start shrink-0 w-[88%] sm:w-[360px] flex flex-col rounded-2xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* COVER */}
              <div className="relative h-56">
                {p.gallery.length > 0 ? (
                  <Carousel project={p} onOpen={(n) => setViewer({ project: p, start: n })} />
                ) : (
                  <button
                    type="button"
                    className="w-full h-full"
                    onClick={() => setViewer({ project: p, start: 0 })}
                    aria-label={`View ${p.name} details`}
                  >
                    <BrandCover project={p} />
                  </button>
                )}
                <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-gray-800 shadow-sm">
                  {p.category}
                </span>
                {p.url && (
                  <span className="pointer-events-none absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Live
                  </span>
                )}
                {/* accent line */}
                <span className="absolute bottom-0 left-0 h-1 w-full" style={{ background: p.accent }} />
              </div>

              {/* BODY */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-3">
                  <LogoBadge project={p} />
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">{p.name}</h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mt-4 line-clamp-3">{p.description}</p>

                <ul className="flex flex-wrap gap-2 mt-4">
                  {Object.values(p.stack).flat().map((t) => (
                    <li key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#F2F2F2] text-[#2F3E46]">{t}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  {/* browser-style address bar */}
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:border-gray-300 hover:bg-white transition"
                    >
                      <span className="relative flex w-2 h-2 shrink-0">
                        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
                        <span className="relative w-2 h-2 rounded-full bg-green-500" />
                      </span>
                      <GlobeIcon />
                      <span className="truncate font-medium">{domainOf(p.url)}</span>
                      <span className="ml-auto text-[11px] font-semibold uppercase tracking-wider text-green-600">Live</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2.5 rounded-lg border border-dashed border-gray-200 px-3 py-2 text-sm text-gray-500">
                      <LockIcon />
                      <span className="truncate">{p.note ?? "Private client project"}</span>
                    </div>
                  )}

                  <div className="flex gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() => setViewer({ project: p, start: 0 })}
                      className="flex-1 rounded-lg border border-[#2F3E46] px-4 py-2.5 text-sm font-semibold text-[#2F3E46] hover:bg-[#2F3E46] hover:text-white transition"
                    >
                      View details
                    </button>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#2F3E46] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#3d5059] transition"
                      >
                        Visit site <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {viewer && <Lightbox key={viewer.project.name} project={viewer.project} start={viewer.start} onClose={close} />}
    </section>
  );
}
