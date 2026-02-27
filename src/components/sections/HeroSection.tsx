"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { calculateTimeLeft } from "@/lib/utils";
import { weddingDate, coupleNames } from "@/data/wedding";
import Button from "@/components/ui/Button";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(weddingDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("events");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/IMG_4188.jpg')`,
          }}
        />
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 text-white opacity-20 animate-float">
          <Heart size={32} fill="currentColor" />
        </div>
        <div
          className="absolute top-40 right-20 text-white opacity-25 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Heart size={24} fill="currentColor" />
        </div>
        <div
          className="absolute bottom-40 left-20 text-white opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Heart size={28} fill="currentColor" />
        </div>
        <div
          className="absolute bottom-20 right-10 text-white opacity-25 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Heart size={20} fill="currentColor" />
        </div>
      </div>

      {/* Main Content */}
      <div
        className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        style={{ marginTop: "80px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-lavishly text-[50px] md:text-8xl lg:text-9xl text-white drop-shadow-lg">
            {coupleNames.groom} & {coupleNames.bride}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center "
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-white"></div>
          <Heart className="mx-4 text-white" size={32} fill="currentColor" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-white"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-playfair-display text-lg md:text-2xl lg:text-3xl mb-2 text-white drop-shadow-md"
        >
          Two Hearts, One Journey
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-8"
        >
          <p className="text-base md:text-xl mb-2 text-white">
            We&apos;re getting married on
          </p>
          <p className="font-playfair-display text-xl md:text-3xl font-bold text-white drop-shadow-md">
            April 23, 2026
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="grid grid-cols-4 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto"
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <motion.div
                className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white border-opacity-50 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-md">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-[9px] md:text-base text-white uppercase tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document
                .getElementById("events")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Events
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute  left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white hover:text-gray-200 transition-colors"
          >
            <span className="text-sm mb-2 uppercase tracking-wider">
              Scroll Down
            </span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
