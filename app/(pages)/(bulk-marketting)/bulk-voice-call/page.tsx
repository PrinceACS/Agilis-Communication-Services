"use client";
import React, { useRef } from "react";
import {
  FaPhoneAlt,
  FaRobot,
  FaSignal,
  FaMicrophone,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import FNQ from "@/components/company/fnq";
import Demo from "@/components/company/demo";
import bulkVoiceCallHero from "@/public/svg/marketing.svg";
import Image from "next/image";
import Link from "next/link";

const BulkVoiceCallPage: React.FC = () => {
  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Check if sections are in view
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });

  // Features specific to Bulk Voice Call Marketing
  const features = [
    {
      icon: <FaPhoneAlt className="w-8 h-8 text-[#FFD700]" />,
      title: "Automated Voice Broadcasting",
      description:
        "Send pre-recorded voice messages to thousands of customers in one go with a single click.",
    },
    {
      icon: <FaRobot className="w-8 h-8 text-[#FFD700]" />,
      title: "IVR Integration",
      description:
        "Engage users with Interactive Voice Response (IVR) systems to gather inputs or redirect calls.",
    },
    {
      icon: <FaMicrophone className="w-8 h-8 text-[#FFD700]" />,
      title: "Custom Voice Recordings",
      description:
        "Create personalized messages with professional voice-over recordings for a branded experience.",
    },
    {
      icon: <FaSignal className="w-8 h-8 text-[#FFD700]" />,
      title: "Real-Time Call Tracking",
      description:
        "Monitor call delivery, answer rates, and customer engagement with real-time tracking and reporting.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#FFD700]" />,
      title: "Campaign Analytics",
      description:
        "Analyze performance metrics such as call completion rates and responses to optimize future campaigns.",
    },
    {
      icon: <FaCogs className="w-8 h-8 text-[#FFD700]" />,
      title: "API & CRM Integration",
      description:
        "Seamlessly integrate bulk voice call campaigns with your CRM or other marketing tools via API.",
    },
  ];

  // Benefits of Bulk Voice Call Marketing
  const benefits = [
    {
      title: "High Engagement Rates",
      description:
        "Voice calls create a personal touch, leading to higher engagement compared to text messages or emails.",
    },
    {
      title: "Instant Communication",
      description:
        "Deliver urgent messages in real-time, ensuring critical information is conveyed immediately.",
    },
    {
      title: "Wide Audience Reach",
      description:
        "Voice calls can be received by anyone with a phone, making it a great solution for reaching mass audiences.",
    },
    {
      title: "Cost-Effective Solution",
      description:
        "Lower your marketing costs while maintaining high impact, with affordable voice broadcasting services.",
    },
    {
      title: "Perfect for Multi-Language Campaigns",
      description:
        "Send voice messages in multiple languages to engage your audience in their native language.",
    },
    {
      title: "Personalized Customer Experience",
      description:
        "Make each customer feel valued with customized voice messages and IVR options tailored to their needs.",
    },
  ];

  // FAQs for Bulk Voice Call Marketing
  const faqItems = [
    {
      question: "What is bulk voice call marketing?",
      answer:
        "Bulk voice call marketing involves sending pre-recorded voice messages to a large group of recipients, making it a powerful tool for promotions, notifications, and customer engagement.",
    },
    {
      question: "Can I track the performance of my voice campaigns?",
      answer:
        "Yes, our platform provides real-time analytics that let you track call success rates, responses, and overall campaign performance.",
    },
    {
      question: "How do I ensure compliance with call regulations?",
      answer:
        "Our platform follows industry best practices, including DND checks and opt-out features, to ensure compliance with legal requirements.",
    },
    {
      question: "Can I schedule voice calls?",
      answer:
        "Yes, you can schedule your campaigns in advance to reach your audience at the most effective times.",
    },
    {
      question: "Is there a limit on the number of recipients?",
      answer:
        "No, our platform allows you to send voice calls to an unlimited number of recipients, ensuring wide reach for your campaigns.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-gray-900 my-10">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-r from-[#FFD700] to-[#F8E67E] py-20 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container flex-col-reverse mx-auto px-4 flex md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-1 leading-tight text-black">
              Bulk Voice Call Marketing by Agilis
            </h1>
            <p className="text-lg font-semibold md:text-2xl mb-1 text-gray-800 leading-tight">
              Reach Thousands of Customers with a Single Call
            </p>
            <p className="text-md mb-8 font-semibold text-gray-700">
              Deliver impactful voice messages to your audience at scale with
              our automated bulk voice call solution. Engage your customers
              through personalized and interactive voice campaigns.
            </p>
            <motion.button
              className="bg-black text-[#FFD700] border-2 border-[#FFD700] font-bold py-3 px-6 rounded-lg hover:bg-[#FFD700] hover:text-black transition duration-300"
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
              src={bulkVoiceCallHero}
              alt="Bulk Voice Call Illustration"
              className="max-w-xs md:max-w-md lg:max-w-lg object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="bg-white py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#F3F4F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
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
        initial={{ opacity: 0, y: 50 }}
        animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeInOut" }}
      >
        <div className="container mx-auto p-10 bg-[#FFD700] text-black rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Benefits of Bulk Voice Call Marketing
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
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div
          id="demo"
          className="bg-gray-900 grid grid-cols-1 lg:grid-cols-2 p-10 rounded-lg"
        >
          <div className="p-5 rounded-lg">
            <Demo
              title="Request A Demo"
              description="Contact us today to schedule a demonstration and know how our solution can benefit your organization."
            />
          </div>
          <FNQ faqItems={faqItems} />
        </div>
      </motion.section>
    </div>
  );
};

export default BulkVoiceCallPage;
