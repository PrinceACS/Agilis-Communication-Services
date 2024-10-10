"use client";
import React, { useState, useRef } from "react";
import {
  FaSms,
  FaEnvelopeOpenText,
  FaRobot,
  FaUserAlt,
  FaChartLine,
  FaCogs,
  FaListAlt,
  FaHeadset,
} from "react-icons/fa";
import FNQ from "@/components/company/fnq";
import { motion, useInView } from "framer-motion";
import Contact from "@/components/company/contact";
import Demo from "@/components/company/demo";
import Image from "next/image";
import bulk_sms_hero from "@/public/images/bulk-sms-hero.jpg";
import Link from "next/link";

const BulkSMSPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"auto" | "manual">("auto");

  // Create refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Check if the sections are in view
  const isHeroInView = useInView(heroRef);
  const isFeaturesInView = useInView(featuresRef);
  const isBenefitsInView = useInView(benefitsRef);
  const isFaqInView = useInView(faqRef);

  const features = [
    {
      icon: <FaEnvelopeOpenText />,
      title: "Personalized SMS Campaigns",
      description:
        "Easily send personalized messages to customers using their name or other details from your CRM.",
    },
    {
      icon: <FaCogs />,
      title: "Automated SMS Scheduling",
      description:
        "Set up automated campaigns to send messages at optimal times based on customer engagement data.",
    },
    {
      icon: <FaRobot />,
      title: "Smart Segmentation",
      description:
        "Segment your audience based on preferences, demographics, or behaviors to send targeted SMS campaigns.",
    },
    {
      icon: <FaChartLine />,
      title: "Real-Time Analytics",
      description:
        "Track SMS delivery rates, open rates, and customer responses in real-time to optimize campaign performance.",
    },
    {
      icon: <FaListAlt />,
      title: "Compliance Management",
      description:
        "Easily manage opt-out requests and ensure compliance with regulations like GDPR and TCPA.",
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support Integration",
      description:
        "Automatically route SMS replies to your support team for immediate follow-up and personalized customer service.",
    },
  ];

  const benefits = [
    {
      title: "Instant Communication",
      description:
        "Reach your customers instantly through SMS, with messages typically opened within minutes of receipt.",
    },
    {
      title: "High Open Rates",
      description:
        "SMS boasts one of the highest open rates of any marketing channel, ensuring your message is seen by most recipients.",
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "Bulk SMS campaigns allow you to reach a large audience with minimal investment, offering a high return on marketing spend.",
    },
    {
      title: "Personalized Engagement",
      description:
        "Easily personalize each message to create a more tailored experience for your audience.",
    },
    {
      title: "Two-Way Communication",
      description:
        "Enable customers to reply to SMS campaigns for enhanced interaction, customer support, or feedback.",
    },
    {
      title: "Real-Time Results",
      description:
        "Monitor the effectiveness of your campaigns in real-time, allowing for quick adjustments to improve performance.",
    },
  ];

  const faqItems = [
    {
      question: "How does Bulk SMS Marketing work?",
      answer:
        "Bulk SMS Marketing allows you to send large volumes of SMS messages to a group of customers or prospects simultaneously, promoting products, services, or events in a fast and cost-effective way.",
    },
    {
      question: "Can I personalize SMS messages?",
      answer:
        "Yes, you can easily personalize each SMS by including variables like the recipient's name, location, or other details pulled from your CRM.",
    },
    {
      question: "Is SMS marketing compliant with regulations?",
      answer:
        "Yes, our platform ensures that all messages comply with regulations such as GDPR and TCPA, and we provide tools to manage opt-outs and maintain a clean subscriber list.",
    },
    {
      question: "What is the benefit of using SMS over email?",
      answer:
        "SMS offers higher open rates compared to email, making it a great tool for time-sensitive promotions or updates. It's also more direct and personal.",
    },
  ];

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
            <button className="bg-black text-white border-2 border-amber-400 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
              <Link href="demp">Request a Demo</Link>
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
                <div className="text-3xl mb-4 text-center">{feature.icon}</div>
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
                className="bg-white p-6 rounded-lg shadow-md"
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

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        className="bg-gray-900 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="container items-center md:flex md:flex-row lg:justify-center  mx-auto px-4">
          <div className="max-w-4xl mx-auto lg:w-1/2 lg:pr-14">
            <FNQ faqItems={faqItems} />
          </div>
          <div className="max-w-4xl mx-auto lg:w-1/2 lg:pl-16">
            <Demo />
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

      {/* Contact Section */}
      <motion.section
        className="bg-gray-800 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container justify-center mx-auto">
          {/* <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2> */}
          <Contact />
        </div>
      </motion.section>
    </div>
  );
};

export default BulkSMSPage;
