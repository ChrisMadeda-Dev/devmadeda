"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";

/**
 * Location Component with Custom Map Embed
 *
 * Displays a user-provided Google Maps iframe within a styled, responsive,
 * and animated section.
 */

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// --- Main Location Component ---
const Location = () => {
  return (
    <section id="location" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-block">
            <IoLocationSharp
              aria-label="Location Pin Icon"
              className="text-5xl md:text-6xl text-[#FF2400] mb-4"
            />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#1C1C1C]"
            variants={itemVariants}
          >
            Based in Nairobi, Kenya
          </motion.h2>
          <motion.p
            className="mt-2 text-lg text-[#6E6E6E]"
            variants={itemVariants}
          >
            Serving Businesses Globally.
          </motion.p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="relative w-full aspect-[16/10] sm:aspect-video max-h-[550px] mx-auto 
                     rounded-2xl shadow-xl overflow-hidden border-4 border-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* --- Your Embedded iframe --- */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.358691889!2d36.68224051813023!3d-1.3028602666181195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1749634002456!5m2!1sen!2ske"
            width="100%" // Changed to 100% for responsiveness
            height="100%" // Changed to 100% for responsiveness
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            // Grayscale filter for modern look, removes filter on hover
            className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
