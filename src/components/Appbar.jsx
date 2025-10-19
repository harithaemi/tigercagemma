import React, { useState } from "react";
import Logo from "../assets/logo2red.svg";
import MenuIcon from "../assets/menuwhite.svg";
import CloseIcon from "../assets/closewhite.svg";
import { motion, AnimatePresence } from "framer-motion";

const Appbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "SERVICES", id: "services" },
    { name: "ACHIEVEMENTS", id: "achievements" },
    { name: "GALLERY", id: "gallery" },
    { name: "CONTACT", id: "contact" },
    { name: "PRICING", id: "pricing" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 z-50 bg-gradient-to-b from-black/90 to-transparent flex justify-between items-center px-6">
      {/* Logo */}
      <img src={Logo} className="h-10" alt="Logo" />

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-white font-roboto font-light">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="hover:text-red-500 transition-colors"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      {!menuOpen && (
        <div className="md:hidden">
          <img
            src={MenuIcon}
            alt="Menu"
            className="h-6 cursor-pointer z-50"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-black/95 flex flex-col items-center py-4 space-y-4 text-white font-roboto font-semibold md:hidden rounded-b-lg shadow-lg z-50 max-h-80 overflow-y-auto"
          >
            {/* Close Button */}
            <img
              src={CloseIcon}
              alt="Close Menu"
              className="h-6 cursor-pointer absolute top-3 right-3"
              onClick={() => setMenuOpen(false)}
            />

            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="hover:text-red-500 transition-colors text-lg"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Appbar;





