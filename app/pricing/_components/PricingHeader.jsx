// components/PricingHeader.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const PricingHeader = () => {
  // Framer Motion variants for the heading text
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state: invisible and slightly below position
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Duration of the animation
        ease: "easeOut", // Easing function for a smooth finish
      },
    },
  };

  return (
    // Section with scarlet background color
    <section className="bg-[#FF2400] py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/*
          Framer Motion for the heading text.
          'initial="hidden"' sets the starting state.
          'animate="visible"' triggers the animation on component mount.
        */}
        <motion.h1
          variants={textVariants} // Apply defined text animation variants
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4" // Text color changed to white for contrast
        >
          My Pricing {/* Two-worded heading as requested */}
        </motion.h1>

        {/* The subheading paragraph has been removed as per the request. */}
      </div>
    </section>
  );
};

export default PricingHeader; // Export the component
