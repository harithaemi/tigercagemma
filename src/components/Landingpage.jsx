import React from 'react';
import Bg from '../assets/bgfinal.mp4';
import Logo3 from '../assets/logowyellow.png';
import { motion } from 'framer-motion';

const Landingpage = () => {
  return (
    <div>
      {/* Video section 3/4 height */}
      <div className="relative w-full overflow-hidden" style={{ height: '75vh' }}>
        <video
          src={Bg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black z-10" />
      </div>

      {/* Content below video */}
      <div className="w-full flex flex-col items-center justify-center mt-4 bg-black px-4 py-8">
        <motion.img
          src={Logo3}
          alt="Logo"
          className="w-full max-w-3xl mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        <motion.p
          className="text-white m-4 mt-4 text-xl text-center w-3/4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <span className="text-[#ff0000] text-2xl p-2 font-bold">#</span>
          TigerCage MMA Gym, led by GFC Gym in Thrissur, offers expert training in MMA, Muay Thai, boxing, wrestling, and kickboxing. Our coaches focus on building skill, strength, and discipline for fighters of all levels.
        </motion.p>

        {/* JOIN NOW button with phone call */}
        <motion.div className="flex justify-center m-4 w-full">
          <a href="tel:7012693251">
            <motion.button
              className="cursor-pointer p-3 border-2 border-solid border-[#ff0000] text-[#ff0000] rounded-full shadow-md 
              hover:bg-red-600 hover:text-white transition-all duration-300 font-heading"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  '0 0 0px rgba(255,0,0,0)',
                  '0 0 15px 5px rgba(255,0,0,0.7)',
                  '0 0 0px rgba(255,0,0,0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              JOIN NOW
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Landingpage;



