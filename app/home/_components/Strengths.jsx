"use client";

import React from "react";
import { motion } from "framer-motion";
// --- Importing icons from react-icons with CORRECT paths ---
import { IoMdRocket } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

/**
 * Strengths Component (Improved Header)
 *
 * Highlights key benefits and strengths using an icon-driven 3-column layout.
 * Features an improved section header, clean white background, Scarlet icons,
 * and subtle animations.
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

// Variants for the main strengths grid container
const strengthsGridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for each strength card's entrance animation.
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Variants for header elements
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

// --- Strength Card Sub-Component (Remains the same) ---
const StrengthCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100/80 cursor-pointer h-full flex flex-col"
      variants={cardVariants}
      whileHover={{ scale: 1.04, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="flex-grow">
        {Icon ? (
          <Icon className="text-5xl md:text-6xl text-[#FF2400] mx-auto mb-6" />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6" />
        )}
        <h3 className="text-xl lg:text-2xl font-semibold text-[#1C1C1C] mb-4">
          {title}
        </h3>
        <p className="text-base text-[#6E6E6E] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// --- Main Strengths Component ---
const Strengths = () => {
  return (
    <section id="strengths" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- IMPROVED HEADER SECTION --- */}
        <motion.div
          className="mb-16 md:mb-20 text-left" // Left-aligned header block
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
          {/* Scarlet Accent Line */}
          <motion.div
            className="mt-6 h-1.5 w-24 bg-[#FF2400] rounded-full"
            variants={headerItemVariants}
          />
        </motion.div>
        {/* --- END OF IMPROVED HEADER SECTION --- */}

        {/* Strengths Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={strengthsGridContainerVariants} // Using dedicated variants for the grid
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
