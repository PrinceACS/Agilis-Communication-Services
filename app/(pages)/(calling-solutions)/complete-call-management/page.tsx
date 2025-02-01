"use client";
import React, { useRef } from "react";
import Demo from "@/components/company/demo";
import FNQ from "@/components/company/fnq";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LoginModal from "@/components/LoginModal";
import Link from "next/link";
import { CTACallToAction } from "@/components/cta";
import Image from "next/image";
import call_management from "@/public/images/complete-call-management.png";

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

const CompleteCallManagementSolution: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const isFaqInView = useInView(faqRef, { once: true });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative  text-black py-20 md:py-32 lg:py-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto text-center flex-col-reverse flex md:flex-row items-center justify-center">
          <div>
            <h1 className="md:text-5xl mx-5 text-3xl text-yellow-500 font-extrabold tracking-tight md:leading-snug lg:leading-none">
              Complete Call Management Solution
            </h1>
            <p className="md:text-2xl text-lg max-w-3xl mx-auto mb-4 px-1 md:px-4 lg:px-0">
              Agilis Communication Services provides an advanced Autodialer
              Solution to optimize your business&apos;s outbound communication,
              increasing efficiency and streamlining operations.
            </p>
            <motion.a
              href="#demo"
              className="inline-block bg-gray-900 text-white font-semibold px-10 py-4 rounded-lg shadow-md hover:bg-[#FFD700] hover:text-black hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us for a Free Demo
            </motion.a>
          </div>

          {/* Right Side - Illustration */}
          <motion.div
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src={call_management}
              alt="Bulk SMS Illustration"
              className="max-w-xs md:max-w-md lg:max-w-lg object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Proposed Solution Section */}
      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Proposed Solution</h2>
          <p className="text-xl mb-8">
            Agilis Communication Services offers a tailored Autodialer and
            Manual Dialer Solution that includes a variety of key features
            designed to improve your business&apos;s communication strategies.
          </p>
        </div>
      </motion.section>

      {/* Looking for Dialer Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Looking for Dialer?</h2>
          <p className="text-xl mb-8">
            Explore Dialer by Agilis to transform your business communications.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/dialer"
              className="bg-[#FFD700] text-black px-8 py-3 rounded-full hover:bg-[#F8E67E] transition duration-300"
            >
              Explore Dialer
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        className="bg-[#F3F4F6] py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Intelligent Dialing Algorithms",
                description:
                  "Utilizes advanced algorithms to optimize call routing, prioritize leads, and reduce agent idle time.",
              },
              {
                title: "CRM Integration",
                description:
                  "Seamlessly integrates with your CRM system to provide real-time access to customer data and call history.",
              },
              {
                title: "Customizable Scripting",
                description:
                  "Customizable scripts to help agents deliver consistent messaging across all outbound communications.",
              },
              {
                title: "Compliance and Regulations",
                description:
                  "Built-in features to ensure compliance with laws such as TCPA and DNC.",
              },
              {
                title: "Performance Analytics",
                description:
                  "Detailed reporting dashboards to monitor campaign success and agent performance.",
              },
              {
                title: "Multichannel Capabilities",
                description:
                  "Supports voice calls, SMS, and email campaigns for a holistic communication strategy.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Implementation Plan Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-8">
            Implementation Plan
          </h2>
          <div className="text-xl space-y-6">
            <p>
              Our experienced team will ensure seamless integration of the
              Autodialer Solution, following these key steps:
            </p>
            <div className="list-disc list-inside space-y-4 px-2 text-sm md:text-xl">
              {[
                "Discovery: Assess communication processes and define requirements.",
                "Integration: Connect the solution with your CRM system and train your team.",
                "Customization: Align configurations with business goals.",
                "Testing: Rigorous testing to optimize functionality.",
                "Support: Ongoing maintenance and optimization post-launch.",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-row"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <p>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="py-20 bg-[#F3F4F6]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12 text-[#FFD700]">
            Get Started with ₹899/month
          </h2>
          <p className="text-2xl text-gray-700 mb-12">
            Our Basic plan offers a great way to get started with our Call
            Management Solution. You can always upgrade to higher plans as your
            business grows.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                className="bg-[#FFD700] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#F8E67E] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </DialogTrigger>
            <LoginModal />
          </Dialog>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        ref={faqRef}
        className="bg-[#F3F4F6] py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="container mx-auto">
          <div className="bg-gray-800 grid grid-cols-1 lg:grid-cols-2 mx-auto p-5 rounded-lg shadow-lg">
            <FNQ faqItems={faqItems} />
            <div id="demo" className="p-5 rounded-lg">
              <Demo
                title="Request A Demo"
                description="Contact us today to schedule a demonstration and know how our solution can benefit your organization."
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="bg-[#FFD700] py-20 text-black"
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to see how Agilis Communication Services can
            transform your communication strategy.
          </p>
          <CTACallToAction />
        </div>
      </motion.section>
    </div>
  );
};

export default CompleteCallManagementSolution;
