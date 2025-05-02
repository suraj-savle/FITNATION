import React from "react";
import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialIcons = [
    { icon: <FiFacebook size={18} />, name: "Facebook" },
    { icon: <FiTwitter size={18} />, name: "Twitter" },
    { icon: <FiInstagram size={18} />, name: "Instagram" },
    { icon: <FiYoutube size={18} />, name: "YouTube" },
  ];

  const footerLinks = [
    { name: "Services", href: "#services" },
    { name: "Facility", href: "#facility" },
    { name: "About", href: "#about" },
    { name: "Merchandise", href: "#merchandise" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <motion.footer
      className="bg-black text-white py-12 px-6 lg:px-16 border-t border-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and Description */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <motion.div
                className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold text-xl mr-5"
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                S
              </motion.div>
              <span className="text-sm text-gray-400">
                GET FIT, LIVE BETTER
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming lives through fitness since 2025. Join our community
              and start your journey today.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-lime-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-lime-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-lime-400 text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">NEWSLETTER</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers and fitness tips
            </p>
            <motion.div className="flex" whileHover={{ scale: 1.02 }}>
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-lime-400 w-full"
              />
              <motion.button
                className="bg-lime-400 text-black px-4 py-2 rounded-r-lg text-sm font-medium"
                whileHover={{ backgroundColor: "#a3e635" }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} FitNation. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
             Developed by suraj savle
          </p>

          <div className="flex space-x-4">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-lime-400 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
