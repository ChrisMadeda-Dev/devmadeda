"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

/**
 * AboutHero Component (Further Optimized 90vh Height)
 *
 * Features an optimized two-column layout (3/5 text, 2/5 image)
 * and a square aspect ratio for the image to better fit within 90vh.
 */

// --- Framer Motion Variants (No changes needed here) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.2,
    },
  },
};

// --- Main AboutHero Component ---
const AboutHero = () => {
  return (
    <section
      id="about-hero"
      // Kept 90vh, flex, items-center. Reduced PB slightly.
      className="bg-white w-full min-h-[90vh] flex items-center pt-16 md:pt-20 pb-10 md:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          // --- GRID & GAP CHANGES ---
          // Changed to 5-column layout on LG screens. Text takes 3, Image takes 2.
          // Increased gap slightly as image is smaller.
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column: Text Content --- TAKES 3 COLUMNS --- */}
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center md:text-left lg:col-span-3" // Set to span 3 columns on LG
          >
            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FF2400] mb-4 leading-tight"
              variants={textItemVariants}
            >
              I'm Madeda. Crafting High-Quality Websites That Deliver Business
              Growth.
            </motion.h1>

            {/* Scarlet Accent Line */}
            <motion.div
              className="h-1 w-20 bg-[#FF2400] mb-6 mx-auto md:mx-0 rounded-full"
              variants={textItemVariants}
            />

            {/* Sub-headline/Intro */}
            <motion.p
              className="text-base md:text-lg text-[#1C1C1C] mb-8 leading-relaxed"
              variants={textItemVariants}
            >
              Based in Nairobi, I build high-performance static websites using
              Next.js & Tailwind. My focus is combining clean code with
              intuitive design to help businesses establish a powerful online
              presence and achieve growth.
            </motion.p>

            {/* Link to Work */}
            <motion.div variants={textItemVariants} className="mt-6">
              <Link href="/work" passHref>
                <span className="inline-flex items-center text-base md:text-lg font-semibold text-[#FF2400] group cursor-pointer">
                  Explore My Work
                  <FaArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Image --- TAKES 2 COLUMNS --- */}
          <motion.div
            // Set to span 2 columns on LG. Kept max-w for smaller screens.
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-none mx-auto group lg:col-span-2"
            variants={imageContainerVariants}
          >
            {/* Accent Shape */}
            <div className="absolute -top-3 -right-3 w-full h-full bg-[#FF2400]/5 rounded-3xl -z-10 transform transition-transform duration-500 ease-in-out group-hover:rotate-[-3deg] group-hover:scale-105" />
            {/* Image Container --- ASPECT RATIO CHANGE --- */}
            <div
              // Changed to aspect-square for a shorter profile.
              className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 ease-in-out group-hover:rotate-[2deg] group-hover:scale-105"
            >
              <Image
                src="/images/dp.jpg" // <-- REPLACE with your photo path
                alt="[Your Name] - Professional Web Developer in Nairobi"
                layout="fill"
                objectFit="cover"
                quality={85}
                priority
              />
              {/* Subtle Image Overlay on Hover */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
