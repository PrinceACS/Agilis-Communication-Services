"use client";
import React, { useRef } from "react";
import { faqItems, benefits, features } from "@/constants/data";
import FNQ from "@/components/company/fnq";
import { motion, useInView } from "framer-motion";
import Demo from "@/components/company/demo";
import Image from "next/image";
import bulk_sms_hero from "@/public/images/bulk-sms-hero.png";
import Link from "next/link";

const BulkSMSPage: React.FC = () => {
  // Create refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Check if the sections are in view
  const isFeaturesInView = useInView(featuresRef);
  const isBenefitsInView = useInView(benefitsRef);
  const isFaqInView = useInView(faqRef);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-r from-yellow-300 to-yellow-300 text-white font-bold py-20 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text */}
          <div className="text-center lg:max-w-3xl md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Bulk SMS Marketing <span>by&nbsp;Agilis</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Boost Engagement, Drive Sales, and Enhance Customer Relationships
            </p>
            <button className="bg-black text-white border-2 hover:text-black  hover:border-black border-amber-400 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
              <Link href="#demo">Request a Demo</Link>
            </button>
          </div>

          {/* Right Side - Illustration */}
          <div className="mt-8 md:mt-0">
            <Image
              src={bulk_sms_hero}
              alt="Bulk SMS Illustration"
              className="max-w-xs md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>

        {/* Background Decoration (Optional) */}
        <div className="absolute inset-0 z-[-1] opacity-30">
          {/* Add a decorative element like a soft radial gradient or abstract shapes */}
          <svg className="w-full h-full" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="400" fill="rgba(255,255,255,0.1)" />
          </svg>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="bg-gray-200 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white justify-center p-6 rounded-lg shadow-md hover:bg-gradient-to-t hover:from-yellow-500 hover:to-orange-300 transition-all duration-500"
                initial={{ scale: 0.9 }}
                animate={isFeaturesInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <div className="text-3xl mb-4 text-center">
                  {React.createElement(feature.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Benefits of Bulk SMS Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-t hover:from-yellow-500 hover:to-orange-300 transition-all duration-500"
                initial={{ scale: 0.9 }}
                animate={isBenefitsInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Demo Request Section */}
      <motion.section
        id="demo"
        className="bg-yellow-300 text-black py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Ready to Transform Your Business with SMS Marketing?
          </h2>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        className="bg-gray-900 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="container items-center md:flex md:flex-row lg:justify-center px-4">
          <div className="max-w-5xl mx-auto lg:w-1/2 lg:pr-14">
            <FNQ faqItems={faqItems} />
          </div>
          <div className="max-w-4xl mx-auto lg:w-1/2 lg:pl-16">
            <Demo />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BulkSMSPage;
