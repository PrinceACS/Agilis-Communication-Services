"use client";
import React, { useRef } from "react";
import {
  FaRobot,
  FaUserAlt,
  FaChartLine,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { CTA1 } from "@/components/cta";
import Demo from "@/components/company/demo";
import FNQ from "@/components/company/fnq";
import Image from "next/image";

import outbound from "@/public/images/outbound.png";
import Link from "next/link";

const OutboundCallingPage: React.FC = () => {
  // Create refs for sections
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Check if the sections are in view

  const isFeaturesInView = useInView(featuresRef);
  const isBenefitsInView = useInView(benefitsRef);
  const isFaqInView = useInView(faqRef);

  const features = [
    {
      icon: <FaHeadset />,
      title: "Predictive Dialing",
      description:
        "Automatically dial multiple numbers at once and connect answered calls to available agents, maximizing efficiency and reducing idle time.",
    },
    {
      icon: <FaRobot />,
      title: "Call Scripting",
      description:
        "Provide agents with guided scripts to ensure consistent messaging and effective communication with customers.",
    },
    {
      icon: <FaUserAlt />,
      title: "Lead Management",
      description:
        "Manage and prioritize leads effectively, enabling agents to focus on high-potential customers for better conversion rates.",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Analytics",
      description:
        "Track and analyze call performance metrics, allowing teams to identify trends and optimize outbound strategies.",
    },
    {
      icon: <FaCogs />,
      title: "CRM Integration",
      description:
        "Seamlessly integrate with popular CRM systems to provide agents with real-time customer data and insights during calls.",
    },
  ];

  const benefits = [
    {
      title: "Improved Conversion Rates",
      description:
        "Leverage predictive dialing and lead management to enhance your team's ability to convert leads into customers.",
    },
    {
      title: "Efficient Resource Utilization",
      description:
        "Automated dialing and scripting streamline agent workflows, allowing them to spend more time on high-value interactions.",
    },
    {
      title: "Real-Time Insights",
      description:
        "Gain valuable insights into call performance and agent productivity, enabling data-driven decision-making.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Easily scale your outbound calling operations to meet changing demands and reach more customers effectively.",
    },
  ];

  const faqItems = [
    {
      question: "What is an outbound calling system?",
      answer:
        "An outbound calling system is designed to handle outgoing calls made by agents to customers for sales, follow-ups, or surveys.",
    },
    {
      question: "How does predictive dialing work?",
      answer:
        "Predictive dialing uses algorithms to predict when an agent will be available and dials multiple numbers, connecting answered calls to agents instantly.",
    },
    {
      question: "Can I integrate this system with my existing CRM?",
      answer:
        "Yes, our outbound calling system easily integrates with popular CRM systems to enhance your team's effectiveness.",
    },
    {
      question: "Is training required for agents using this system?",
      answer:
        "While the system is user-friendly, some training may be beneficial to help agents utilize all features effectively.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600">
      {/* Outbound Calling Solutions Hero Section */}
      <section className="relative bg-yellow-400 text-white font-bold py-20 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Outbound Calling Solutions by Agilis
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Optimize Your Sales and Outreach Efforts
            </p>
            <p className="text-lg mb-8 font-semibold">
              Our outbound calling solutions empower businesses to enhance their
              sales and marketing efforts through efficient call management and
              data-driven insights.
            </p>
            <Link href="#demo">
              <button className="text-white hover:text-black bg-black border-2 hover:border-black border-amber-400 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
                Request a Demo
              </button>
            </Link>
          </div>

          {/* Right Side - Illustration */}
          <div className="mt-8 md:mt-0">
            <Image
              src={outbound}
              alt="Outbound Calling Illustration"
              className="max-w-xs md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>

        {/* Optional Background Decoration */}
        <div className="absolute inset-0 z-[-1] opacity-30">
          <svg className="w-full h-full" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="400" fill="rgba(255,255,255,0.1)" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-16"
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
                className="bg-white justify-center p-6 rounded-lg shadow-md hover:bg-gradient-to-t hover:from-yellow-500 hover:to-orange-300 transition-all duration-500"
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

      <CTA1 />

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        className="bg-gray-200 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white justify-center p-6 rounded-lg shadow-md hover:bg-gradient-to-t hover:from-yellow-500 hover:to-orange-300 transition-all duration-500"
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
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div
          id="demo"
          className="bg-gray-800 grid grid-cols-1 lg:grid-cols-2 mx-20"
        >
          <div className="p-6 rounded-lg ">
            <Demo
              title="Request A Demo"
              description="Contact us today to schedule a demonstration and see how our outbound calling solutions can elevate your business."
            />
          </div>
          <FNQ faqItems={faqItems} />
        </div>
      </motion.section>

      {/* CTA Section */}
      {/* Uncomment the following section if you want to include a closing CTA */}
      {/* <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">Take your outbound calling to the next level with Agilis.</p>
          <CTAButton text="Get Started" />
        </div>
      </section> */}
    </div>
  );
};

export default OutboundCallingPage;
