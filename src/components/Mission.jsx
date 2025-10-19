import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  const missionData = [
    {
      title: "MARTIAL ARTS SESSION",
      color: "from-[#ff0000]/25 to-transparent",
      items: [
        "BOXING",
        "GRAPPLING",
        "KICKBOXING",
        "BJJ",
        "WUSHU",
        "MMA",
        "MUAYTHAI",
        "SELF DEFENCE",
      ],
    },
    {
      title: "FITNESS SESSIONS",
      color: "from-[#72be43]/25 to-transparent",
      items: [
        "PERSONAL TRAINING",
        "SHAPE UP",
        "WEIGHT LOSS",
        "FAT LOSS",
        "WEIGHT GAINING",
        "INJURY PREVENTION",
        "SPORTS CONDITIONING",
        "INJURY REHABILITATION",
      ],
    },
    {
      title: "OTHER ACTIVITIES",
      color: "from-[#fed200]/25 to-transparent",
      items: [
        "SCHOOL GAMES",
        "UNIVERSITIES GAMES",
        "SPORTS COUNCIL GAMES",
        "PROMOTION FIGHTS",
        "INDIAN ARMY, NAVY, POLICE RECRUITMENT TRAINING",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.5 } },
  };

  return (
    <div className="bg-black py-12 flex flex-col items-center text-white">
      {/* Title */}
      <motion.h1
        className="text-[#ff0000] text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        OUR MISSION
      </motion.h1>

      {/* Sections */}
      <motion.div
        className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {missionData.map((section, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            variants={card}
          >
            <div className="border-b-2 border-white px-4 py-2 mb-4">
              <h2 className="text-lg font-semibold text-white text-center">
                {section.title}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {section.items.map((item, index) => {
                // Special case for last item of "OTHER ACTIVITIES"
                const isLastOfOther =
                  section.title === "OTHER ACTIVITIES" &&
                  index === section.items.length - 1;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(255,0,0,0.5)",
                    }}
                    className={`bg-gradient-to-b ${section.color} text-white font-semibold text-center px-4 py-3 rounded-lg w-40 ${
                      isLastOfOther ? "col-span-2 mx-auto" : ""
                    }`}
                  >
                    {item}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Mission;




