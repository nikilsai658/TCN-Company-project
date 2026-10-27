import { motion } from "framer-motion";

import latestimage1 from "../assets/updates.png";
import event1 from "../assets/anneversary.png";
import latestimage2 from "../assets/updateimage2.png";
import hinduthan from '../assets/hindusthan-collabrator.webp';
import Rvs from '../assets/rvs.webp';
const images = [hinduthan,Rvs,latestimage1, event1, latestimage2];

export function Latestupdates() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Latest Updates & Collaborations
      </h2>

      {/* Scrollable Row */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">

        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="min-w-[280px] md:min-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg bg-white"
          >
            <img
              src={img}
              alt="latest update"
              className="w-full h-[220px] md:h-[260px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}

      </div>
    </div>
  );
}