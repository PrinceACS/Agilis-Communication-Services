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
import FNQ from "@/components/company/fnq";
import { motion, useInView } from "framer-motion";

import Contact from "@/components/company/contact";
import Demo from "@/components/company/demo";
import bulk_whatsapp_hero from "@/public/images/bulk-whatsapp.jpg";

import Image from "next/image";
import Link from "next/link";

// Bulk WhatsApp Page
const BulkWhatsappPage: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const isFeaturesInView = useInView(featuresRef);
  const isBenefitsInView = useInView(benefitsRef);
  const isFaqInView = useInView(faqRef);

  // Features specific to Bulk WhatsApp Marketing
  const features = [
    {
      icon: <FaWhatsapp />,
      title: "Automated WhatsApp Campaigns",
      description:
        "Send personalized WhatsApp messages with automation, including text, images, and documents.",
    },
    {
      icon: <FaRobot />,
      title: "Smart Audience Segmentation",
      description:
        "Segment your contacts based on behavior, demographics, or interests for tailored messages.",
    },
    {
      icon: <FaUserAlt />,
      title: "Two-Way Communication",
      description:
        "Engage in real-time conversations with your customers through WhatsApp for instant feedback.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics and Tracking",
      description:
        "Monitor delivery rates, read receipts, and customer replies in real time to optimize campaigns.",
    },
    {
      icon: <FaCogs />,
      title: "API Integration",
      description:
        "Integrate WhatsApp campaigns with your existing CRM or marketing tools for seamless automation.",
    },
    {
      icon: <FaListAlt />,
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
    <div className="min-h-screen bg-gray-100 text-gray-600">
      {/* Hero Section */}
      <section className="relative bg-yellow-400 text-white font-bold py-20 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Bulk WhatsApp Marketing by Agilis
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Instantly Reach Customers and Drive Engagement with WhatsApp
            </p>
            <p className="text-lg mb-8 font-semibold">
              Leverage the power of WhatsApp for your marketing campaigns. With
              Agilis, you can automate messages, track responses, and engage
              customers in real-time through one of the world's most popular
              messaging platforms.
            </p>
            <button className="bg-black hover:text-black hover:border-black text-white border-2 border-amber-400 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
              <Link href="#demo">Request a Demo</Link>
            </button>
          </div>

          {/* Right Side - Illustration */}
          <div className="mt-8 md:mt-0">
            <Image
              src={bulk_whatsapp_hero}
              alt="Bulk WhatsApp Marketing Illustration"
              className="max-w-xs md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>

        {/* Background Decoration (Optional) */}
        <div className="absolute inset-0 z-[-1] opacity-30">
          {/* Optional background decoration, like abstract shapes */}
          <svg className="w-full h-full" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="400" fill="rgba(255,255,255,0.1)" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="bg-gray-200 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={isFeaturesInView ? { scale: 1, opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
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
        initial={{ opacity: 0, y: 50 }}
        animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeInOut" }}
      >
        <div className="container mx-auto p-10 bg-gray-900">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Benefits of Bulk WhatsApp Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={isBenefitsInView ? { scale: 1, opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
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
        <div className="container lg:flex-row items-center  mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FNQ faqItems={faqItems} />
          </div>
          <div className="max-w-4xl mx-auto">
            <Demo />
          </div>
        </div>
      </motion.section>

      {/* Blog Section
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <a href={blog.link} className="text-primary hover:underline">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="bg-gray-800 text-white py-16">
        <Contact />
        <Demo />
      </section>
    </div>
  );
};

export default BulkWhatsappPage;
