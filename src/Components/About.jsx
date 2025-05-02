import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

const About = () => {
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="bg-black text-white py-20 px-6 lg:px-16 overflow-hidden">
      <motion.div 
        className="grid lg:grid-cols-2 gap-10 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left side content */}
        <div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Comfortable Gym
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 mb-6 text-lg"
            variants={itemVariants}
          >
            Our facilities provide the perfect setting to help you reach your fitness goals.
          </motion.p>

          {/* Navigation Arrows */}
          <motion.div 
            className="flex gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-gray-800 p-3 rounded-full hover:bg-lime-500 hover:text-black transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} />
            </motion.button>
            <motion.button 
              className="bg-gray-800 p-3 rounded-full hover:bg-lime-500 hover:text-black transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Dumbbell image */}
          <motion.div 
            className="mt-8 rounded-xl overflow-hidden"
            variants={imageVariants}
          >
            <motion.img 
              src="/dumbbells.jpg" 
              alt="Gym Equipment" 
              className="w-full h-[300px] object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Right side image and location */}
        <motion.div 
          className="relative"
          variants={imageVariants}
        >
          <motion.div 
            className="rounded-tl-[100px] overflow-hidden"
            whileHover={{ borderRadius: "0px" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img 
              src="/building.jpg" 
              alt="Fitnation Building" 
              className="w-full h-[500px] object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div 
            className="mt-6 p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-lime-400" size={20} />
              <h3 className="text-xl font-semibold">LOCATION</h3>
            </div>
            <p className="text-gray-300">
              1234 FITNESS AVENUE<br />
              Navi Mumbai
            </p>
            <motion.button
              className="mt-4 flex items-center gap-2 text-lime-400 font-medium group"
              whileHover={{ x: 5 }}
            >
              Get Directions 
              <ArrowRight 
                size={16} 
                className="transition-transform group-hover:translate-x-1" 
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;