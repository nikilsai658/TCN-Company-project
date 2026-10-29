import { useEffect, useState } from "react";
import itconsultancy from "../assets/itconsultancy1.jpg";
import softwaredevelopment from "../assets/software.png";
import edutech from "../assets/edutech.jpg";
import digitalmarketing from "../assets/digitalmarketing.png";

const PAGE_W = 250;
const PAGE_H = 350;
const TURN_MS = 2600;

const services = [
  {
    title: "IT Consultancy",
    desc: "Expert guidance in cloud, software and infrastructure planning for scalable, secure IT.",
    image: itconsultancy,
  },
  {
    title: "Software Development",
    desc: "Custom web and enterprise applications built to be reliable, fast and secure.",
    image: softwaredevelopment,
  },
  {
    title: "EduTech Programs",
    desc: "Hands-on training in software, cloud, AI and data science with real-time projects.",
    image: edutech,
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media and performance campaigns that grow your brand measurably.",
    image: digitalmarketing,
  },
];

function Cover() {
  return (
    <div className="tcn-cover w-full h-full flex flex-col items-center justify-center text-center px-5">
      <div className="w-10 h-[2px] bg-[#24c0c5] mb-5" />
      <div className="text-white text-3xl font-bold tracking-[5px]">TECHNEX</div>
      <div className="text-[#24c0c5] text-sm font-semibold tracking-[3px] mt-2">CLOUD NETWORKS</div>
      <div className="w-10 h-[2px] bg-[#24c0c5] mt-5" />
      <div className="text-gray-300 text-[10px] tracking-[3px] mt-10">OUR SERVICES</div>
    </div>
  );
}

function ImagePage({ index }: { index: number }) {
  const s = services[index];
  return (
    <div className="tcn-page tcn-page-left w-full h-full p-4 flex flex-col">
      <img src={s.image} alt={s.title} className="w-full flex-1 object-cover rounded-sm" />
      <div className="text-[9px] tracking-[2px] text-gray-400 mt-2">TECHNEX CLOUD NETWORKS</div>
    </div>
  );
}

function TextPage({ index }: { index: number }) {
  const s = services[index];
  return (
    <div className="tcn-page tcn-page-right w-full h-full p-5 flex flex-col">
      <div className="text-5xl font-bold text-[#24c0c5]/30">0{index + 1}</div>
      <div className="text-xl font-bold text-[#2F3E46] leading-tight mt-2">{s.title}</div>
      <div className="w-8 h-[2px] bg-[#24c0c5] my-3" />
      <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
      <div className="mt-auto text-right text-[9px] text-gray-400">{index * 2 + 2}</div>
    </div>
  );
}

// floating tags above and below the book (x is % across the book, y is px from top)
const chips = [
  { label: "Training", x: 4, y: -48, delay: 0 },
  { label: "Marketing", x: 40, y: -58, delay: 1.2 },
  { label: "Web Apps", x: 76, y: -46, delay: 0.6 },
  { label: "IT Consultancy", x: 10, y: PAGE_H + 22, delay: 1.8 },
  { label: "AI & Data", x: 44, y: PAGE_H + 34, delay: 0.3 },
  { label: "Internships", x: 78, y: PAGE_H + 20, delay: 1.5 },
];

// sparkles that rise out of the open book (x is px from the spine)
const sparkles = [-90, -60, -35, -15, 0, 12, 30, 55, 80, 100].map((x, i) => ({
  x,
  delay: (i * 0.37) % 2.4,
  size: 3 + (i % 3),
}));

// each leaf is one sheet: front shows on the right, back shows on the left after it turns
const leaves = [
  { front: <Cover />, back: <ImagePage index={0} /> },
  { front: <TextPage index={0} />, back: <ImagePage index={1} /> },
  { front: <TextPage index={1} />, back: <ImagePage index={2} /> },
  { front: <TextPage index={2} />, back: <ImagePage index={3} /> },
];

