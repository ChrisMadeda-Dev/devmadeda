"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * ContactHeader Component
 *
 * A clean, high-contrast header section for the 'Contact' page.
 * Features a Scarlet background, a centered 3-word title and 5-word sub-heading.
 */

// --- Framer Motion Variants ---
const headerContainerVariants = {
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto" // Centered text block
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline (3 words) */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            variants={headerItemVariants}
          >
           Start Your Project
          </motion.h1>

          {/* White Accent Line */}
          <motion.div
            className="mt-8 h-1.5 w-24 bg-white rounded-full mx-auto"
            variants={headerItemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHeader;
