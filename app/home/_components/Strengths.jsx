"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoMdRocket } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

/**
 * Strengths Component (Refined "Glassy" Feel on White Background)
 *
 * Highlights key benefits with polished cards that aim for a subtle glassy/blurry
 * aesthetic through transparency, soft shadows, and refined details.
 */

// --- Data for the Strengths Cards ---
const strengthsData = [
  {
    icon: IoDiamondOutline,
    title: "Quality Craftsmanship",
    description:
      "From pixel-perfect design to robust, clean code, expect an exceptional user experience that delivers real results.",
  },
  {
    icon: FaRegHandshake,
    title: "Professional Integrity",
    description:
      "Experience transparent communication, on-time delivery, and a collaborative partnership built on trust.",
  },
  {
    icon: IoMdRocket,
    title: "Future-Proof Technology",
    description:
      "Built with Next.js & Tailwind for unmatched speed, security, and scalability that grows with your business.",
  },
];

// --- Framer Motion Variants ---

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardBaseVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};
const headerItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Strength Card Sub-Component (Simulated Glassy/Blurry Style) ---
const StrengthCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="text-center p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl 
                 border border-white/30 h-full flex flex-col cursor-pointer"
      // bg-white/90: Slight transparency.
      // backdrop-blur-md: Will blur its own shadow or anything subtly behind.
      // rounded-3xl: Softer, more "glass-like" rounding.
      // border-white/30: Very subtle "edge" highlight.
      variants={cardBaseVariants}
      whileHover={{
        scale: 1.05,
        y: -10,
        backgroundColor: "rgba(255, 255, 255, 0.98)", // Increase opacity slightly
        borderColor: "rgba(255, 255, 255, 0.5)",    // Make border more visible
        boxShadow: "0 25px 35px -10px rgba(0,0,0,0.12), 0 10px 15px -8px rgba(0,0,0,0.1)", // Softer, slightly larger shadow
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="flex-grow">
        <motion.div
          className="mx-auto mb-8 flex items-center justify-center h-20 w-20 rounded-full bg-[#FF2400]/10"
          variants={cardItemVariants}
        >
          {Icon ? (
            <Icon className="text-4xl text-[#FF2400]" />
          ) : (
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
          )}
        </motion.div>

        <motion.h3
          className="text-xl lg:text-2xl font-semibold text-[#1C1C1C] mb-4"
          variants={cardItemVariants}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-base text-[#6E6E6E] leading-relaxed"
          variants={cardItemVariants}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

// --- Main Strengths Component ---
const Strengths = () => {
  return (
    <section id="strengths" className="bg-white py-20 md:py-28"> {/* White Section BG */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section (Remains the same improved version) */}
        <motion.div
          className="mb-16 md:mb-20 text-left"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight"
            variants={headerItemVariants}
          >
            The Advantage of Working With Me.
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-[#6E6E6E] max-w-3xl leading-relaxed"
            variants={headerItemVariants}
          >
            Beyond just code, I bring a commitment to excellence, clear
            communication, and results-driven solutions to every project,
            ensuring your success is at the forefront.
          </motion.p>
          <motion.div
            className="mt-6 h-1.5 w-24 bg-[#FF2400] rounded-full"
            variants={headerItemVariants}
          />
        </motion.div>

        {/* Strengths Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {strengthsData.map((strength, index) => (
            <StrengthCard
              key={index}
              icon={strength.icon}
              title={strength.title}
              description={strength.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Strengths;