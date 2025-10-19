import React from 'react';
import Logo from '../assets/logo2red.svg';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import BoxingAnimation from '../assets/BoxingAnimation.json';
import whatsapp from '../assets/whatsappori.svg';
import bg from '../assets/bgfooter.jpg';

const Footer = () => {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center px-4 py-8 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content wrapper (keeps all content above overlay) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo Section */}
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-3/4 max-w-3xl mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Tagline */}
        <p className="text-[#e2e2e2] m-4 mt-4 text-2xl text-center w-3/4 mb-2">
          <span className="text-[#ff0000]">P</span>recision.
          <span className="text-[#ff0000]"> P</span>ower.
          <span className="text-[#ff0000]"> P</span>assion.
        </p>

        {/* Description */}
        <p className="text-[#e2e2e2] m-4 text-xl text-center w-3/4 mb-6">
          Join TigerCage MMA today and train with the best to become your best.
        </p>

        {/* WhatsApp Icon (Bouncing) */}
        <motion.a
          href="https://wa.me/918593004445"
          target="_blank"
          rel="noreferrer"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          className="flex justify-center items-center mb-6"
        >
          <img
            src={whatsapp}
            width={50}
            alt="WhatsApp"
            className="hover:scale-110 transition-transform"
          />
        </motion.a>

        {/* Lottie Animation */}
        <div className="flex justify-center items-center w-full">
          <div className="w-56 sm:w-64 md:w-80">
            <Lottie animationData={BoxingAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


