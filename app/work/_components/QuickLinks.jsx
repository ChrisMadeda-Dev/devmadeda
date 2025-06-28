"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Reusable Icon Component ---
const ExternalLinkIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// --- Main QuickLinks Component ---
export default function QuickLinks() {
  const websites = [
    {
      title: "PharmaCare Nairobi",
      description: "Pharmacy services and products in Nairobi.",
      url: "https://pharmacarenairobi.vercel.app/home",
      image: "/images/work/pharmacare.webp", // Added image path
      bgColor: "bg-sky-50",
      textColor: "text-sky-800",
      hoverColor: "hover:bg-sky-100",
    },
    {
      title: "Fortress Crest",
      description: "Accounting, ERP, and digital finance solutions.",
      url: "https://fortresscrest.vercel.app/home",
      image: "/images/work/fortresscrest.webp", // Added image path
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
      hoverColor: "hover:bg-blue-100",
    },
  ];

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Variants for the header (consistent with other components)
  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const accentLineVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            variants={headerItemVariants}
          >
            More Of My Work
          </motion.h2>
          <motion.div
            className="mt-4 h-1.5 w-24 bg-[#FF2400] mx-auto rounded-full"
            variants={accentLineVariants}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8" // Corrected sm:grid-2 to sm:grid-cols-2
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {websites.map((site) => (
            <motion.div
              key={site.title}
              variants={itemVariants}
              className={`group flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${site.bgColor} ${site.hoverColor}`}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold ${site.textColor}`}>
                  {site.title}
                </h3>
                <p className="mt-2 text-gray-600 flex-grow">
                  {site.description}
                </p>
                <div className="mt-6">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${site.textColor} bg-white group-hover:bg-gray-50 transition-colors duration-200`}
                  >
                    View Live Site
                    <ExternalLinkIcon className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
