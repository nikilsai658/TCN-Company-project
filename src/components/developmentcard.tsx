// ProcessCarousel.tsx
import next_wash from "../assets/nextwash.png";
import dsr from "../assets/DSREV.png";
import pcube from '../assets/ChatGPT Image May 11, 2026, 02_53_36 PM.png'
import brainstrom from '../assets/brainstrom.png'
import whitebook from '../assets/whitebook.png'
const clients = [
  { image: next_wash },
  { image: dsr },
  {image:pcube},
  {image:brainstrom},
  {image:whitebook}
];

// Each half must be wider than the screen so the loop never shows a gap.
// The track holds two identical halves and slides left by exactly one half,
// then restarts — which looks like an endless, continuous scroll.
const half = [...clients, ...clients];
const track = [...half, ...half];

export default function ProcessCarousel() {
  return (
    <section className="py-16 bg-[#F2F2F2]">
      <div className="mx-auto max-w-7xl px-6">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Clients
          </h2>
          <p className="text-gray-500 mt-2">
            Trusted by amazing companies worldwide
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden">
          <div className="clients-marquee flex w-max">
            {track.map((client, index) => (
              // padding instead of gap keeps both halves exactly equal width
              <div key={index} className="flex-shrink-0 pr-6">
                <div className="group relative w-[140px] sm:w-[160px] md:w-[180px] aspect-square rounded-2xl overflow-hidden shadow-md bg-gray-100 hover:shadow-xl transition-all duration-300">
                  <img
                    src={client.image}
                    alt="client"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* animation */}
      <style>{`
        .clients-marquee {
          animation: clients-scroll 25s linear infinite;
        }

        .clients-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes clients-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
