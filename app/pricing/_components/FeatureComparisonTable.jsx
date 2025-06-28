"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaMinus } from "react-icons/fa"; // Imported FaCheck and FaMinus

const FeatureComparisonTable = () => {
  // Define the data for the feature comparison table based on your document
  const featuresData = [
    {
      name: "Design Approach",
      basic: "Template-based with basic branding",
      professional: "Semi-custom design with brand elements",
      premium: "Fully bespoke design with custom UI/UX",
    },
    {
      name: "Number of Pages",
      basic: "3-5 static pages",
      professional: "7-10 custom-designed pages",
      premium: "10-15+ fully custom-designed pages",
    },
    {
      name: "Content Integration",
      basic: "Client provides content",
      professional: "Basic structure and image optimization",
      premium: "Content strategy guidance and rich media integration",
    },
    {
      name: "Responsiveness", // Aligned with "Mobile-Responsive Design" conceptually
      basic: "check", // Mobile, tablet, and desktop
      professional: "check", // Mobile, tablet, and desktop
      premium: "check", // Mobile, tablet, and desktop
    },
    {
      name: "Contact Form", // Renamed from Custom Form & Workflow Development
      basic: "Basic",
      professional: "Advanced",
      premium: "Complex with conditional logic",
    },
    {
      name: "Social Media", // Renamed from Social Media Integration
      basic: "Profile links",
      professional: "Sharing options",
      premium: "Advanced integration",
    },
    {
      name: "Basic SEO Setup", // Renamed from Basic SEO Optimization
      basic: "Titles, meta, sitemap",
      professional: "Improved SEO with keyword support",
      premium: "Advanced SEO with schema and competitor research",
    },
    {
      name: "Google Maps",
      basic: "Map on contact page",
      professional: "Map on contact page",
      premium: "Custom maps and markers",
    },
    {
      name: "Blog Functionality",
      basic: "minus", // Not included
      professional: "Basic CMS setup",
      premium: "Full CMS with training",
    },
    {
      name: "Analytics", // Renamed from Monthly Performance Reports
      basic: "minus", // Not included
      professional: "Google Analytics setup",
      premium: "Analytics + Search Console setup",
    },
    {
      name: "Revisions",
      basic: "1 major, 1 minor",
      professional: "2 major, 2 minor",
      premium: "Unlimited design, 3 content rounds",
    },
    {
      name: "Timeline (Approx.)",
      basic: "1-2 weeks",
      professional: "3-5 weeks",
      premium: "6-10+ weeks",
    },
    {
      name: "Post-Launch Support", // Renamed from Priority Support (24/7)
      basic: "Basic form access instructions",
      professional: "CMS training",
      premium: "Full training + 1-month support",
    },
    {
      name: "Hosting & Domain",
      basic: "Client managed",
      professional: "Client managed",
      premium: "Client managed",
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
                  Standard
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Premium
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider rounded-tr-xl"
                >
                  Custom
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
