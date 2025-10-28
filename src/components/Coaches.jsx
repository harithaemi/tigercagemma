import React from "react";
import { motion } from "framer-motion";
import Abhi from "../assets/abhi1.jpg";
import AshkarBasheer from "../assets/AshkarBasheer.jpg";
import Adithyanks1 from "../assets/Adithyanks1.jpg";
import insta from "../assets/instaori.svg";

const Coaches = () => {
  const coaches = [
    {
      img: AshkarBasheer,
      name: "Ashkar Basheer",
      title: "Head Coach",
      desc: "Head Coach of TigerCage Gym, Mongkol 5 Assistant Grand Master (Arjarn).International Coach (IFMA) and National Judge & Referee (AIMMAF, UMAI, AIU Grappling).Renowned for his leadership and commitment to professional combat sports coaching.",
      link: "https://www.instagram.com/coachashkarbasheer?igsh=OWdxcGtkdXh2dXdz", // 🔗 Replace this with Instagram link
    },
    {
      img: Adithyanks1,
      name: "Adithyan KS",
      title: "Coach",
      desc: "Internationally Certified Muay Thai Coach Affiliated with UMAI, IFMA, and KSMA. Khan 10 (Assistant Master), Kerala State Judge & Referee in Muay Thai.International Coach and Referee in Grappling, recognized by United World Wrestling (UWW)",
      link: "https://www.instagram.com/_coach_adithyan?igsh=bmM0dGVyamRwbHk2", // 🔗 Replace this with Instagram link
    },
    {
      img: Abhi,
      name: "Abhijith",
      title: "Coach",
      desc: " Pro Fighter and Striking Coach specializing in Boxing, Kickboxing, and Mixed Martial Arts. Dedicated to developing strong fundamentals and technical precision in fighters. Committed to training athletes for both competitive and fitness goals at TigerCage Gym.",
      link: "https://www.instagram.com/_p_a_k_k_i_?igsh=dGVwcWRzdDdmam8x", // 🔗 Replace this with Instagram link
    },
// //  Pro Fighter and Striking Coach specializing in Boxing, Kickboxing, and Mixed Martial Arts. Dedicated to developing strong fundamentals and technical precision in fighters. Committed to training athletes for both competitive and fitness goals at TigerCage Gym.

  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: i * 0.25, ease: "easeOut" },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.25 + 0.3, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-black p-6 flex flex-col items-center justify-center">
      <h1 className="text-[#ff0000] text-3xl m-4 font-bold p-2">OUR COACHES</h1>

      <div className="flex flex-wrap justify-center gap-6 mt-6 w-full max-w-6xl">
        {coaches.map((coach, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg text-center p-4 hover:scale-105 transform transition-all duration-500 ease-out w-80"
          >
            {/* Red Gradient Motion */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#ff0000]/25 to-transparent"
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {/* Coach Image */}
            <motion.img
              src={coach.img}
              alt={coach.name}
              className="w-full h-64 object-cover rounded-2xl"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {/* Text Section */}
            <motion.div
              custom={index}
              variants={textVariants}
              className="relative z-10 mt-4"
            >
              <h2 className="text-[#ff0000] text-2xl font-semibold">{coach.name}</h2>
              <h3 className="text-white text-lg">{coach.title}</h3>
              <p className="text-gray-300 text-sm mt-2 px-2 leading-relaxed">
                {coach.desc}
              </p>

              {/* Instagram Icon */}
              <div className="flex justify-center mt-3">
                <motion.a
                  href={coach.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={insta}
                    width={28}
                    alt="Instagram"
                    className="cursor-pointer"
                  />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Coaches;

