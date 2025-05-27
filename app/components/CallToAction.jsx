"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * CallToAction Component
 *
 * A bold, high-impact final call-to-action section.
 * Features a dominant Scarlet background and a clear, persuasive message.
 * Built with Next.js, Tailwind CSS, and Framer Motion.
 */

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Delay for each child (H2, p, button)
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 13,
      duration: 0.6,
    },
  },
};

// --- Main CallToAction Component ---
const CallToAction = () => {
  return (
    <section id="contact-cta" className="bg-[#FF2400]">
      <motion.div
        className="max-w-7xl mx-auto text-center py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animate when section is in view
        viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% visible
      >
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
          variants={itemVariants}
        >
          Ready to Elevate Your Online Presence?
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Let's build a website that not only looks stunning but also delivers
          tangible business value. Reach out today for a no-obligation
          consultation to discuss your vision.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link href="/contact" passHref>
            <motion.div
              className="inline-block cursor-pointer text-lg sm:text-xl font-bold px-12 py-4 rounded-lg shadow-2xl bg-white text-[#FF2400]"
              style={{
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.35)", // More prominent shadow on hover
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              Book Your Free Consultation
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
