import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Merchandise", href: "#merchandise" },
    { name: "About", href: "#about" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.3
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm text-white border-b border-gray-800 px-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-2 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold text-xl"
              whileHover={{ rotate: 12 }}
              transition={{ duration: 0.3 }}
            >
              S
            </motion.div>
            <div>
              <motion.h1 
                className="text-lg font-bold tracking-tight"
                whileHover={{ x: 2 }}
              >
                FITNATION
              </motion.h1>
              <motion.p 
                className="text-xs text-gray-400 -mt-1 tracking-wider"
                whileHover={{ x: 2 }}
              >
                GET FIT, LIVE BETTER
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                className="relative"
                onHoverStart={() => setHoveredLink(link.name)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <a
                  href={link.href}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    activeLink === link.name ? "text-lime-400" : "text-gray-300"
                  }`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeLink === link.name || hoveredLink === link.name ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </a>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-5 py-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-opacity-50"
              aria-label="Join Now"
            >
              JOIN NOW
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="container mx-auto px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    activeLink === link.name
                      ? "bg-gray-800 text-lime-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                  variants={itemVariants}
                >
                  <div className="flex items-center">
                    {link.name}
                    <FiArrowRight className="ml-2 text-lime-400" />
                  </div>
                </motion.a>
              ))}
              <motion.button 
                className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold px-5 py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-opacity-50"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="https://github.com/suraj-savle">JOIN NOW</a>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;