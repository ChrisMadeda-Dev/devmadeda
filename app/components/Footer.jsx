"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// Importing necessary icons from react-icons
import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io"; // Alternative mail icon if preferred

/**
 * Footer Component (New Design based on Image)
 *
 * Features a multi-column layout with logo, quick links, services,
 * contact information, and social media connections on a dark background.
 */

// Footer Links Data (can be expanded or modified)
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" }, // Changed from "About" to match image
  { name: "Services", href: "/#strengths" }, // Example, point to a section or page
  // { name: "Track Shipment", href: "/track" }, // Specific to Nipto, commented out
  { name: "My Work", href: "/work" }, // Changed from "Get a Quote"
  { name: "Contact Us", href: "/contact" }, // Changed from "Contact"
];

const serviceLinks = [
  // Placeholder services, customize as needed
  { name: "Web Development", href: "/services#web-development" },
  { name: "Static Site Solutions", href: "/services#static-sites" },
  { name: "Next.js & React", href: "/services#nextjs-react" },
  { name: "Tailwind CSS Design", href: "/services#tailwind-css" },
  { name: "Performance Optimization", href: "/services#performance" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/devmadeda", // YOUR LINKEDIN
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/DevMadeda", // YOUR GITHUB
    icon: FaGithub,
  },
  // Add Twitter, Instagram, etc. if you have them
  // { name: "Twitter", href: "#", icon: FaTwitter },
  // { name: "Instagram", href: "#", icon: FaInstagram },
];

// --- Framer Motion Variants ---
const footerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Main Footer Component ---
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-black text-slate-300" // Changed to bg-black
      variants={footerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: Logo & Tagline */}
          <motion.div variants={itemVariants}>
            <Link href="/" passHref>
              <span className="text-2xl font-bold text-white hover:text-[#FF2400] transition-colors duration-200 inline-block mb-2">
                Dev Madeda
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              Crafting Digital Experiences. {/* Your Tagline */}
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} passHref>
                    <span className="text-slate-300 hover:text-[#FF2400] hover:underline text-sm transition-colors duration-200 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Our Services */}
          <motion.div variants={itemVariants}>
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              My Services
            </h5>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} passHref>
                    <span className="text-slate-300 hover:text-[#FF2400] hover:underline text-sm transition-colors duration-200 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div variants={itemVariants}>
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact Me
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#FF2400] mr-3 mt-1 flex-shrink-0 h-4 w-4" />
                <span className="text-slate-300">
                  [Your Street Address], <br />
                  Nairobi, Kiambu County, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-[#FF2400] mr-3 flex-shrink-0 h-4 w-4" />
                <a
                  href="tel:+254740581585"
                  className="text-slate-300 hover:text-[#FF2400] hover:underline"
                >
                  +254 740 581 585 {/* Your Phone */}
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#FF2400] mr-3 flex-shrink-0 h-4 w-4" />
                <a
                  href="mailto:devmadeda@gmail.com"
                  className="text-slate-300 hover:text-[#FF2400] hover:underline"
                >
                  devmadeda@gmail.com {/* Your Email */}
                </a>
              </li>
            </ul>
            {/* Social Icons for Contact Column */}
            <div className="flex space-x-5 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#FF2400] transition-colors duration-200"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright & Secondary Links */}
        <hr className="border-slate-700/60 my-8" />
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs text-slate-400 mb-4 sm:mb-0">
            &copy; {currentYear} Dev Madeda. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" passHref>
              <span className="text-xs text-slate-400 hover:text-[#FF2400] hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-of-service" passHref>
              <span className="text-xs text-slate-400 hover:text-[#FF2400] hover:underline cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
