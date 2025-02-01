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

  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });

  const features = [
    {
      icon: <FaHeadset className="w-8 h-8 text-[#FFD700]" />,
      title: "Automated Call Distribution (ACD)",
      description:
        "Distribute incoming calls automatically to the right agents based on predefined rules, ensuring customers reach the most appropriate representative.",
    },
    {
      icon: <FaRobot className="w-8 h-8 text-[#FFD700]" />,
      title: "Interactive Voice Response (IVR)",
      description:
        "Enable customers to interact with a computerized system to route calls effectively, gather information, or provide self-service options.",
    },
    {
      icon: <FaUserAlt className="w-8 h-8 text-[#FFD700]" />,
      title: "Caller ID & Call Logging",
      description:
        "Identify incoming calls with caller ID and maintain detailed logs of all calls for future reference and analytics.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#FFD700]" />,
      title: "Real-Time Analytics",
      description:
        "Monitor call performance metrics in real time, allowing for data-driven decision-making and timely adjustments.",
    },
    {
      icon: <FaCogs className="w-8 h-8 text-[#FFD700]" />,
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
    <div className="min-h-screen mt-10 bg-[#F3F4F6] text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="relative my-10 md:my-20 py-10 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto justify-center px-4 md:mt-10 flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-4 md:space-x-8">
          {/* Left Side - Text */}
          <motion.div
            className="text-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-2xl max-w-[40rem] text-center justify-center md:text-5xl md:mb-4 font-bold leading-tight text-yellow-400">
              Inbound Calling Solutions by Agilis
            </h1>
            <p className="text-xl font-semibold  md:text-2xl mb-2 text-center text-gray-800">
              Elevate Customer Engagement and Support
            </p>
            <p className="text-md md:text-xl mb-8 font-semibold text-center text-gray-700">
              Our inbound calling solutions empower businesses to provide
              exceptional customer service by ensuring every call is handled
              with care. Leverage our features to streamline your support
              operations and enhance customer satisfaction.
            </p>
            <motion.button
              className="bg-black mx-auto items-center justify-between  text-[#FFD700] border-2 border-[#FFD700] font-bold py-3 px-6 rounded-lg hover:bg-[#FFD700] hover:text-black transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#demo" className="justify-center">
                Request a Demo
              </Link>
            </motion.button>
          </motion.div>
          {/* Right Side - Illustration */}
          <motion.div
            className="justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src={inbound}
              alt="Inbound Calling Illustration"
              className="mx-auto md:max-w-md lg:max-w-lg"
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

      {/* CTA Section */}
      <CTA1 />

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        className="bg-[#F3F4F6] py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="bg-gray-800 grid grid-cols-1 lg:grid-cols-2 p-10 rounded-lg">
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

export default InboundCallingPage;
