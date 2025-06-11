"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Ensure Image is imported
import { FaArrowRight } from "react-icons/fa"; // Re-added for CTA button

/**
 * Hero Component (Updated Headline & Sub-headline)
 *
 * Designed to fill the viewport height below the navbar, with a Scarlet dominant theme.
 */

// --- Framer Motion Variants (no changes needed here) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
    <section
      className="relative w-full flex items-center justify-center overflow-hidden
                 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]"
    >
      {/* Background Image --- UPDATED --- */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-top -z-20"
        style={{ backgroundImage: "url(/images/bg1.jpg)" }} // Path updated to 1.jpg
      />

      {/* Scarlet Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[#FF2400] opacity-87 -z-10" />

      {/* Content Container */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight"
          variants={itemVariants}
        >
          Every Business Needs a Website!
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-12 text-white/95 leading-relaxed"
          variants={itemVariants}
        >
          In today's digital world, online presence isn't just an
          option—it's essential. I craft great and functional
          websites for businesses that build credibility, attract customers, and drive
          growth for your business.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link href="/contact" passHref>
            <motion.div
              className="inline-flex items-center gap-3 cursor-pointer text-lg sm:text-xl font-bold px-10 py-4 rounded-lg shadow-xl bg-white text-[#FF2400] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#FF2400]"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#F5F5F5",
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Start Your Project Today
              <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />{" "}
              {/* Re-added icon */}
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
