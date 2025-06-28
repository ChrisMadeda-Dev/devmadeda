"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const PricingCards = () => {
  const router = useRouter();

  const pricingTiers = [
    {
      name: "Standard",
      price: "KES 30,000",
      maintenanceCost: "KES 3,000/month",
      description:
        "Ideal for small businesses and startups establishing a foundational online presence and initial credibility.", // Shortened to 15 words
      features: [
        "3-5 Static Pages",
        "Template-Based Design",
        "Basic Contact Form",
        "Basic SEO & Google Map Integration",
        "Mobile & Desktop Responsiveness",
        "Basic Support & Training",
      ],
      isRecommended: false,
    },
    {
      name: "Premium",
      price: "KES 55,000",
      maintenanceCost: "KES 5,500/month",
      description:
        "For growing businesses enhancing their brand, showcasing more services, and actively generating leads.", // Shortened to 15 words
      features: [
        "7-10 Custom Pages",
        "Semi-Custom Design & Branding",
        "Advanced Contact Forms",
        "Improved SEO & Analytics Setup",
        "Basic CMS (Blog) & Social Integration",
        "Comprehensive Training & Revisions",
      ],
      isRecommended: true,
    },
    {
      name: "Custom",
      price: "KES 85,000+",
      maintenanceCost: "KES 8,500+/month",
      description:
        "For established firms seeking a unique brand presence with advanced informational display and modernization.", // Shortened to 15 words
      features: [
        "10-15+ Fully Custom Pages",
        "Bespoke UI/UX Design",
        "Complex Forms & Integrations",
        "Advanced SEO & Analytics Suite",
        "Full CMS with Training",
        "Unlimited Design Revisions & 1-Month Support",
      ],
      isRecommended: false,
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="show"
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
                {tier.isRecommended && (
                  <div className="absolute -top-3 right-0 -mt-2 -mr-2 px-4 py-1 bg-[#FF2400] text-white text-sm font-semibold rounded-full shadow-md transform rotate-6">
                    Recommended
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-5xl font-extrabold text-[#FF2400] mb-2">
                  {tier.price}
                </p>
                <p className="text-lg text-gray-500 mb-4">
                  + {tier.maintenanceCost}
                </p>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheck className="w-5 h-5 text-[#FF2400] mr-3 flex-shrink-0" />{" "}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")}
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
                <span>Get in Touch</span>
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;
