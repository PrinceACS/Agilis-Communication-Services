"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyChooseAgilis = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Slightly faster stagger
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const svgHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 15, // Slight rotation on hover for engagement
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-100 py-12 px-6 sm:px-8 lg:px-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Heading Section */}
      <motion.div className="text-center mb-10" variants={itemVariants}>
        <h1 className="text-4xl font-bold text-amber-300 mb-2">
          Why Choose Agilis
        </h1>
        <div className="flex justify-center mb-12">
          <div className="w-[17rem] h-2 bg-yellow-300"></div>
        </div>
      </motion.div>

      {/* Introduction Paragraph */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        variants={itemVariants}
      >
        <p className="text-xl text-gray-700">
          At Agilis, we empower businesses with innovative solutions designed to
          drive efficiency, reduce costs, and streamline operations. Here&apos;s
          why businesses choose Agilis as their trusted partner:
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Cloud Telephony Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          variants={itemVariants}
        >
          <div className="h-40 bg-yellow-400 flex items-center justify-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 text-white"
              whileHover="hover"
              variants={svgHoverVariants}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </motion.svg>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold text-[#e6c81e] mb-4">
              Cloud Telephony Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Flexible, scalable, and reliable telephony services that grow with
              your business needs.
            </p>
          </div>
        </motion.div>

        {/* Tax Solutions Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          variants={itemVariants}
        >
          <div className="h-40 bg-black flex items-center justify-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 text-white"
              whileHover="hover"
              variants={svgHoverVariants}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </motion.svg>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold text-[#e6c81e] mb-4">
              Expert Tax Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Expert tax solutions that help businesses like yours reduce risk,
              improve compliance, and optimize tax strategies.
            </p>
          </div>
        </motion.div>

        {/* IT Solutions Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          variants={itemVariants}
        >
          <div className="h-40 bg-yellow-400 flex items-center justify-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 text-white"
              whileHover="hover"
              variants={svgHoverVariants}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </motion.svg>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-bold text-[#e6c81e] mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Modernize infrastructure, improve cybersecurity, and support
              innovation.
            </p>
          </div>
        </motion.div>

        {/* Client-Centric Approach Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          variants={itemVariants}
        >
          <div className="h-40 bg-black flex items-center justify-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 text-white"
              whileHover="hover"
              variants={svgHoverVariants}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.64M17 20H7m10 0a3 3 0 00-3-3H7m10 0V4a3 3 0 00-3-3H7a3 3 0 00-3 3v16"
              />
            </motion.svg>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold text-[#e6c81e] mb-4">
              Client-Centric Approach
            </h2>
            <p className="text-lg text-gray-600">
              We focus on your business goals, offering tailored solutions to
              exceed your expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseAgilis;
