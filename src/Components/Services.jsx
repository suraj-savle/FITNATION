import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "GYM",
    desc: "We offer a wide range of state-of-the-art equipment and facilities to help you get in the best shape of your life.",
    image: "/gym.jpg",
    icon: "🏋️",
  },
  {
    title: "ZUMBA",
    desc: "High-energy dance workouts that combine Latin rhythms with cardiovascular exercise.",
    image: "/zumba.jpg",
    icon: "💃",
  },
  {
    title: "YOGA",
    desc: "Mind-body practice that combines physical poses, controlled breathing, and meditation.",
    image: "/yoga.jpg",
    icon: "🧘",
  },
  {
    title: "MARTIAL ART",
    desc: "Combat training that improves physical fitness, mental discipline, and self-defense skills.",
    image: "/martialart.jpg",
    icon: "🥋",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="bg-black text-white py-20 px-6 lg:px-16 overflow-hidden">
      {/* Headings */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col lg:flex-row justify-between gap-8"
      >
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent">
            Transform Your Fitness Journey
          </h2>
          <div className="w-20 h-1 bg-lime-400 mb-6"></div>
        </div>
        <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
          Offers customized workout programs designed to help clients achieve their fitness goals, such as weight loss, strength and conditioning, and body shaping.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative overflow-hidden rounded-2xl bg-gray-900 group ${
              index === 0 ? "lg:col-span-2 lg:row-span-2" : "h-[400px]"
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredIndex === index ? "auto" : 0,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    className="text-gray-300 text-sm overflow-hidden"
                  >
                    {service.desc}
                  </motion.p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ x: 4 }}
                className="mt-4 flex items-center gap-2 text-lime-400 font-medium"
              >
                Learn more <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;