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

import FNQ from "@/components/company/fnq"; // Assuming FNQ is the FAQ component
import { motion, useInView } from "framer-motion";
import Demo from "@/components/company/demo"; // Assuming this is your demo request component
import bulk_voice_call_hero from "@/public/images/bulk_voice.png";
import Image from "next/image";
import Link from "next/link";

const BulkVoiceCallPage: React.FC = () => {
  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Check if sections are in view
  // const isHeroInView = useInView(heroRef);
  // const isAutoManualInView = useInView(autoManualRef);
  const isFeaturesInView = useInView(featuresRef);
  const isBenefitsInView = useInView(benefitsRef);
  const isFaqInView = useInView(faqRef);

  // Features specific to Bulk Voice Call Marketing
  const features = [
    {
      icon: <FaPhoneAlt />,
      title: "Automated Voice Broadcasting",
      description:
        "Send pre-recorded voice messages to thousands of customers in one go with a single click.",
    },
    {
      icon: <FaRobot />,
      title: "IVR Integration",
      description:
        "Engage users with Interactive Voice Response (IVR) systems to gather inputs or redirect calls.",
    },
    {
      icon: <FaMicrophone />,
      title: "Custom Voice Recordings",
      description:
        "Create personalized messages with professional voice-over recordings for a branded experience.",
    },
    {
      icon: <FaSignal />,
      title: "Real-Time Call Tracking",
      description:
        "Monitor call delivery, answer rates, and customer engagement with real-time tracking and reporting.",
    },
    {
      icon: <FaChartLine />,
      title: "Campaign Analytics",
      description:
        "Analyze performance metrics such as call completion rates and responses to optimize future campaigns.",
    },
    {
      icon: <FaCogs />,
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
    <div className="min-h-screen bg-gray-100 text-gray-600">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-yellow-400 text-white font-bold py-20 flex items-center justify-center overflow-hidden"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Bulk Voice Call Marketing by Agilis
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Reach Thousands of Customers with a Single Call
            </p>
            <p className="text-lg mb-8 font-semibold">
              Deliver impactful voice messages to your audience at scale with
              our automated bulk voice call solution. Engage your customers
              through personalized and interactive voice campaigns.
            </p>
            <button className="text-yellow-400 bg-black hover:text-white border-amber-500 hover:border-black border-2 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
              <Link href="#demo">Request a Demo</Link>
            </button>
          </div>

          {/* Right Side - Illustration */}
          <div className="mt-8 md:mt-0">
            <Image
              src={bulk_voice_call_hero}
              alt="Bulk Voice Call Illustration"
              className="max-w-xs md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>

        {/* Background Decoration (Optional) */}
        <div className="absolute inset-0 z-[-1] opacity-30">
          {/* Optional decorative elements like gradients or abstract shapes */}
          <svg className="w-full h-full" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="400" fill="rgba(255,255,255,0.1)" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="bg-gray-200 py-16"
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
                className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-t hover:from-yellow-500 hover:to-orange-300 transition-all duration-500"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={isFeaturesInView ? { scale: 1, opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.01,
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
        <div className="container mx-auto p-10 bg-gray-900 text-white ">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Benefits of Bulk Voice Call Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-gray-900 hover:bg-gradient-to-t hover:from-yellow-500 hover:to-orange-300 transition-all duration-500"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={isBenefitsInView ? { scale: 1, opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section and Blog Section */}
      <motion.section
        ref={faqRef}
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div
          id="demo"
          className="bg-gray-800 grid grid-cols-1 lg:grid-cols-2 mx-20"
        >
          <div className=" p-6 rounded-lg ">
            <Demo
              title="Request A Demo"
              description="Contact us today to schedule a demonstration and know how our solution can benefit your organization."
            />
          </div>
          <FNQ faqItems={faqItems} />
        </div>
      </motion.section>

      {/* Blog Section */}
      {/* <section className="py-16 bg-white">
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
      {/* <section className="bg-gray-800 text-white py-16">
        <Contact />
        <Demo />
      </section> */}
    </div>
  );
};

export default BulkVoiceCallPage;
