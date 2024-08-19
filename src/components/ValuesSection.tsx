"use client";
import React from "react";
import { motion } from "framer-motion";

const ValuesSection = () => {
  const values = [
    {
      title: "Secure",
      icon: "🔒",
      description:
        "We prioritise the security of our users' data, ensuring that their information is protected at all times.",
      number: "01",
      category: "Security",
    },
    {
      title: "Detail",
      icon: "🔍",
      description:
        "Attention to detail is in everything we do, from design to implementation, ensuring a flawless user experience.",
      number: "02",
      category: "Quality",
    },
    {
      title: "Innovation",
      icon: "💡",
      description:
        "We constantly seek new ways to solve problems and enhance user experiences with cutting-edge solutions.",
      number: "03",
      category: "Innovation",
    },
    {
      title: "User-Centric",
      icon: "👥",
      description:
        "Our users are at the heart of our design and development process, guiding us to create what truly matters to them.",
      number: "04",
      category: "User Focus",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-7xl">
        <motion.h2
          className="text-center text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="relative group bg-white dark:bg-[#1A1A1A] border dark:border-white/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="absolute -top-8 right-8 transform rotate-12">
                <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[#f2f2f2] dark:bg-[#242424] rounded-full shadow-md text-4xl md:text-5xl">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#171717] dark:text-white mt-12 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
              <div className="absolute bottom-4 right-4 text-xs text-[#DEDEDE] dark:text-[#333333]">
                {value.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
