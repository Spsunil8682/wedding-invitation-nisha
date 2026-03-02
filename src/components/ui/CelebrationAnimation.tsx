"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CelebrationAnimation: React.FC = () => {
  const { t } = useLanguage();
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("wedding-visited");

    if (!hasVisited) {
      // Use setTimeout to defer setState and avoid cascading renders
      const showTimer = setTimeout(() => {
        setShowCelebration(true);
      }, 100);

      localStorage.setItem("wedding-visited", "true");

      // Auto-hide after 6 seconds
      const hideTimer = setTimeout(() => {
        setShowCelebration(false);
      }, 6100);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  // Predefined confetti pieces to avoid Math.random() during render
  const confettiPieces = [
    { id: 1, x: 10, delay: 0.1, duration: 4, rotation: 45, color: "#FFD700" },
    { id: 2, x: 25, delay: 0.3, duration: 3.5, rotation: 90, color: "#FF69B4" },
    {
      id: 3,
      x: 40,
      delay: 0.2,
      duration: 4.5,
      rotation: 135,
      color: "#FF6B6B",
    },
    {
      id: 4,
      x: 55,
      delay: 0.4,
      duration: 3.8,
      rotation: 180,
      color: "#4ECDC4",
    },
    {
      id: 5,
      x: 70,
      delay: 0.1,
      duration: 4.2,
      rotation: 225,
      color: "#45B7D1",
    },
    {
      id: 6,
      x: 85,
      delay: 0.5,
      duration: 3.7,
      rotation: 270,
      color: "#96CEB4",
    },
    {
      id: 7,
      x: 15,
      delay: 0.8,
      duration: 4.1,
      rotation: 315,
      color: "#FFD700",
    },
    { id: 8, x: 35, delay: 0.6, duration: 3.9, rotation: 60, color: "#FF69B4" },
    {
      id: 9,
      x: 65,
      delay: 0.9,
      duration: 4.3,
      rotation: 120,
      color: "#FF6B6B",
    },
    {
      id: 10,
      x: 80,
      delay: 0.7,
      duration: 3.6,
      rotation: 240,
      color: "#4ECDC4",
    },
  ];

  const floatingHearts = [
    { id: 1, x: 20, delay: 0.5, duration: 5, size: 20 },
    { id: 2, x: 40, delay: 1.0, duration: 4.5, size: 24 },
    { id: 3, x: 60, delay: 0.8, duration: 5.2, size: 18 },
    { id: 4, x: 80, delay: 1.2, duration: 4.8, size: 22 },
    { id: 5, x: 30, delay: 1.5, duration: 4.3, size: 26 },
    { id: 6, x: 70, delay: 0.3, duration: 5.5, size: 16 },
  ];

  if (!showCelebration) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
      >
        {/* Background Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-pink-400/20 to-purple-400/20"
        />

        {/* Confetti */}
        {confettiPieces.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{
              y: -20,
              x: `${piece.x}vw`,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              rotate: piece.rotation,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: piece.duration,
              delay: piece.delay,
              ease: "easeOut",
            }}
            className="absolute w-3 h-3 rounded-sm"
            style={{ backgroundColor: piece.color }}
          />
        ))}

        {/* Floating Hearts */}
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              y: "100vh",
              x: `${heart.x}vw`,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              y: -50,
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: "easeOut",
            }}
            className="absolute text-pink-400"
          >
            <Heart size={heart.size} fill="currentColor" />
          </motion.div>
        ))}

        {/* Sparkles */}
        {[
          { x: 15, y: 20, delay: 0.5, size: 24 },
          { x: 85, y: 30, delay: 1.0, size: 28 },
          { x: 25, y: 70, delay: 1.5, size: 20 },
          { x: 75, y: 80, delay: 2.0, size: 26 },
          { x: 50, y: 15, delay: 0.8, size: 22 },
        ].map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{
              scale: 0,
              rotate: 0,
              x: `${sparkle.x}vw`,
              y: `${sparkle.y}vh`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 2,
              delay: sparkle.delay,
              repeat: 2,
              ease: "easeInOut",
            }}
            className="absolute text-yellow-400"
          >
            <Sparkles size={sparkle.size} />
          </motion.div>
        ))}

        {/* Central Celebration Emojis */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            className="text-center"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-8xl md:text-9xl"
            >
              🎉
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Celebration Emojis */}
        {[
          { emoji: "💖", x: 20, y: 30, delay: 1.0, size: "text-4xl" },
          { emoji: "🎊", x: 80, y: 25, delay: 1.2, size: "text-5xl" },
          { emoji: "✨", x: 15, y: 70, delay: 1.4, size: "text-3xl" },
          { emoji: "🌟", x: 85, y: 75, delay: 1.6, size: "text-4xl" },
          { emoji: "💕", x: 50, y: 20, delay: 1.8, size: "text-3xl" },
          { emoji: "🎈", x: 30, y: 80, delay: 2.0, size: "text-4xl" },
          { emoji: "🌹", x: 70, y: 85, delay: 2.2, size: "text-3xl" },
        ].map((item, i) => (
          <motion.div
            key={`emoji-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              ease: "easeOut",
            }}
            className={`absolute ${item.size}`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
          >
            {item.emoji}
          </motion.div>
        ))}

        {/* Firework Bursts */}
        {[
          { left: 20, top: 25, delay: 1.0 },
          { left: 80, top: 35, delay: 1.3 },
          { left: 30, top: 60, delay: 1.6 },
          { left: 70, top: 70, delay: 1.9 },
        ].map((firework, i) => (
          <motion.div
            key={`firework-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: firework.delay,
              ease: "easeOut",
            }}
            className="absolute"
            style={{
              left: `${firework.left}%`,
              top: `${firework.top}%`,
            }}
          >
            <div className="relative">
              {[
                { x: 25, y: 0 }, // 0°
                { x: 17.7, y: 17.7 }, // 45°
                { x: 0, y: 25 }, // 90°
                { x: -17.7, y: 17.7 }, // 135°
                { x: -25, y: 0 }, // 180°
                { x: -17.7, y: -17.7 }, // 225°
                { x: 0, y: -25 }, // 270°
                { x: 17.7, y: -17.7 }, // 315°
              ].map((position, j) => (
                <motion.div
                  key={j}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: 1,
                    x: position.x,
                    y: position.y,
                  }}
                  transition={{
                    duration: 1,
                    delay: firework.delay,
                  }}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default CelebrationAnimation;
