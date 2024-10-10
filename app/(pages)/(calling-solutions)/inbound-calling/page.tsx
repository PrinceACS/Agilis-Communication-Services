"use client";
import React, { useState, useRef } from "react";
import {
  FaRobot,
  FaUserAlt,
  FaChartLine,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

import Demo from "@/components/company/demo";
import FNQ from "@/components/company/fnq";
import { CTA1 } from "@/components/cta";
import inbound from "@/public/images/inbound.png";

import Image from "next/image";
import Link from "next/link";

const InboundCallingPage: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const isFeaturesInView = useInView(featuresRef);
  const isBenefitsInView = useInView(benefitsRef);
  const isFaqInView = useInView(faqRef);

  const features = [
    {
      icon: <FaHeadset />,
      title: "Automated Call Distribution (ACD)",
      description:
        "Distribute incoming calls automatically to the right agents based on predefined rules, ensuring customers reach the most appropriate representative.",
    },
    {
      icon: <FaRobot />,
      title: "Interactive Voice Response (IVR)",
      description:
        "Enable customers to interact with a computerized system to route calls effectively, gather information, or provide self-service options.",
    },
    {
      icon: <FaUserAlt />,
      title: "Caller ID & Call Logging",
      description:
        "Identify incoming calls with caller ID and maintain detailed logs of all calls for future reference and analytics.",
    },
    {
      icon: <FaChartLine />,
      title: "Real-Time Analytics",
      description:
        "Monitor call performance metrics in real time, allowing for data-driven decision-making and timely adjustments.",
    },
    {
      icon: <FaCogs />,
      title: "Integrations with CRM Systems",
      description:
        "Seamlessly integrate with popular CRM platforms to provide agents with real-time customer information during calls.",
    },
  ];

  const benefits = [
    {
      title: "Enhanced Customer Experience",
      description:
        "By ensuring that customers are connected to the right agents quickly, you can improve overall satisfaction and engagement.",
    },
    {
      title: "Increased Agent Efficiency",
      description:
        "Automated features allow agents to spend more time focusing on customer interactions rather than manual tasks.",
    },
    {
      title: "Scalability",
      description:
        "Easily scale your inbound calling system to handle increasing call volumes without sacrificing quality.",
    },
    {
      title: "Comprehensive Reporting",
      description:
        "Gain insights through detailed reports that help you analyze call patterns, agent performance, and customer interactions.",
    },
  ];

  const faqItems = [
    {
      question: "What is an inbound calling system?",
      answer:
        "An inbound calling system is designed to handle incoming calls from customers, routing them to the appropriate agents based on various criteria to ensure a seamless customer experience.",
    },
    {
      question: "How does automated call distribution work?",
      answer:
        "Automated call distribution uses predefined rules to route incoming calls to the right agents, based on factors like availability, skills, or customer needs.",
    },
    {
      question: "Can I integrate this system with my existing CRM?",
      answer:
        "Yes, our inbound calling system easily integrates with popular CRM systems to enhance customer interactions.",
    },
    {
      question: "Is training required for agents using this system?",
      answer:
        "While the system is user-friendly, some training may be beneficial to help agents utilize all features effectively.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600">
      {/* Inbound Calling Solutions Hero Section */}
      <section className="relative bg-yellow-400 text-white font-bold py-20 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Inbound Calling Solutions by Agilis
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Elevate Customer Engagement and Support
            </p>
            <p className="text-lg mb-8 font-semibold">
              Our inbound calling solutions empower businesses to provide
              exceptional customer service by ensuring every call is handled
              with care. Leverage our features to streamline your support
              operations and enhance customer satisfaction.
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
              src={inbound}
              alt="Inbound Calling Illustration"
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
        id="demo"
        ref={faqRef}
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="bg-gray-800 grid grid-cols-1 lg:grid-cols-2 mx-20">
          <div className=" p-6 rounded-lg ">
            <Demo
              title="Request A Demo"
              description="Contact us today to schedule a demonstration and know how our solution can benefit your organization."
            />
          </div>
          <FNQ faqItems={faqItems} />
        </div>
      </motion.section>

      {/* CTA Section */}
      {/* <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Inbound Calling?
          </h2>
          <p className="text-lg mb-8">
            Schedule a demo to see how our inbound calling solutions can enhance
            your customer interactions.
          </p>
          <CTAButton
            phoneNumber="+1-800-123-4567"
            icon={<Phone size={20} />}
            message="Request a Demo"
          />
        </div>
      </section> */}
    </div>
  );
};

export default InboundCallingPage;
