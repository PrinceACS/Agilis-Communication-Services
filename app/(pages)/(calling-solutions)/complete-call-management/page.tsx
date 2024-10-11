"use client";
import React, { useRef } from "react";
import Demo from "@/components/company/demo";
import FNQ from "@/components/company/fnq";
import { motion, useInView } from "framer-motion";
import Testimonial from "@/components/company/Testimonial";
import { Check } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LoginModal from "@/components/LoginModal";

import Link from "next/link";
import { CTACallToAction } from "@/components/cta";

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
  const isFaqInView = useInView(faqRef);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-300 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
            Complete Call Management Solution
          </h1>
          <p className="text-2xl max-w-3xl mx-auto mb-8">
            Agilis Communication Services provides an advanced Autodialer
            Solution to optimize your business&apos;s outbound communication,
            increasing efficiency and streamlining operations.
          </p>
          <a
            href="#demo"
            className="inline-block bg-gray-900 text-white  font-semibold px-10 py-4 rounded-lg shadow-md hover:bg-amber-400 hover:text-black hover:shadow-xl hover:scale-105 duration-300 transition-colors"
          >
            Contact Us for a Free Demo
          </a>
        </div>
      </section>

      {/* Auto vs Manual Dialers Section */}
      {/* <motion.section
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
              <p>
                Auto Dialers automate outbound calls by dialing numbers from a
                pre-configured list and connecting agents only when a live
                contact is available, saving time and improving productivity.
                These systems can filter out voicemails, busy signals, and
                invalid numbers, ensuring that your agents focus on meaningful
                conversations.
              </p>
            </motion.div>

            <motion.div
              className="bg-white border-2 p-6 rounded-lg shadow-md"
              initial={{ scale: 0.8, opacity: 0, x: 100 }}
              animate={isAutoManualInView ? { scale: 1, opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-semibold mb-4">Manual Dialers</h3>
              <p>
                Manual Dialers require agents to dial numbers manually. While
                they may take more time compared to auto dialers, they provide
                agents with more control over each call, allowing for a more
                personalized customer interaction. This can be especially
                beneficial in complex sales environments or when addressing
                unique customer needs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      {/* Proposed Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Proposed Solution</h2>
          <p className="text-xl mb-8">
            Agilis Communication Services offers a tailored Autodialer and
            Manaual Dialer Solution that includes a variety of key features
            designed to improve your business's communication strategies.
          </p>
        </div>
      </section>

      {/* Looking for Dialer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Looking for Dialer?</h2>
          <p className="text-xl mb-8">
            Explore Dialer by Agilis to transform your business communications.
          </p>
          <Link
            href="/dialer"
            className="bg-yellow-400 text-white px-8 py-3 rounded-full hover:bg-primaryHover transition duration-300"
          >
            Explore Dialer
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureItem
              title="Intelligent Dialing Algorithms"
              description="Utilizes advanced algorithms to optimize call routing, prioritize leads, and reduce agent idle time."
            />
            <FeatureItem
              title="CRM Integration"
              description="Seamlessly integrates with your CRM system to provide real-time access to customer data and call history."
            />
            <FeatureItem
              title="Customizable Scripting"
              description="Customizable scripts to help agents deliver consistent messaging across all outbound communications."
            />
            <FeatureItem
              title="Compliance and Regulations"
              description="Built-in features to ensure compliance with laws such as TCPA and DNC."
            />
            <FeatureItem
              title="Performance Analytics"
              description="Detailed reporting dashboards to monitor campaign success and agent performance."
            />
            <FeatureItem
              title="Multichannel Capabilities"
              description="Supports voice calls, SMS, and email campaigns for a holistic communication strategy."
            />
          </div>
        </div>
      </section>

      {/* Implementation Plan Section */}
      <section className="py-20">
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
              <p className="flex flex-row">
                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="w-6 h-6 p-1 text-white" />
                </span>
                <strong>Discovery:</strong>
                <span>&nbsp;</span> Assess communication processes and define
                requirements.
              </p>

              <p className="flex flex-row">
                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <strong>Integration:</strong>
                <span>&nbsp;</span> Connect the solution with your CRM system
                and train your team.
              </p>
              <p className="flex flex-row">
                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <strong>Customization:</strong>
                <span>&nbsp;</span> Align configurations with business goals.
              </p>
              <p className="flex flex-row">
                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <strong>Testing:</strong>
                <span>&nbsp;</span> Rigorous testing to optimize functionality.
              </p>
              <p className="flex flex-row">
                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <strong>Support:</strong>
                <span>&nbsp;</span> Ongoing maintenance and optimization
                post-launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonial />
      {/* <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              name="John Doe"
              position="CEO, XYZ Inc."
              message="Agilis' Autodialer Solution transformed our outbound communication. We saw a 30% increase in productivity!"
            />
            <Testimonial
              name="Jane Smith"
              position="Marketing Manager, ABC Corp."
              message="The integration with our CRM was seamless and the performance analytics gave us valuable insights."
            />
            <Testimonial
              name="Alex Johnson"
              position="Director, CallTech"
              message="The compliance features helped us stay on top of regulatory requirements, saving us from legal headaches."
            />
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12 text-red-600">
            Get Started with ₹1,250/month
          </h2>
          <p className="text-2xl text-gray-700 mb-12">
            Our Basic plan offers a great way to get started with our Call
            Management Solution. You can always upgrade to higher plans as your
            business grows.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-red-600 hover:scale-95 focus:ring-4 focus:ring-yellow-400 hover:text-[#000000] text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out font-semibold">
                Get Started
              </button>
            </DialogTrigger>
            <LoginModal />
          </Dialog>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <motion.section
            ref={faqRef}
            className="py-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="bg-gray-800 grid grid-cols-1 lg:grid-cols-2 mx-auto p-10 rounded-lg shadow-lg">
              <FNQ faqItems={faqItems} />
              <div id="demo" className="p-6 rounded-lg">
                <Demo
                  title="Request A Demo"
                  description="Contact us today to schedule a demonstration and know how our solution can benefit your organization."
                />
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-yellow-400 py-20 text-white" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to see how Agilis Communication Services can
            transform your communication strategy.
          </p>
          <CTACallToAction />
        </div>
      </section>
    </div>
  );
};

// Reusable Feature, Testimonial, Pricing, and FAQ Components
const FeatureItem: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default CompleteCallManagementSolution;
