import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Career", path: "/career" },
  ];

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:flex w-full justify-between items-center px-10 h-[75px] bg-[#2f3e46] backdrop-blur-xl sticky top-0 z-50 shadow-lg">

        {/* LOGO */}
        <Link to="/" data-discover="true">
          <img
            src={logo}
            alt="Technex Cloud networks logo"
            className="w-[80px] h-[80px] hover:scale-105 transition drop-shadow-[0_0_10px_rgba(36,192,197,0.4)]"
          />
        </Link>

        {/* NAV */}
        <div className="flex gap-2 bg-white/5 p-2 rounded-full border border-white/10">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-5 py-2 text-sm font-semibold"
                onClick={()=>window.scrollTo(0,0)}
              >
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#24c0c5] rounded-full shadow-[0_0_15px_#24c0c5]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}

                <span
                  className={`relative z-10 transition ${
                    active ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link to="/contactus">
          <button className="bg-[#24c0c5] text-white font-semibold px-6 py-2 rounded-full
          hover:scale-105 hover:shadow-[0_0_20px_#24c0c5] transition">
            Contact Us
          </button>
        </Link>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="flex lg:hidden justify-between items-center px-4 h-[65px] bg-[#2F3E46]/90 backdrop-blur-xl sticky top-0 z-50">
        <Link to="/">
          <img src={logo} alt="Technex cloud networks logo" className="w-[65px] h-[65px]" />
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl active:scale-90 transition"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#2F3E46]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ✕
            </button>

            {/* ⭐ LOGO INSIDE MOBILE MENU */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img
                  src={logo}
                  className="w-[90px] h-[90px] drop-shadow-[0_0_15px_rgba(36,192,197,0.5)]"
                />
              </Link>
            </motion.div>

            {/* NAV ITEMS */}
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-semibold text-white hover:text-[#24c0c5] transition"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* CTA */}
            <Link to="/contactus" onClick={() => {setMenuOpen(false); window.scrollTo(0,0)}}>
              <button className="mt-6 bg-[#24c0c5] px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}