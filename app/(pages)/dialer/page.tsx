"use client";
import React, { useRef } from "react";
import {
  FaRobot,
  FaChartLine,
  FaCogs,
  FaListAlt,
  FaHeadset,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { CTAButton } from "@/components/cta";
import Demo from "@/components/company/demo";
import FNQ from "@/components/company/fnq";
import Link from "next/link";
import { PhoneIcon } from "lucide-react";

const DialerPage: React.FC = () => {
  const autoManualRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const dialerTypesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Check if the sections are in view
  const isAutoManualInView = useInView(autoManualRef);
  const isFeaturesInView = useInView(featuresRef);
  const isDialerTypesInView = useInView(dialerTypesRef);
  const isBenefitsInView = useInView(benefitsRef);
  const isFaqInView = useInView(faqRef);

  const features = [
    {
      icon: <FaListAlt rotate={180} />,
      title: "Centralized Lead Management",
      description:
        "Easily upload and manage your call lists from a single platform.",
    },
    {
      icon: <FaCogs rotate={180} />,
      title: "Customizable Dialing Modes",
      description:
        "Choose from automatic or manual dialing modes, depending on your campaign goals.",
    },
    {
      icon: <FaRobot />,
      title: "Call Routing",
      description:
        "Intelligently route calls to the right agents based on skills, availability, or predefined rules.",
    },
    {
      icon: <FaChartLine />,
      title: "Real-Time Analytics",
      description:
        "Get insights into agent performance, campaign success rates, and call metrics, enabling data-driven decision-making.",
    },
    {
      icon: <FaHeadset />,
      title: "Call Monitoring & Recording",
      description:
        "Supervisors can listen to live calls, record conversations, and provide feedback for continuous improvement and compliance.",
    },
    {
      icon: <FaListAlt />,
      title: "Compliance Tools",
      description:
        'Manage "do not call" lists and other regulatory requirements with ease.',
    },
  ];

  const dialerTypes = [
    {
      title: "Progressive Dialer",
      description:
        "This mode dials one number at a time, connecting to an agent only when they are available, ensuring no call abandonment. Ideal for B2B calls where engagement is key.",
    },
    {
      title: "Predictive Dialer",
      description:
        "Using algorithms to predict agent availability, this dialer calls multiple numbers simultaneously and connects the next available agent to a live contact. It's perfect for high-volume outbound campaigns like telemarketing and sales.",
    },
    {
      title: "Power Dialer",
      description:
        "Automatically dials through multiple channels without checking agent status. Calls are dropped if no agent is available, making it ideal for fast-paced environments.",
    },
    {
      title: "Robo Dialer (Bot Dialing)",
      description:
        "This automated system plays pre-recorded messages and allows recipients to interact via IVR systems. Great for reminders, notifications, or basic customer engagement without needing an agent initially.",
    },
  ];

  const benefits = [
    {
      title: "Boost Agent Productivity",
      description:
        "With auto dialers, agents no longer waste time on manual dialing or unproductive calls. They can focus solely on live interactions.",
    },
    {
      title: "Maximize Call Volume",
      description:
        "Auto dialers handle higher call volumes, allowing your team to reach more prospects or customers in less time.",
    },
    {
      title: "Enhanced Call Quality",
      description:
        "For more personalized customer interactions, manual dialers give agents control over every call, resulting in deeper connections.",
    },
    {
      title: "Improved Call Routing",
      description:
        "Ensure each customer is connected to the most appropriate agent based on predefined criteria such as expertise, language, or region.",
    },
    {
      title: "Real-Time Monitoring and Coaching",
      description:
        "Supervisors can step in with real-time feedback and guidance, improving agent performance and compliance with company standards.",
    },
    {
      title: "Cost-Effective Campaigns",
      description:
        "Optimize your outbound calling strategy by using the right dialer for each situation, ensuring maximum return on investment.",
    },
  ];

  const faqItems = [
    {
      question:
        "What is the difference between an auto dialer and a manual dialer?",
      answer:
        "An auto dialer automatically dials numbers and connects agents to live contacts, improving efficiency for large-scale operations. A manual dialer gives agents control over each call, allowing for more personalized customer interactions.",
    },
    {
      question: "Can I use both auto and manual dialers in the same campaign?",
      answer:
        "Yes, our platform allows you to switch between auto and manual dialing modes, depending on the needs of your campaign.",
    },
    {
      question: "Does Agilis dialer integrate with CRM systems?",
      answer:
        "Absolutely! Our dialer solutions can seamlessly integrate with leading CRM platforms to ensure agents have access to real-time customer information during calls.",
    },
    {
      question: "How does an auto dialer increase productivity?",
      answer:
        "By automating the dialing process and filtering out voicemails, busy signals, and disconnected numbers, auto dialers ensure agents spend more time talking to live contacts rather than manually dialing numbers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600">
      {/* Hero Section */}
      <section className="bg-yellow-400 text-white font-bold py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dialer Solutions by Agilis
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Boost Efficiency, Enhance Productivity, and Drive Results
          </p>
          <p className="text-lg mb-8 font-semibold">
            At Agilis, we offer advanced dialer solutions that are designed to
            streamline outbound calling operations, whether you're using
            automatic or manual dialing. Our cutting-edge software optimizes
            call campaigns, reduces idle time, and helps your business engage
            with customers more efficiently.
          </p>
          <button className="text-white bg-black border hover:border-black border-[#f9e573] font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
            <Link href="#demo">Request a Demo</Link>
          </button>
        </div>
      </section>

      {/* Auto vs Manual Dialers Section */}
      <motion.section
        ref={autoManualRef}
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isAutoManualInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Auto Dialers vs. Manual Dialers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white border-2 p-6 rounded-lg shadow-md"
              initial={{ scale: 0.8, opacity: 0, x: -100 }}
              animate={isAutoManualInView ? { scale: 1, opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                What is an Auto Dialer?
              </h3>
              <p className="text-gray-900 mb-4">
                Auto Dialers automate outbound calls by dialing numbers from a
                pre-configured list and connecting agents only when a live
                contact is available, saving time and improving productivity.
                These systems can filter out voicemails, busy signals, and
                invalid numbers, ensuring that your agents focus on meaningful
                conversations.
              </p>
              <Link href="/inbound-calling">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition duration-300">
                  <PhoneIcon className="inline-block h-5 w-5 mr-2" />
                  Inbound Calling{" "}
                </button>
              </Link>
            </motion.div>

            <motion.div
              className="bg-white border-2 p-6 rounded-lg shadow-md"
              initial={{ scale: 0.8, opacity: 0, x: 100 }}
              animate={isAutoManualInView ? { scale: 1, opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-semibold mb-4">Manual Dialers</h3>
              <p className="text-gray-900 mb-4">
                Manual Dialers require agents to dial numbers manually. While
                they may take more time compared to auto dialers, they provide
                agents with more control over each call, allowing for a more
                personalized customer interaction. This can be especially
                beneficial in complex sales environments or when addressing
                unique customer needs.
              </p>
              <Link href="/outbound-calling">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition duration-300">
                  <PhoneIcon className="inline-block h-5 w-5 mr-2" />
                  Outbound Calling
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <CTAButton
        icon={
          <FaPhoneSquareAlt className="h-[1.5rem] w-[1.5rem] mr-1 text-[#ff9900]" />
        }
        message="Amplify Your Results with Our Dialer – Call Today!"
        phoneNumber="+91 9810787931"
      />

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
                className="bg-white justify-center p-6 rounded-lg shadow-md hover:bg-gradient-to-t hover:from-yellow-500 hover:to-orange-300 transition-all duration-500"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={isFeaturesInView ? { scale: 1, opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                {/* Icon with rotation effect on hover */}
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

      {/* Dialer Types Section */}
      <motion.section
        ref={dialerTypesRef}
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isDialerTypesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeInOut" }}
      >
        <div className="container mx-auto p-10 bg-gray-900">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Types of Dialers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dialerTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={
                  isDialerTypesInView ? { scale: 1, opacity: 1, y: 0 } : {}
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                  {type.title}
                </h3>
                <p className="text-pretty-gray text-black ">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        className="bg-gray-200 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Benefits of Using Dialers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={isBenefitsInView ? { scale: 1, opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
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

      {/* FAQ Section and Demo Request */}
      <motion.section
        ref={faqRef}
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="bg-gray-800 grid grid-cols-1 lg:grid-cols-2 mx-20">
          <div className=" p-6 rounded-lg " id="demo">
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

export default DialerPage;
