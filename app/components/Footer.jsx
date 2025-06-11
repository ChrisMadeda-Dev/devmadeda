"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// --- Importing necessary icons, including LinkedIn ---
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/**
 * Footer Component (Minimal Design with Social Links)
 *
 * Features a minimal, 3-column layout with essential links and
 * contact information on a dark background.
 */

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "My Work", href: "/work" },
  { name: "Contact Us", href: "/contact" },
];

// --- UPDATED: Added LinkedIn link back ---
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/devmadeda",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/DevMadeda",
    icon: FaXTwitter,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/devmadeda/",
    icon: FaInstagram,
  },
  // { name: "GitHub", href: "https://github.com/DevMadeda", icon: FaGithub }, // You can uncomment this to add GitHub back
];

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-black text-slate-300"
      variants={footerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Column 1: Logo & Tagline */}
          <motion.div variants={itemVariants}>
            <Link href="/" passHref>
              <span className="text-2xl font-bold text-white hover:text-[#FF2400] transition-colors duration-200 inline-block mb-2">
                Dev Madeda
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              Crafting Digital Experiences.
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

          {/* Column 3: Contact Us */}
          <motion.div variants={itemVariants}>
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact Me
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#FF2400] mr-3 mt-1 flex-shrink-0 h-4 w-4" />
                <span className="text-slate-300">
                  Nairobi, Kiambu County, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-[#FF2400] mr-3 flex-shrink-0 h-4 w-4" />
                <a
                  href="tel:+254740581585"
                  className="text-slate-300 hover:text-[#FF2400] hover:underline"
                >
                  +254 740 581 585
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#FF2400] mr-3 flex-shrink-0 h-4 w-4" />
                <a
                  href="mailto:devmadeda@gmail.com"
                  className="text-slate-300 hover:text-[#FF2400] hover:underline"
                >
                  devmadeda@gmail.com
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
