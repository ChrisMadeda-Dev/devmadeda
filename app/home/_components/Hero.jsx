"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Hero Component (Scarlet Dominant with Background Image)
 *
 * A bold, high-impact hero section with a dominant Scarlet overlay
 * on a background image. Features clean typography, a strong call to action,
 * and engaging animations.
 * Built with Next.js, Tailwind CSS, and Framer Motion.
 */

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time delay between each child animation
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

// --- Main Hero Component ---
const Hero = () => {
  return (
    // Set to relative to position children absolutely and overflow hidden
    <section
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ minHeight: "80vh" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-20" // Use z-index to place it at the very back
        style={{ backgroundImage: "url(/images/2.jpg)" }} // Path from public folder
      />

      {/* Scarlet Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-[#FF2400] opacity-85 -z-10" // Adjust opacity (e.g., 80-90%) for desired effect, place above image
      />

      {/* Content Container (needs to be relative and have z-index > overlay) */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-24 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight"
          variants={itemVariants}
        >
          Is Your Website Actively Growing Your Business? Let's Build One That
          Does.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-12 text-white/95 leading-relaxed" // Slightly increased opacity for better contrast on image
          variants={itemVariants}
        >
          Your website needs to be a growth engine, boosting your reputation and
          generating opportunities. I work closely with you to create a powerful
          online platform that attracts high-value leads and directly fuels your
          business success.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link href="/contact" passHref>
            <motion.div
              className="inline-block cursor-pointer text-lg sm:text-xl font-bold px-10 py-4 rounded-lg shadow-xl bg-white text-[#FF2400] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#FF2400]"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#F5F5F5", // Light Grey Hover BG
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Start Your Project Today
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
