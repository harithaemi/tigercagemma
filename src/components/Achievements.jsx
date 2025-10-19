import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import leftarrow from "../assets/redarrow.svg";
import rightarrow from "../assets/redarrow.svg";
import bg from '../assets/bgachievements.jpg';

const Achievements = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat p-10 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl">
        <h1 className="text-[#ff0000] text-3xl md:text-4xl font-bold mb-6 text-center">
          ACHIEVEMENTS
        </h1>

        <div className="flex items-center justify-center w-full gap-4 md:gap-6">
          {/* Left Arrow */}
          <img
            src={leftarrow}
            alt="previous"
            className="w-10 h-10 md:w-14 md:h-14 cursor-pointer transform -scale-x-100 hover:scale-110 transition-transform"
            onClick={prevImage}
          />

          {/* Image Container */}
          <div className="relative w-[90%] md:w-2/3 h-64 md:h-80 overflow-hidden rounded-xl bg-black flex items-center justify-center">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`achievement-${currentIndex}`}
                className="absolute w-full h-full object-contain rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <img
            src={rightarrow}
            alt="next"
            className="w-10 h-10 md:w-14 md:h-14 cursor-pointer hover:scale-110 transition-transform"
            onClick={nextImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;






