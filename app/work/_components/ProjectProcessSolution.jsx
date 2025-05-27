"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * ProjectProcessSolution Component (Improved Design)
 *
 * Details the project's approach, solution, and results with enhanced
 * visual hierarchy, styling, and animations.
 */

// --- Framer Motion Variants ---
const sectionBlockVariants = (slideDirection = -1) => ({
  // Default slide from left
  hidden: { opacity: 0, x: 50 * slideDirection },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
});

const resultsBlockVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectProcessSolution({
  approach,
  solution,
  results,
  images = [], // Default to empty array to prevent errors
}) {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {" "}
        {/* Adjusted spacing */}
        {/* --- Approach Section --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={sectionBlockVariants(-1)} // Slide from left
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-left">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight" /* Deep Charcoal */
              variants={contentItemVariants}
            >
              My Approach
            </motion.h3>
            <motion.div
              className="mt-3 mb-6 h-1.5 w-20 bg-[#FF2400] rounded-full" /* Scarlet Accent */
              variants={contentItemVariants}
            />
            <motion.p
              className="text-lg text-[#6E6E6E] leading-relaxed" /* Medium Grey */
              variants={contentItemVariants}
            >
              {approach}
            </motion.p>
          </div>
          {images.length > 0 && images[0] && (
            <motion.div
              className="overflow-hidden rounded-xl shadow-xl"
              variants={imageVariants}
            >
              <Image
                src={images[0]}
                alt="Project Approach Image"
                width={600}
                height={450} // Adjusted for a 4:3 ratio if desired, or keep 3:2 (600x400)
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}
        </motion.div>
        {/* --- Solution Section --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={sectionBlockVariants(1)} // Slide from right
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.length > 1 && images[1] && (
            <motion.div
              className="overflow-hidden rounded-xl shadow-xl md:order-2"
              variants={imageVariants}
            >
              <Image
                src={images[1]}
                alt="Project Solution Image"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}
          <div className="md:order-1 text-left">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight" /* Deep Charcoal */
              variants={contentItemVariants}
            >
              Delivering the Solution
            </motion.h3>
            <motion.div
              className="mt-3 mb-6 h-1.5 w-20 bg-[#FF2400] rounded-full" /* Scarlet Accent */
              variants={contentItemVariants}
            />
            <motion.p
              className="text-lg text-[#6E6E6E] leading-relaxed" /* Medium Grey */
              variants={contentItemVariants}
            >
              {solution}
            </motion.p>
          </div>
        </motion.div>
        {/* --- Results Section --- */}
        <motion.div
          className="bg-[#F5F5F5] p-8 md:p-12 rounded-2xl shadow-lg" /* Light Grey BG, more padding */
          variants={resultsBlockVariants} // Slide up
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-3 text-center leading-tight" /* Deep Charcoal */
            variants={contentItemVariants}
          >
            Impact & Outcomes
          </motion.h3>
          <motion.div
            className="mt-3 mb-8 h-1.5 w-20 bg-[#FF2400] rounded-full mx-auto" /* Scarlet Accent, centered */
            variants={contentItemVariants}
          />
          <motion.p
            className="text-xl text-[#6E6E6E] leading-relaxed text-center font-medium max-w-3xl mx-auto" /* Medium Grey */
            variants={contentItemVariants}
          >
            {results}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
