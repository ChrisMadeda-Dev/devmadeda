// components/PricingCards.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa"; // Imported FaArrowRight
import { useRouter } from "next/navigation"; // Import useRouter

const PricingCards = () => {
  const router = useRouter(); // Initialize useRouter

  // Define the pricing tier data for each card
  const pricingTiers = [
    {
      name: "Basic Digital Presence",
      price: "KES 30,000",
      maintenanceCost: "KES 3,000/month", // Added maintenance cost
      description:
        "Ideal for businesses needing a professional online kickoff.",
      features: [
        "Responsive Web Design",
        "Up to 5 Pages",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "1-Year Domain Registration",
        "Standard Hosting Setup",
      ],
      isRecommended: false,
    },
    {
      name: "Professional Business Site",
      price: "KES 55,000",
      maintenanceCost: "KES 5,500/month", // Added maintenance cost
      description:
        "Perfect for growing businesses seeking enhanced features and reach.",
      features: [
        "Everything in Basic, plus:",
        "Up to 15 Pages",
        "Advanced SEO Strategy",
        "Custom Form Builds",
        "Social Media Integration",
        "CRM Integration (Basic)",
        "Monthly Performance Reports",
      ],
      isRecommended: true, // This card will be highlighted as recommended
    },
    {
      name: "Premium Corporate Brochure",
      price: "KES 85,000+",
      maintenanceCost: "KES 8,500+/month", // Added maintenance cost
      description:
        "Tailored solutions for established enterprises requiring robust online platforms.",
      features: [
        "Everything in Professional, plus:",
        "Unlimited Pages",
        "Complex System Integrations",
        "Dedicated Account Manager",
        "Priority Support (24/7)",
        "Comprehensive Analytics Dashboard",
        "Annual Strategy Consultation",
        "Custom Feature Development", // Moved Custom Feature Development to the end
      ],
      isRecommended: false,
    },
  ];

  // Framer Motion variants for the staggered animation of the pricing cards container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child card's animation
        delayChildren: 0.2, // Initial delay before the first child animates
      },
    },
  };

  // Framer Motion variants for individual card animation (fade-in and slide up)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Cards start invisible and slightly below position
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Cards fade in and slide to their position
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - REMOVED */}

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="show" // Animate to trigger on load
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`
                relative bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between
                ${
                  tier.isRecommended
                    ? "border-4 border-[#FF2400]"
                    : "border-4 border-transparent"
                }
              `}
            >
              <div>
                {/* "Recommended" Tag for the highlighted card */}
                {tier.isRecommended && (
                  <div className="absolute -top-3 right-0 -mt-2 -mr-2 px-4 py-1 bg-[#FF2400] text-white text-sm font-semibold rounded-full shadow-md transform rotate-6">
                    Recommended
                  </div>
                )}

                {/* Package Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                {/* Main Price */}
                <p className="text-5xl font-extrabold text-[#FF2400] mb-2">
                  {tier.price}
                </p>
                {/* Maintenance Cost */}
                <p className="text-lg text-gray-500 mb-4">
                  + {tier.maintenanceCost}
                </p>
                {/* Short Description */}
                <p className="text-gray-600 mb-6">{tier.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheck className="w-5 h-5 text-[#FF2400] mr-3 flex-shrink-0" />{" "}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get in Touch Button with Arrow */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")} // OnClick to navigate to /contact page
                className={`
                  mt-auto py-3 px-6 rounded-lg text-white font-semibold flex items-center justify-center space-x-2
                  transition-all duration-300 ease-in-out
                  ${
                    tier.isRecommended
                      ? "bg-[#FF2400] hover:bg-[#CC1E00]"
                      : "bg-gray-800 hover:bg-gray-900"
                  }
                  focus:outline-none focus:ring-2 focus:ring-[#FF2400] focus:ring-offset-2
                `}
              >
                <span>Get in Touch</span> {/* Button text */}
                <FaArrowRight className="w-4 h-4" /> {/* Arrow icon */}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;
