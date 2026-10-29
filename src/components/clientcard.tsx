import desertOazisLogo from "../assets/DESERTOAZIS.png";
import oneDestinyLogo from "../assets/onedestiny-logo.png";
import nextWashLogo from "../assets/nextwash.png";
import dsrEvLogo from "../assets/DSREV.png";

const testimonials: {
  id: string;
  company: string;
  category: string;
  result: string;
  logo?: string;
  logoBg?: string;
}[] = [
  {
    id: "AL",
    company: "Adding Life",
    category: "HEALTHCARE",
    result: "↑ 340% Organic Traffic",
  },
  {
    id: "NW",
    company: "Next Wash",
    category: "WASHED",
    result: "↑ 180% App Downloads",
    logo: nextWashLogo,
    logoBg: "#0057e7",
  },
  {
    id: "DSR",
    company: "DSR EV Mobility",
    category: "ELECTRIC VEHICLES",
    result: "↑ 99% Vehicles Success",
    logo: dsrEvLogo,
  },
  {
    id: "DO",
    company: "Desert Oazis",
    category: "FAMILY MEDICINE",
    result: "↑ 250% Patient Bookings",
    logo: desertOazisLogo,
  },
  {
    id: "OD",
    company: "OneDestiny",
    category: "EVENT MANAGEMENT",
    result: "1,600+ Vendor Listings",
    logo: oneDestinyLogo,
    logoBg: "#0e0b08",
  },
];

// duplicate for infinite loop
const looped = [...testimonials, ...testimonials];

export function TestimonialsCards() {
  return (
    <section className="w-full bg-[#2F3E46] py-16 overflow-hidden">
      <div className="relative">
        
        <div className="flex w-max animate-scroll gap-6 px-6">
          {looped.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-[#5468725c] p-8  border hover:border-b-2 hover:border-b-[#24c0c5] border-white/10 flex flex-col justify-between hover:shadow-2xl transition"
            >
              {/* Top */}
              <div>
                <div className="flex items-start gap-4">
                  {item.logo ? (
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: item.logoBg ?? "#ffffff" }}
                    >
                      <img src={item.logo} alt={item.company} className="w-full h-full object-contain p-1" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-black/20">
                      <span className="text-2xl font-bold text-cyan-400">
                        {item.id}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-white text-xl font-semibold">
                      {item.company}
                    </h3>
                    <p className="text-xs tracking-[3px] text-slate-400 mt-2">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="inline-flex mt-6 px-4 py-2 rounded-full border border-[#24c0c5ac] bg-[#24c0c527] text-gray-100">
                  {item.result}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* animation */}
      <style >{`
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
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