"use client";
import React, { useRef } from "react";
import {
  FaWhatsapp,
  FaRobot,
  FaUserAlt,
  FaChartLine,
  FaCogs,
  FaListAlt,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import FNQ from "@/components/company/fnq";
import Demo from "@/components/company/demo";
import bulk_whatsapp_hero from "@/public/images/bulk-whatsapp.png";
import Image from "next/image";
import Link from "next/link";

const BulkWhatsappPage: React.FC = () => {
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

  // Features specific to Bulk WhatsApp Marketing
  const features = [
    {
      icon: <FaWhatsapp className="w-8 h-8 text-[#FFD700]" />,
      title: "Automated WhatsApp Campaigns",
      description:
        "Send personalized WhatsApp messages with automation, including text, images, and documents.",
    },
    {
      icon: <FaRobot className="w-8 h-8 text-[#FFD700]" />,
      title: "Smart Audience Segmentation",
      description:
        "Segment your contacts based on behavior, demographics, or interests for tailored messages.",
    },
    {
      icon: <FaUserAlt className="w-8 h-8 text-[#FFD700]" />,
      title: "Two-Way Communication",
      description:
        "Engage in real-time conversations with your customers through WhatsApp for instant feedback.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#FFD700]" />,
      title: "Analytics and Tracking",
      description:
        "Monitor delivery rates, read receipts, and customer replies in real time to optimize campaigns.",
    },
    {
      icon: <FaCogs className="w-8 h-8 text-[#FFD700]" />,
      title: "API Integration",
      description:
        "Integrate WhatsApp campaigns with your existing CRM or marketing tools for seamless automation.",
    },
    {
      icon: <FaListAlt className="w-8 h-8 text-[#FFD700]" />,
      title: "Compliance Management",
      description:
        "Ensure all your campaigns comply with WhatsApp's policies, including opt-in and opt-out features.",
    },
  ];

  // Benefits of Bulk WhatsApp Marketing
  const benefits = [
    {
      title: "Instant Customer Reach",
      description:
        "With WhatsApp, messages are delivered and read quickly, making it perfect for time-sensitive campaigns.",
    },
    {
      title: "Rich Media Support",
      description:
        "Send multimedia messages including images, videos, voice notes, or documents to engage customers effectively.",
    },
    {
      title: "Higher Engagement Rates",
      description:
        "WhatsApp's informal and direct nature drives higher engagement, with a large majority of messages being read within minutes.",
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "Reach a wide audience at a lower cost, and enjoy higher conversion rates compared to traditional marketing channels.",
    },
    {
      title: "Global Audience Reach",
      description:
        "WhatsApp is widely used globally, allowing you to engage international customers effortlessly.",
    },
    {
      title: "Real-Time Support",
      description:
        "Provide instant customer support through WhatsApp, with the ability to respond quickly to customer inquiries.",
    },
  ];

  // FAQs for WhatsApp Marketing
  const faqItems = [
    {
      question: "How does Bulk WhatsApp Marketing work?",
      answer:
        "Bulk WhatsApp Marketing allows you to send mass messages to a list of contacts via WhatsApp, making it a highly effective tool for promotions, updates, or customer engagement.",
    },
    {
      question: "Can I personalize WhatsApp messages?",
      answer:
        "Yes, WhatsApp messages can be personalized with dynamic fields such as customer name, order details, or custom information pulled from your CRM.",
    },
    {
      question: "Is WhatsApp marketing legal?",
      answer:
        "Yes, as long as you adhere to WhatsApp's policies, including obtaining customer consent and managing opt-out requests, your campaigns remain compliant.",
    },
    {
      question: "What kind of messages can I send via WhatsApp?",
      answer:
        "You can send text messages, images, videos, documents, and voice notes, allowing for a wide variety of engagement formats.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-gray-900">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-r from-[#FFD700] to-[#F8E67E] py-20 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-black">
              Bulk WhatsApp Marketing by Agilis
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-800">
              Instantly Reach Customers and Drive Engagement with WhatsApp
            </p>
            <p className="text-lg mb-8 font-semibold text-gray-700">
              Leverage the power of WhatsApp for your marketing campaigns. With
              Agilis, you can automate messages, track responses, and engage
              customers in real-time through one of the world&apos;s most
              popular messaging platforms.
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
              src={bulk_whatsapp_hero}
              alt="Bulk WhatsApp Marketing Illustration"
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
            Benefits of Bulk WhatsApp Marketing
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

export default BulkWhatsappPage;
