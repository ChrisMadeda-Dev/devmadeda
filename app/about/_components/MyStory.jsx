"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * MyStory Component (Improved Text Design)
 *
 * An enhanced, text-focused section for the 'About Me' page.
 * Features improved typography, no underlines on links, and subtle animations.
 */

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// --- Custom Link Component (for consistent styling) ---
const StyledLink = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#FF2400] font-semibold hover:opacity-80 transition-opacity duration-200" // No underline, hover opacity
  >
    {children}
  </Link>
);

// --- Custom Strong Component (for consistent styling) ---
const StyledStrong = ({ children }) => (
  <strong className="text-[#FF2400] font-bold">{children}</strong>
);

// --- Main MyStory Component ---
const MyStory = () => {
  return (
    <section id="my-story" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4 text-left"
            variants={itemVariants}
          >
            My Journey: From Concept to Code.
          </motion.h2>

          {/* Scarlet Accent Line */}
          <motion.div
            className="h-1.5 w-24 bg-[#FF2400] mb-12 rounded-full"
            variants={itemVariants}
          />

          {/* Prose Container (Focus on P and Blockquote) */}
          <motion.div
            className="prose prose-lg lg:prose-xl max-w-none 
                       text-[#1C1C1C]
                       prose-p:leading-relaxed
                       prose-blockquote:border-[#FF2400]
                       prose-blockquote:text-[#6E6E6E]
                       prose-blockquote:font-normal
                       prose-blockquote:text-xl
            "
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p variants={itemVariants}>
              My fascination with building things on the web started during my
              university days here in Nairobi. I was captivated by how lines of
              code could transform into interactive experiences. I quickly
              realized the immense power a well-crafted website holds for
              businesses – it's not just a page, it's a digital storefront, a
              communication hub, and often, a powerful{" "}
              <StyledStrong>platform for growth</StyledStrong>.
            </motion.p>

            <motion.p variants={itemVariants}>
              Today, I specialize in developing high-performance static websites
              using modern technologies like{" "}
              <StyledLink href="https://nextjs.org/">Next.js</StyledLink> and{" "}
              <StyledLink href="https://tailwindcss.com/">
                Tailwind CSS
              </StyledLink>
              . I thrive on the challenge of translating a business's unique
              vision and objectives into a digital experience that is not only
              functional and secure but also aesthetically pleasing and{" "}
              <StyledStrong>a joy for users to navigate</StyledStrong>.
            </motion.p>

            {/* Pull Quote */}
            <motion.blockquote
              className="pl-6 py-1 my-8"
              variants={itemVariants}
            >
              "Seeing a website I built help a client reach new customers,
              enhance their credibility, or streamline their operations is my
              greatest reward."
            </motion.blockquote>

            <motion.p variants={itemVariants}>
              What truly drives me is partnering with businesses to solve their
              digital puzzles. I believe in a foundation of{" "}
              <StyledStrong>professional integrity</StyledStrong>,{" "}
              <StyledStrong>transparent communication</StyledStrong>, and
              delivering <StyledStrong>uncompromising quality</StyledStrong> in
              every project I undertake. Whether you're a law firm, a travel
              agency, or a logistics company, I'm here to build the online
              platform that helps you succeed.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyStory;
