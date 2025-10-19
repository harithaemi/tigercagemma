import React, { useState } from "react";
import { motion } from "framer-motion";
import Boxing from "../assets/Boxing.jpg";
import Kickboxing from "../assets/kickboxing.jpg";
import MuayThai from "../assets/muaythai.jpg";
import Grappling from "../assets/grappling.jpg";
import Wrestling from "../assets/wrestling.jpg";
import MMA from "../assets/MMA.jpg";
import wushu from "../assets/wushu.jpg";
import BJJ from "../assets/BJJ.jpg";
import selfdefence from "../assets/selfdefence.jpg";
const services = [
  {
    title: "Boxing",
    description: "Sharpen your speed, precision, and striking power.",
    image: Boxing,
  },
  {
    title: "Kickboxing",
    description: "Master powerful kicks and punches with explosive energy.",
    image: Kickboxing,
  },
  {
    title: "Muay Thai",
    description: "Train the art of eight limbs — strength, focus, and control.",
    image: MuayThai,
  },
  {
    title: "Grappling",
    description: "Develop ground control, submissions, and fight endurance.",
    image: Grappling,
  },
  {
    title: "Wrestling",
    description: "Build strength, stamina, and world-class takedown skills.",
    image: Wrestling,
  },
  {
    title: "MMA",
    description: "Combine all combat techniques into one powerful discipline.",
    image: MMA,
  },
   {
    title: "Self Defence",
    description: "Build confidence and stay ready with real-life protection skills.",
    image: selfdefence,
  },
   {
    title: "Wushu",
    description: "Master speed, power, and precision with dynamic martial arts moves.",
    image: wushu,
  },
   {
    title: "BJJ",
    description: "Dominate the ground game with smart, technical grappling.",
    image: BJJ,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-black p-6 flex flex-col items-center justify-center">
      <h1 className="text-[#ff0000] text-3xl m-2 font-bold p-2">OUR SERVICES</h1>

      <motion.p
        className="text-white text-xl text-center w-3/4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className="text-[#ff0000] text-2xl p-2 font-bold">#</span>
        Unleash the warrior within our programs are built to push your body,
        sharpen your mind, and turn you into a fighter.
      </motion.p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-72 h-72 rounded-2xl overflow-hidden cursor-pointer group"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Background Image */}
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500"
              animate={{
                scale: activeIndex === index ? 1.1 : 1,
              }}
            />

            {/* Red-to-Black Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#ff0000]/70 to-black/80 transition-all duration-500"
              animate={{
                opacity: activeIndex === index ? 1 : 0.4,
              }}
            ></motion.div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <motion.h2
                className="text-xl font-bold mb-2"
                animate={{
                  y: activeIndex === index ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h2>

              <motion.p
                className="text-sm"
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

