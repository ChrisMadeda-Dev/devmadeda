"use client"; // This directive is necessary for using Framer Motion and other client-side hooks.

import { motion } from "framer-motion";

/**
 * WorkPageHeader Component
 * A dynamic and professional header for the main "Work" or "Portfolio" page.
 * Features a bold Scarlet background and an animated, centered title with a sub-heading.
 */

// --- Framer Motion Animation Variants ---

// Variants for the main container to orchestrate the animations of its children.
const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }, // Stagger reveal of title, sub-heading, and line
  },
};

// Variants for individual animated items (title, sub-heading, accent line).
const headerItemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and slightly down
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Animate to visible and original position
};

export default function WorkPageHeader() {
  return (
    // Section container with a Scarlet background and vertical padding.
    <section className="w-full bg-[#FF2400] text-white py-20 md:py-28">
      {/* Max-width container to keep content centered and readable on wide screens. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motion container that handles the entrance animation for its children. */}
        <motion.div
          className="text-center"
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible" // Animate on page load.
        >
          {/* Animated Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
            variants={headerItemVariants}
          >
            Explore My Work
          </motion.h1>

          {/* Animated Scarlet Accent Line (used as an underline) */}
          <motion.div
            className="mt-8 h-1.5 w-24 bg-white mx-auto rounded-full" // Adjusted margin
            variants={headerItemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
}
