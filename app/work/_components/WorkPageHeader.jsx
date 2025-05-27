"use client"; // Needed for Framer Motion

import { motion } from "framer-motion";

/**
 * WorkPageHeader Component (Scarlet Background)
 *
 * A dynamic and professional header for the main "Work" or "Portfolio" page.
 * Features a bold Scarlet background, left-aligned text, and a subtle accent.
 */

// --- Framer Motion Variants ---
const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }, // Stagger children reveal
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, x: -25 }, // Slide in from left
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WorkPageHeader() {
  return (
    // --- CHANGE: Background changed to Scarlet ---
    <section className="w-full bg-[#FF2400] text-white py-20 md:py-28">
      {" "}
      {/* Scarlet BG */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-left"
          variants={headerContainerVariants}
          initial="hidden"
          animate="visible" // Animate on load as it's a page header
          // viewport={{ once: true }} // Good practice with animate prop
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
            variants={headerItemVariants}
          >
            Explore My Work: <br className="hidden md:block" />
            Digital Solutions in Action.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed" // Using white with higher opacity for Scarlet BG
            variants={headerItemVariants}
          >
            Here's a selection of projects where I've partnered with businesses
            to create fast, professional, and effective static websites that
            drive results.
          </motion.p>

          {/* Accent Line - Changed to white for contrast on Scarlet BG */}
          <motion.div
            className="mt-8 h-1.5 w-24 bg-white rounded-full" // White accent line
            variants={headerItemVariants}
          />

          {/* Optional Filter Buttons can go here */}
          {/* Example placeholder for filters:
          <motion.div className="mt-10 flex flex-wrap gap-4" variants={headerItemVariants}>
            <button className="px-6 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors">All</button>
            <button className="px-6 py-2 bg-black/10 text-white/80 rounded-full hover:bg-black/20 transition-colors">Web Design</button>
            <button className="px-6 py-2 bg-black/10 text-white/80 rounded-full hover:bg-black/20 transition-colors">Next.js</button>
          </motion.div>
          */}
        </motion.div>
      </div>
    </section>
  );
}
