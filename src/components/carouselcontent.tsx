import { useEffect, useState } from "react";

const offers = [
  {
    description: "Connecting Businesses With Innovation",
  },
  {
    description: "Reliable IT Solutions For Growing Companies",
  },
  {
    description: "Building The Future With Cloud & AI",
  },
  {
    description: "Secure, Fast & Reliable Digital Services",
  },
];

export default function TextCarousel() {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  // Clone first slide at end
  const extendedOffers = [...offers, offers[0]];

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  useEffect(() => {
    // When reaches cloned first slide
    if (current === offers.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, 700);

      setTimeout(() => {
        setTransition(true);
      }, 750);
    }
  }, [current]);

  return (
    <div
      className="overflow-hidden text-white p-3 relative w-full"
      // same charcoal gradient as the hero below so the two read as one block
      style={{ background: "linear-gradient(90deg, #0a1115 0%, #15222a 50%, #0b1418 100%)" }}
    >
      {/* faint teal hairline that fades out at both ends */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(36,192,197,0.45), transparent)" }}
      />
      <div
        className={`flex ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {extendedOffers.map((offer, index) => (
          <div
            key={index}
            className="min-w-full flex items-center justify-center text-center"
          >
            <p className="flex items-center gap-3 text-md md:text-xl font-semibold tracking-wide text-gray-100">
            
              {offer.description}
             
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}