"use client";
import React, { useRef } from "react";
import {
  FaRobot,
  FaUserAlt,
  FaChartLine,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";
import { CTA1 } from "@/components/cta";
import Demo from "@/components/company/demo";
import FNQ from "@/components/company/fnq";
import Image from "next/image";
// import outbound from "@/public/images/outbound.png";
import outboundSvg from "@/public/svg/outbound.svg";
import Link from "next/link";

const OutboundCallingPage: React.FC = () => {
  // Create refs for sections
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <FaHeadset className="w-8 h-8 text-[#FFD700]" />,
      title: "Predictive Dialing",
      description:
        "Automatically dial multiple numbers at once and connect answered calls to available agents, maximizing efficiency and reducing idle time.",
    },
    {
      icon: <FaRobot className="w-8 h-8 text-[#FFD700]" />,
      title: "Call Scripting",
      description:
        "Provide agents with guided scripts to ensure consistent messaging and effective communication with customers.",
    },
    {
      icon: <FaUserAlt className="w-8 h-8 text-[#FFD700]" />,
      title: "Lead Management",
      description:
        "Manage and prioritize leads effectively, enabling agents to focus on high-potential customers for better conversion rates.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#FFD700]" />,
      title: "Performance Analytics",
      description:
        "Track and analyze call performance metrics, allowing teams to identify trends and optimize outbound strategies.",
    },
    {
      icon: <FaCogs className="w-8 h-8 text-[#FFD700]" />,
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
    <div className="min-h-screen mt-14 bg-[#F3F4F6] text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFD700] to-[#F8E67E] py-24 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-black">
              Outbound Calling Solutions by Agilis
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-800">
              Optimize Your Sales and Outreach Efforts
            </p>
            <p className="text-lg mb-8 font-semibold text-gray-700">
              Our outbound calling solutions empower businesses to enhance their
              sales and marketing efforts through efficient call management and
              data-driven insights.
            </p>
            <button className="bg-black text-[#FFD700] border-2 border-[#342c01] font-bold py-3 px-6 rounded-lg hover:bg-[#FFD700] hover:text-black transition duration-300">
              <Link href="#demo">Request a Demo</Link>
            </button>
          </div>

          {/* Right Side - Illustration */}
          <div className="mt-8 md:mt-0">
            <Image
              src={outboundSvg}
              alt="Outbound Calling Illustration"
              quality={80}
              className="max-w-xs md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F3F4F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA1 />

      {/* Benefits Section */}
      <section ref={benefitsRef} className="bg-[#F3F4F6] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16">
        <div className="bg-gray-800 grid grid-cols-1 lg:grid-cols-2 p-10 rounded-lg">
          <div className="p-5 rounded-lg">
            <Demo
              title="Request A Demo"
              description="Contact us today to schedule a demonstration and see how our outbound calling solutions can elevate your business."
            />
          </div>
          <FNQ faqItems={faqItems} />
        </div>
      </section>
    </div>
  );
};

export default OutboundCallingPage;
