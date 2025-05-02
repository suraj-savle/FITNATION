import React from "react";
import { motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";

const merchandiseItems = [
  {
    name: "Water Bottle",
    image: "/water-bottles.jpg",
    price: "$24.99",
    description: "Premium insulated bottle with FitNation branding"
  },
  {
    name: "Gym Bag",
    image: "/gym-bag.jpg",
    price: "$49.99",
    description: "Spacious duffle with separate shoe compartment"
  },
  {
    name: "Training Jacket",
    image: "/gym-jacket.jpg",
    price: "$79.99",
    description: "Lightweight performance jacket with moisture-wicking fabric"
  },
];

const Merchandise = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(154, 230, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <section id="merchandise" className="bg-black text-white py-20 px-6 lg:px-16 overflow-hidden">
      <motion.div 
        className="grid lg:grid-cols-2 gap-10 items-start mb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Get Fit in Style with <br /> FitNation Merchandise
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-lg leading-relaxed"
          variants={itemVariants}
        >
          We believe that looking good and feeling good go hand in hand. Our merchandise is available for purchase exclusively to our gym members, so you can represent FitNation while you get fit.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {merchandiseItems.map((item, index) => (
          <motion.div 
            key={index}
            className="group relative bg-gray-900 rounded-xl p-6 overflow-hidden"
            variants={itemVariants}
            whileHover={cardHover}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-lime-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="h-64 mb-6 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
              
              <div className="border-t border-gray-800 pt-4">
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lime-400 font-medium">{item.price}</span>
                  <motion.button
                    className="flex items-center gap-2 bg-lime-400 text-black px-4 py-2 rounded-lg text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiShoppingBag size={16} />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
          View All Merchandise
        </button>
      </motion.div>
    </section>
  );
};

export default Merchandise;