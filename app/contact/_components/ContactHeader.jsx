"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * ContactHeader Component (Improved Design)
 *
 * A clean, high-contrast header section for the 'Contact' page.
 * Features a Scarlet background, left-aligned text, a white accent line,
 * and invites users to connect.
 */

// --- Framer Motion Variants ---
const headerContainerVariants = {
  // Renamed for clarity
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger headline, sub-headline, and accent
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants = {
  // Renamed for clarity
  hidden: { opacity: 0, x: -25 }, // Slide in from left slightly
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// --- Main ContactHeader Component ---
const ContactHeader = () => {
  return (
    <section id="contact-header" className="bg-[#FF2400] py-20 md:py-28">
      {" "}
      {/* Scarlet BG & Padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- IMPROVED HEADER TEXT BLOCK --- */}
        <motion.div
          className="text-left max-w-4xl" // Text left-aligned, max-width for readability
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible" // Animate on load, as it's the header
          // viewport={{ once: true }} // Not strictly needed with animate="visible" unless it might re-trigger
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight"
            variants={headerItemVariants}
          >
            Let's Build Something Great Together.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg md:text-xl text-white/90 leading-relaxed" // Using white with opacity
            variants={headerItemVariants}
          >
            Whether you have a question, a project idea, or just want to connect
            I'm here to help. Reach out through the method that works best for
            you.
          </motion.p>

          {/* White Accent Line */}
          <motion.div
            className="mt-8 h-1.5 w-24 bg-white rounded-full" // White accent line
            variants={headerItemVariants}
          />
        </motion.div>
        {/* --- END OF IMPROVED HEADER TEXT BLOCK --- */}
      </div>
    </section>
  );
};

export default ContactHeader;
