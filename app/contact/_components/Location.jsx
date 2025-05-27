"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IoLocationSharp } from 'react-icons/io5'; // Using Ionicons 5 for a modern pin

/**
 * Location Component
 *
 * A simple section for the Contact page indicating the primary operating area.
 * Features a Light Grey background, a Scarlet location icon, and clear text.
 * Built with Next.js, Tailwind CSS, and Framer Motion.
 */

// --- Framer Motion Variants ---
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.1, // Slight delay for a smoother appearance
    },
  },
};

// --- Main Location Component ---
const Location = () => {
  return (
    <section id="location" className="bg-white py-16 md:py-24"> {/* Light Grey BG & Padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center flex flex-col items-center"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible" // Animate when the section scrolls into view
          viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% is visible
        >
          {/* Location Icon */}
          <IoLocationSharp aria-label="Location Pin Icon" className="text-5xl md:text-6xl text-[#FF2400] mb-5" />

          {/* Text */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#1C1C1C] font-medium max-w-3xl">
            Based in <span className="font-semibold">Nairobi, Kiambu County, Kenya</span> – Serving Businesses Globally.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;