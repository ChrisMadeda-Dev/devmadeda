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
      bgColor: "bg-sky-50",
      textColor: "text-sky-800",
      hoverColor: "hover:bg-sky-100",
    },
    {
      title: "Fortress Crest",
      description: "Accounting, ERP, and digital finance solutions",
      url: "https://fortresscrest.vercel.app/home",
      // Updated colors for Fortress Crest based on common blue shades.
      // Please provide the exact hex or RGB values if you have a specific color in mind!
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

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            More Of My Work
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {websites.map((site) => (
            <motion.a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className={`group block p-6 rounded-xl transition-all duration-300 ${site.bgColor} ${site.hoverColor}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${site.textColor}`}>
                    {site.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{site.description}</p>
                </div>
                <ExternalLinkIcon
                  className={`w-5 h-5 ml-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 ${site.textColor}`}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