export function ServicesBook() {
  // step = how many leaves have turned (0 = closed, leaves.length = last service)
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [turning, setTurning] = useState(-1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      let d = dir;
      if (step + d > leaves.length || step + d < 0) d = -d;
      setDir(d);
      setTurning(d > 0 ? step : step - 1);
      setStep(step + d);
    }, TURN_MS);
    return () => clearTimeout(id);
  }, [step, dir, paused]);

  return (
    <div
      className="relative"
      style={{ width: PAGE_W * 2 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* orbit rings behind the book */}
      <div className="tcn-ring tcn-ring-1" />
      <div className="tcn-ring tcn-ring-2">
        <span className="tcn-orbit-dot" />
      </div>

      {/* glowing platform with ripples under the book */}
      <div className="tcn-glow" />
      <div className="tcn-ripple" />
      <div className="tcn-ripple" style={{ animationDelay: "1.5s" }} />

      {chips.map((c) => (
        <div
          key={c.label}
          className="tcn-chip absolute z-10"
          style={{ left: `${c.x}%`, top: c.y + 20, animationDelay: `${c.delay}s` }}
        >
          {c.label}
        </div>
      ))}

      <div className="tcn-float relative">
      <div className="tcn-book-scene">
      <div
        className="tcn-book relative"
        style={{
          width: PAGE_W * 2,
          height: PAGE_H,
          // keep the closed cover centred, slide over once the book opens
          transform: `translateX(${step === 0 ? -PAGE_W / 2 : 0}px) rotateX(12deg)`,
        }}
      >
        {/* page block thickness on the right */}
        <div className="tcn-edge absolute" style={{ left: PAGE_W * 2 - 2, top: 4, width: 8, height: PAGE_H - 8 }} />

        {/* last page, under every leaf */}
        <div className="absolute top-0" style={{ left: PAGE_W, width: PAGE_W, height: PAGE_H }}>
          <TextPage index={3} />
        </div>

        {leaves.map((leaf, i) => {
          const turned = i < step;
          return (
            <div
              key={i}
              className="tcn-leaf absolute top-0"
              style={{
                left: PAGE_W,
                width: PAGE_W,
                height: PAGE_H,
                transform: `rotateY(${turned ? -180 : 0}deg)`,
                zIndex: i === turning ? 50 : turned ? i + 1 : leaves.length - i + 1,
              }}
            >
              <div className="tcn-face">{leaf.front}</div>
              <div className="tcn-face tcn-face-back">{leaf.back}</div>
            </div>
          );
        })}

        {/* sparkles rising from the spine while the book is open */}
        {step > 0 &&
          sparkles.map((sp, i) => (
            <span
              key={i}
              className="tcn-sparkle"
              style={{
                left: PAGE_W + sp.x,
                width: sp.size,
                height: sp.size,
                animationDelay: `${sp.delay}s`,
              }}
            />
          ))}
      </div>
      </div>
      </div>

      <style>{`
        .tcn-book-scene {
          perspective: 1800px;
          padding: 20px 0 30px;
        }
        .tcn-book {
          transition: transform 1s ease;
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.45));
        }
        .tcn-leaf {
          transform-origin: left center;
          transform-style: preserve-3d;
          transition: transform 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .tcn-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
        }
        .tcn-face-back {
          transform: rotateY(180deg);
        }
        .tcn-cover {
          background: linear-gradient(135deg, #3a4d57 0%, #2F3E46 50%, #1e2a30 100%);
          border-radius: 2px 8px 8px 2px;
          box-shadow: inset 6px 0 10px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(36, 192, 197, 0.35);
        }
        .tcn-page {
          background: #fbfaf7;
        }
        /* spine shading so the pages curve into the centre */
        .tcn-page-right {
          border-radius: 0 6px 6px 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0) 14%), #fbfaf7;
        }
        .tcn-page-left {
          border-radius: 6px 0 0 6px;
          background: linear-gradient(to left, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0) 14%), #fbfaf7;
        }
        .tcn-edge {
          border-radius: 0 4px 4px 0;
          background: repeating-linear-gradient(to bottom, #e9e6df 0 2px, #cfcac0 2px 3px);
        }
        .tcn-float {
          animation: tcn-float 6s ease-in-out infinite;
        }
        @keyframes tcn-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .tcn-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 9999px;
          pointer-events: none;
        }
        .tcn-ring-1 {
          width: 440px;
          height: 440px;
          border: 1px dashed rgba(36, 192, 197, 0.35);
          animation: tcn-spin 40s linear infinite;
        }
        .tcn-ring-2 {
          width: 520px;
          height: 520px;
          border: 1px solid rgba(36, 192, 197, 0.15);
          animation: tcn-spin 26s linear infinite reverse;
        }
        .tcn-orbit-dot {
          position: absolute;
          top: -5px;
          left: 50%;
          width: 10px;
          height: 10px;
          margin-left: -5px;
          border-radius: 9999px;
          background: #dffcfd;
          box-shadow: 0 0 10px 3px #24c0c5;
        }
        @keyframes tcn-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .tcn-glow {
          position: absolute;
          left: 50%;
          bottom: -6px;
          width: 420px;
          height: 60px;
          border-radius: 9999px;
          background: radial-gradient(ellipse at center, rgba(36, 192, 197, 0.55), rgba(36, 192, 197, 0) 70%);
          filter: blur(6px);
          animation: tcn-glow 3s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes tcn-glow {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(0.95); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
        }
        .tcn-ripple {
          position: absolute;
          left: 50%;
          bottom: 16px;
          width: 300px;
          height: 40px;
          border-radius: 9999px;
          border: 1px solid rgba(36, 192, 197, 0.6);
          animation: tcn-ripple 3s ease-out infinite;
          pointer-events: none;
        }
        @keyframes tcn-ripple {
          from { opacity: 0.8; transform: translateX(-50%) scale(0.6); }
          to { opacity: 0; transform: translateX(-50%) scale(1.5); }
        }
        .tcn-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #e6fbfc;
          background: rgba(47, 62, 70, 0.6);
          border: 1px solid rgba(36, 192, 197, 0.45);
          backdrop-filter: blur(6px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
          animation: tcn-chip 4.5s ease-in-out infinite;
          white-space: nowrap;
        }
        @keyframes tcn-chip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .tcn-sparkle {
          position: absolute;
          top: 10px;
          border-radius: 9999px;
          background: #dffcfd;
          box-shadow: 0 0 8px 2px rgba(36, 192, 197, 0.9);
          opacity: 0;
          z-index: 60;
          pointer-events: none;
          animation: tcn-sparkle 2.4s ease-out infinite;
        }
        @keyframes tcn-sparkle {
          0% { opacity: 0; transform: translateY(0) scale(0.6); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-90px) scale(1.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tcn-book, .tcn-leaf { transition: none; }
          .tcn-float, .tcn-ring, .tcn-glow, .tcn-ripple, .tcn-chip, .tcn-sparkle { animation: none; }
        }
      `}</style>
    </div>
  );
}
