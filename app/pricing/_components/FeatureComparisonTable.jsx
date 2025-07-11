"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa"; // Imported FaCheck and FaTimes

const FeatureComparisonTable = () => {
  // Define the data for the feature comparison table based on your document
  const featuresData = [
    {
      name: "Ideal For",
      starter:
        "Individuals or small businesses needing a single-page lead generator.",
      standard:
        "Small businesses or professionals looking to build credibility.",
      premium:
        "Growing businesses ready to showcase more content and drive conversions.",
    },
    {
      name: "One-Time Price (KSh)",
      starter: "15,000",
      standard: "30,000",
      premium: "55,000+", // Updated price
    },
    {
      name: "Monthly Maintenance (KSh)",
      starter: "1,500",
      standard: "3,000",
      premium: "5,500",
    },
    {
      name: "Annual Maintenance (KSh)",
      starter: "15,000",
      standard: "30,000",
      premium: "55,000",
    },
    {
      name: "Pages",
      starter: "1-page (Hero, Services/About, Contact)",
      standard: "3–5 pages",
      premium: "7–10 pages",
    },
    {
      name: "Design Approach",
      starter: "Template-based, responsive",
      standard: "Template-based with light branding",
      premium: "Semi-custom design with deeper brand integration",
    },
    {
      name: "Content",
      starter: "Provided by client",
      standard: "Provided by client",
      premium: "Provided with guidance, includes gallery setup",
    },
    {
      name: "Responsiveness",
      starter: true,
      standard: true,
      premium: true,
    },
    {
      name: "Contact Form",
      starter: "Basic (Name, Email, Message)",
      standard: "Basic",
      premium: "Advanced (dropdowns, etc.)",
    },
    {
      name: "Social Media Links",
      starter: "Basic links",
      standard: "Basic links",
      premium: "Integrated sharing options",
    },
    {
      name: "Basic SEO Setup",
      starter: "Titles, meta description",
      standard: "Includes sitemap",
      premium: "Enhanced SEO strategy",
    },
    {
      name: "Google Maps",
      starter: false,
      standard: true,
      premium: true,
    },
    {
      name: "Blog",
      starter: false,
      standard: false,
      premium: "Setup included (CMS, no initial posts)",
    },
    {
      name: "Analytics",
      starter: "Basic monitoring",
      standard: "Basic monitoring",
      premium: "Google Analytics setup",
    },
    {
      name: "Revisions",
      starter: "1 round minor",
      standard: "1 major + 1 minor",
      premium: "2 major + 2 minor",
    },
    {
      name: "Timeline (Approx.)",
      starter: "3–5 business days",
      standard: "1–2 weeks",
      premium: "3–5 weeks",
    },
    {
      name: "Post-Launch Support",
      starter: "Basic instructions",
      standard: "Contact form access",
      premium: "CMS training if blog is included",
    },
    {
      name: "Hosting & Domain",
      starter: "Client buys domain, we host",
      standard: "Client handles domain & hosting",
      premium: "Client handles domain & hosting",
    },
  ];

  // Helper function to render the correct icon or text based on the feature value
  const renderFeatureValue = (value) => {
    if (value === true) {
      return <FaCheck className="w-4 h-4 text-green-500 mx-auto" />;
    }
    if (value === false) {
      return <FaTimes className="w-4 h-4 text-gray-400 mx-auto" />;
    }
    return (
      <span className="text-gray-700 font-medium text-center block text-sm sm:text-base">
        {value}
      </span>
    );
  };

  // Framer Motion variants for the fade-in animation of the entire table section
  const tableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center mb-12">
          Feature Comparison
        </h2>

        <motion.div
          variants={tableVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200"
        >
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table Header */}
            <thead className="bg-[#FF2400]">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider rounded-tl-xl"
                >
                  Feature
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Starter
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Standard (Recommended)
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider rounded-tr-xl"
                >
                  Premium
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {featuresData.map((feature, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {feature.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {renderFeatureValue(feature.starter)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {renderFeatureValue(feature.standard)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {renderFeatureValue(feature.premium)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
