import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const avatarVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden md:px-10">
      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/hero.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Content container */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 mt-50 h-full flex flex-col lg:flex-row items-center justify-between"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Text */}
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Unleash Your <span className="text-lime-400 bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">Inner</span> Athlete
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 mb-8 text-lg lg:text-xl"
            variants={itemVariants}
          >
            We are dedicated to helping you transform your body and mind through the power of fitness
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
            variants={itemVariants}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-opacity-50"
              aria-label="Join now for $49 per month"
            >
              JOIN NOW
            </motion.button>
            <motion.span 
              className="text-gray-300 text-lg"
              variants={itemVariants}
            >
              $49/month
            </motion.span>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 hover:bg-gray-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Try our free trial"
            >
              JOIN FREE TRIAL
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.img
                  key={i}
                  src={`/avatar-${i + 1}.jpg`}
                  alt="Happy member"
                  className="w-8 h-8 rounded-full border-2 border-black"
                  loading="lazy"
                  variants={avatarVariants}
                />
              ))}
            </div>
            <p className="text-gray-400 text-sm">Rated 4.9/5 by 500+ members</p>
          </motion.div>
        </div>

        {/* Right side member count */}
        <motion.div 
          className="hidden lg:block text-center lg:text-right bg-gray-900 bg-opacity-60 p-6 rounded-xl backdrop-blur-sm"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex justify-center lg:justify-end -space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.img
                key={i}
                src={`/avatar-${i + 1}.jpg`}
                alt="Active member"
                className="w-12 h-12 rounded-full border-2 border-lime-400"
                loading="lazy"
                whileHover={{ y: -5 }}
                transition={{ type: "spring" }}
              />
            ))}
          </div>
          <motion.p 
            className="text-3xl font-bold text-lime-400"
            whileHover={{ scale: 1.05 }}
          >
            500+
          </motion.p>
          <p className="text-gray-300 uppercase tracking-wider text-sm mt-1">Members Active</p>
          <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-1 bg-lime-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <p className="text-gray-400 text-xs mt-2">75% achieved their goals</p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <FiArrowDown className="text-lime-400 text-2xl mb-1" />
          <span className="text-xs text-gray-400">Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;