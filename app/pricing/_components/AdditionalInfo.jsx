// components/AdditionalInfo.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const AdditionalInfo = () => {
  // Data for the important information points
  const infoPoints = [
    {
      title: "Domain & Hosting",
      description:
        "All pricing packages include complimentary domain registration (for one year) and standard hosting setup. Subsequent annual renewals for domain and hosting services will be billed separately at prevailing market rates to ensure your website remains online and accessible.",
    },
    {
      title: "Content",
      description:
        "Clients are responsible for providing all website content (text, images, videos, logos, etc.) in a timely manner. Delays in content submission may affect project timelines. We can offer content creation support as an additional service upon request.",
    },
    {
      title: "Website Maintenance",
      description:
        "Our packages primarily cover design and development. Post-launch website maintenance, updates, and ongoing support are available as separate service agreements. We highly recommend a maintenance plan to keep your site secure, updated, and performing optimally.",
    },
  ];

  // Framer Motion variants for the fade-in animation of the entire section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts invisible and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Duration of the fade-in and slide-up animation
        ease: "easeOut", // Easing function for a smooth effect
        delay: 0.2, // Small delay before the animation starts
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/*
          Framer Motion for the entire section content.
          'initial="hidden"' sets the starting state.
          'whileInView="visible"' triggers the animation when the component scrolls into view.
          'viewport' ensures the animation plays only once and when a significant part is visible.
        */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of the section is visible
        >
          {/* Main Heading with Scarlet accent */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FF2400] leading-tight mb-6">
            Important Information
          </h2>

          {/* Subheading/Introductory Paragraph */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Please note the following regarding all website projects:
          </p>

          {/* Informational Points Grid/List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {infoPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalInfo; // Export the component
