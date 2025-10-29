import React, { useState } from "react";
import Logo from "../assets/logo2red.svg";
import gfclogo from "../assets/gfclogo.svg";
import MenuIcon from "../assets/menu2.png";
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

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // delay between each text animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <>
      {/* Main Appbar */}
      <div className="fixed top-0 left-0 w-full h-20 z-40 bg-gradient-to-b from-black/90 to-transparent flex justify-between items-center px-4">
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

        <img src={gfclogo} className="h-11" alt="gfcLogo" />
      </div>

      {/* Floating Mobile Hamburger */}
      {!menuOpen && (
        <div className="fixed right-2 top-1/2 -translate-y-1/2 z-50 md:hidden p-3 rounded-full shadow-lg ">
          <img
            src={MenuIcon}
            alt="Menu"
            className="h-8 w-8 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center text-white font-roboto font-semibold md:hidden z-50"
          >
            {/* Close Button */}
            <img
              src={CloseIcon}
              alt="Close Menu"
              className="h-7 cursor-pointer absolute top-5 right-5"
              onClick={() => setMenuOpen(false)}
            />

            {/* Animated Menu Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center space-y-6"
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => handleScroll(item.id)}
                  className="hover:text-red-500 transition-colors text-xl"
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Appbar;







