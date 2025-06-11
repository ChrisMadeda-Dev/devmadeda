"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa"; // Only need FaQuoteLeft now

/**
 * Testimonials Component (Updated: Centered Header, 2-Card Grid)
 *
 * Showcases client feedback in a modern 2-column grid. Each card features
 * a decorative background quote mark for visual appeal.
 */

// --- Placeholder Data (remains the same) ---
const testimonialsData = [
  {
    quote:
      "Working with Dev Madeda was a game-changer. Our new website is incredibly fast, looks fantastic, and has already boosted inquiries. Highly recommended!",
    name: "B.V. Francis",
    title: "Managing Partner, B.V. Francis & Associates",
  },
  {
    quote:
      "The professionalism and technical skill demonstrated were top-notch. The platform delivered exceeded our expectations in every way, streamlining our operations significantly.",
    name: "Alice Mwangi",
    title: "Operations Manager, Global Logistics Hub",
  },
  {
    quote:
      "Our online presence is now as vibrant as our travel packages. The process was smooth, collaborative, and the end result is a website we're truly proud of.",
    name: "David Chen",
    title: "Marketing Director, Wanderlust Travel Co.",
  },
  {
    quote:
      "Exceptional attention to detail and a deep understanding of modern web standards. The final product is both beautiful and highly functional.",
    name: "Samantha Lee",
    title: "Founder, Innovate AI Solutions",
  },
];

// --- Framer Motion Variants ---
const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const accentLineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

// --- Testimonial Card Sub-Component (New Design) ---
const TestimonialCard = ({ quote, name, title }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden h-full flex flex-col"
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: "0px 12px 24px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <FaQuoteLeft className="absolute -top-4 -left-4 text-[7rem] lg:text-[8rem] text-[#FF2400] opacity-[0.07] -z-0" />
      <div className="relative z-10 flex flex-col flex-grow h-full">
        <p className="text-lg md:text-xl text-[#374151] italic leading-relaxed mb-6 flex-grow">
          "{quote}"
        </p>
        <div className="mt-auto pt-5 border-t border-gray-200">
          <p className="font-bold text-md text-[#1C1C1C]">{name}</p>
          <p className="text-sm text-[#6E6E6E]">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Testimonials Component ---
const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- UPDATED HEADER SECTION --- */}
        <motion.div
          className="mb-16 md:mb-20 text-center" // Centered text block
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight"
            variants={headerItemVariants}
          >
            What They Said
          </motion.h2>
          {/* Scarlet Accent Underline */}
          <motion.div
            className="mt-4 h-1.5 w-24 bg-[#FF2400] mx-auto rounded-full"
            variants={accentLineVariants}
          />
        </motion.div>
        {/* --- END OF UPDATED HEADER SECTION --- */}

        {/* Testimonials Grid --- UPDATED --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto" // Added max-w for better centering of 2 items
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Displaying only the first two testimonials */}
          {testimonialsData.slice(0, 2).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
