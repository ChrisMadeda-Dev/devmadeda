// components/FeatureComparisonTable.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaMinus } from "react-icons/fa"; // Changed to react-icons/fa for Check and Minus

const FeatureComparisonTable = () => {
  // Define the data for the feature comparison table
  const featuresData = [
    {
      name: "Number of Pages",
      basic: "Up to 5",
      professional: "Up to 15",
      premium: "Unlimited",
    },
    {
      name: "Mobile-Responsive Design",
      basic: "check",
      professional: "check",
      premium: "check",
    },
    {
      name: "Basic SEO Optimization",
      basic: "check",
      professional: "check",
      premium: "check",
    },
    {
      name: "Advanced SEO Strategy",
      basic: "minus",
      professional: "check",
      premium: "check",
    },
    {
      name: "Custom Form & Workflow Development",
      basic: "minus",
      professional: "check",
      premium: "check",
    },
    {
      name: "Photo / Project Gallery",
      basic: "minus",
      professional: "check",
      premium: "check",
    },
    {
      name: "Social Media Integration",
      basic: "minus",
      professional: "check",
      premium: "check",
    },
    {
      name: "Custom Feature Development",
      basic: "minus",
      professional: "minus",
      premium: "check",
    },
    {
      name: "Dedicated Account Manager",
      basic: "minus",
      professional: "minus",
      premium: "check",
    },
    {
      name: "Priority Support (24/7)",
      basic: "minus",
      professional: "minus",
      premium: "check",
    },
    {
      name: "Monthly Performance Reports",
      basic: "minus",
      professional: "check",
      premium: "check",
    },
    {
      name: "Annual Strategy Consultation",
      basic: "minus",
      professional: "minus",
      premium: "check",
    },
  ];

  // Helper function to render the correct icon or text based on the feature value
  const renderFeatureValue = (value) => {
    if (value === "check") {
      return <FaCheck className="w-4 h-4 text-green-500 mx-auto" />; // FaCheck icon
    }
    if (value === "minus") {
      return <FaMinus className="w-4 h-4 text-gray-400 mx-auto" />; // FaMinus icon
    }
    return (
      <span className="text-gray-700 font-medium text-center block">
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
                  Basic Presence
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Professional Site
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider rounded-tr-xl"
                >
                  Premium Brochure
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
                    {renderFeatureValue(feature.basic)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {renderFeatureValue(feature.professional)}
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
