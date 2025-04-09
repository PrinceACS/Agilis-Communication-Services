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
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });

  return (
    <div className="min-h-screen mt-14 bg-gray-100 text-gray-600">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-r from-[#FFD700] to-[#F8E67E] text-black py-20 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text */}
          <motion.div
            className="text-center lg:max-w-3xl md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Bulk SMS Marketing <span>by&nbsp;Agilis</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Boost Engagement, Drive Sales, and Enhance Customer Relationships
            </p>
            <motion.button
              className="bg-black text-white border-2 border-[#FFD700] font-bold py-3 px-6 rounded-lg hover:bg-[#FFD700] hover:border-black hover:text-black transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#demo">Request a Demo</Link>
            </motion.button>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src={bulk_sms_hero}
              alt="Bulk SMS Illustration"
              className="max-w-xs md:max-w-md lg:max-w-lg object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="bg-[#F3F4F6] py-16"
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl mb-4 text-center text-[#FFD700]">
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
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
        className="bg-[#FFD700] text-black py-16"
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
        className="bg-gray-900 py-16 mx-auto justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="container items-center mx-auto md:flex md:flex-row justify-between px-4">
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
