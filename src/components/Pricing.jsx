import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg4pricing.jpg";

const Pricing = () => {
  const pricingPlans = [
    { title: "ADMISSION FEES", price: "₹1000/-" },
    { title: "2 DAYS IN WEEK", price: "₹1000/-", subtitle: "(MONTHLY FEES)" },
    { title: "3 DAYS IN WEEK", price: "₹1500/-", subtitle: "(MONTHLY FEES)" },
    { title: "4 DAYS IN WEEK", price: "₹2000/-", subtitle: "(MONTHLY FEES)" },
    { title: "6 DAYS IN WEEK", price: "₹3000/-", subtitle: "(MONTHLY FEES)" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, type: "spring" },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className="relative bg-black text-white py-12 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/60" /> {/* overlay for readability */}

      <motion.h1
        className="relative text-[#ff0000] text-3xl font-bold mb-8 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        PRICING
      </motion.h1>

      {/* Flex Layout for Cards */}
      <div className="relative flex flex-wrap justify-center gap-6 px-6 z-10">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-b from-[#ff0000]/30 to-transparent p-6 rounded-xl text-center w-64 backdrop-blur-sm"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
            <p className="text-2xl font-semibold mb-1">{plan.price}</p>
            {plan.subtitle && (
              <p className="text-sm text-gray-200 italic">{plan.subtitle}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;


