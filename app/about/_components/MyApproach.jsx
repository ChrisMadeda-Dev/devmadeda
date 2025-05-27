"use client";

import React from "react";
import { motion } from "framer-motion";
// --- Importing icons from react-icons ---
import { FaUsers, FaBullseye, FaCheckDouble } from "react-icons/fa";

/**
 * MyApproach Component (Improved Header)
 *
 * Details the core values and approach to projects, reinforcing work ethic.
 * Features an improved section header, a clean light grey background,
 * and an icon-driven 3-column layout.
 */

// --- Data for the Values Cards ---
const valuesData = [
  {
    icon: FaUsers, // Collaboration Icon
    title: "True Partnership",
    description:
      "I believe the best results come from working *with* you, not just *for* you. Expect open communication and a collaborative spirit throughout the entire process.",
  },
  {
    icon: FaBullseye, // Target/Goal Icon
    title: "Business-Focused",
    description:
      "It's not just about looking good; it's about results. I focus on understanding your business goals first, then build a website designed to help you achieve them.",
  },
  {
    icon: FaCheckDouble, // Quality/Checkmark Icon
    title: "Uncompromising Quality",
    description:
      "From design details and user experience to clean, maintainable code structure, I am committed to delivering work that meets the highest professional standards.",
  },
];

// --- Framer Motion Variants ---

// Variants for the grid of cards
const valuesGridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for each value card's entrance animation.
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
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

// --- Value Card Sub-Component (Remains the same from previous iteration) ---
const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="text-center p-8 md:p-10 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-white hover:border-gray-100 cursor-pointer h-full flex flex-col"
      variants={cardVariants}
      whileHover={{ scale: 1.04, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="flex-grow">
        <Icon className="text-4xl md:text-5xl text-[#FF2400] mx-auto mb-6" />
        <h3 className="text-xl lg:text-2xl font-bold text-[#1C1C1C] mb-4">
          {title}
        </h3>
        <p className="text-base text-[#6E6E6E] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// --- Main MyApproach Component ---
const MyApproach = () => {
  return (
    <section id="my-approach" className="bg-[#F5F5F5] py-20 md:py-28">
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
            How I Approach Every Project.
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-[#6E6E6E] max-w-3xl leading-relaxed"
            variants={headerItemVariants}
          >
            My process is built on collaboration, clear communication, and a
            relentless focus on delivering tangible value. I believe in a
            partnership approach to achieve outstanding results for your
            business.
          </motion.p>
          {/* Scarlet Accent Line */}
          <motion.div
            className="mt-6 h-1.5 w-24 bg-[#FF2400] rounded-full"
            variants={headerItemVariants}
          />
        </motion.div>
        {/* --- END OF IMPROVED HEADER SECTION --- */}

        {/* Values Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={valuesGridContainerVariants} // Using dedicated variants for the grid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {valuesData.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyApproach;
