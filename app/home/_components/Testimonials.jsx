"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// --- Importing icons from react-icons ---
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * Testimonials Component (Improved Header)
 *
 * Showcases client feedback using an elegant, animated slider,
 * introduced by an improved section header.
 * Features a clean white background, Scarlet accents, and Framer Motion transitions.
 */

// --- Placeholder Data ---
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

// Variants for the slider
const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

// Variants for header elements
const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};
const headerItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Main Testimonials Component ---
const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    let newPage = page + newDirection;
    if (newPage < 0) {
      newPage = testimonialsData.length - 1;
    } else if (newPage >= testimonialsData.length) {
      newPage = 0;
    }
    setPage([newPage, newDirection]);
  };

  const goToSlide = (slideIndex) => {
    setPage([slideIndex, slideIndex > page ? 1 : -1]);
  };

  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- IMPROVED HEADER SECTION --- */}
        <motion.div
          className="mb-16 md:mb-20 text-left" // Left-aligned header block
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight"
            variants={headerItemVariants}
          >
            Hear From Businesses I've Partnered With.
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-[#6E6E6E] max-w-3xl leading-relaxed"
            variants={headerItemVariants}
          >
            Real feedback from real clients. Discover how my commitment to
            quality, performance, and collaborative partnerships has helped
            businesses like yours achieve their online goals.
          </motion.p>
          {/* Scarlet Accent Line */}
          <motion.div
            className="mt-6 h-1.5 w-24 bg-[#FF2400] rounded-full"
            variants={headerItemVariants}
          />
        </motion.div>
        {/* --- END OF IMPROVED HEADER SECTION --- */}

        {/* Testimonial Slider Container */}
        <div className="relative max-w-3xl mx-auto min-h-[22rem] md:min-h-[20rem] overflow-hidden bg-white p-6 rounded-xl shadow-xl border border-gray-100/80">
          {" "}
          {/* Added shadow & border to slider box */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 text-center"
            >
              <FaQuoteLeft className="text-4xl md:text-5xl text-[#FF2400] mb-6 opacity-80" />
              <p className="text-lg md:text-xl text-[#6E6E6E] mb-8 italic leading-relaxed flex-grow">
                {" "}
                {/* flex-grow for text */}"{testimonialsData[page].quote}"
              </p>
              <div className="mt-auto">
                {" "}
                {/* Pushes client info to bottom */}
                <p className="font-bold text-lg text-[#1C1C1C]">
                  {testimonialsData[page].name}
                </p>
                <p className="text-sm text-[#6E6E6E]">
                  {testimonialsData[page].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 text-[#FF2400] shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF2400] focus:ring-offset-2 z-10"
            onClick={() => paginate(-1)}
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 text-[#FF2400] shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF2400] focus:ring-offset-2 z-10"
            onClick={() => paginate(1)}
            aria-label="Next Testimonial"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
                i === page
                  ? "bg-[#FF2400] scale-125"
                  : "bg-gray-300 hover:bg-[#FF2400]/60"
              }`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
