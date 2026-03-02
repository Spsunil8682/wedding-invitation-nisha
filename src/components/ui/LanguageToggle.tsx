"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-sm font-medium text-gray-700">
        {language === "en" ? "EN" : "हि"}
      </span>
      <div className="w-8 h-4 bg-gray-200 rounded-full relative">
        <motion.div
          className="w-3 h-3 bg-pink-500 rounded-full absolute top-0.5"
          animate={{
            x: language === "en" ? 2 : 18,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      <span className="text-sm font-medium text-gray-700">
        {language === "en" ? "हि" : "EN"}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
