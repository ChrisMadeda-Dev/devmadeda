"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * ProjectDetailHeader Component (Improved Contrast & Visibility)
 *
 * Features a clear text hierarchy with a Deep Charcoal title, Medium Grey tagline,
 * a Scarlet accent, and a prominent hero image.
 */

// --- Framer Motion Variants ---
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }, // Stagger children: H1, Accent, P
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const accentLineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    originX: 0.5, // Ensure scaling from center for centered line
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }, // Delay after title
  },
};

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.4, ease: "easeOut" }, // Delay after text block
  },
};

export default function ProjectDetailHeader({ title, tagline, heroImage }) {
  return (
    <section className="w-full bg-white pt-20 pb-10 md:pt-28 md:pb-16">
      {/* Text Content Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-16" // Increased bottom margin
        variants={textContainerVariants}
        initial="hidden"
        animate="visible" // Animate on load
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1C1C1C] mb-4" // Deep Charcoal, heavier font
          variants={textItemVariants}
        >
          {title}
        </motion.h1>

        {/* Scarlet Accent Underline */}
        <motion.div
          className="h-1.5 w-24 md:w-32 bg-[#FF2400] mx-auto mb-8 rounded-full" // Increased bottom margin
          variants={accentLineVariants}
        />

        <motion.p
          className="text-lg md:text-xl text-[#6E6E6E] max-w-3xl mx-auto leading-relaxed" // Medium Grey, constrained width
          variants={textItemVariants}
        >
          {tagline}
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4" // Container for the image to respect max-width and padding
        variants={imageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Apply shadow and rounding to an inner div to avoid affecting layout of motion.div */}
        <div className="shadow-2xl rounded-xl overflow-hidden">
          <Image
            src={heroImage}
            alt={`${title || "Project"} Hero Image`}
            width={1200}
            height={700} // This implies a 12:7 aspect ratio. Adjust if your images differ.
            className="w-full h-auto object-cover block" // `block` to remove bottom space if any
            priority // Load hero image faster
            quality={90}
          />
        </div>
      </motion.div>
    </section>
  );
}
