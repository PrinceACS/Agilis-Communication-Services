"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Testimonial from "../../company/Testimonial";
import { Button } from "@/components/ui/button";
import { Star, Clock, Headphones, Database } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Prashant",
    role: "Customer Service Manager at HealthFirst Clinics",
    content:
      "Agilis Communication Services has truly elevated our patient communication with their IVR toll-free solution. Patients can easily navigate through the system to book appointments or get information, and the ease of use has significantly reduced our call wait times. We’re thrilled with the efficiency it has brought to our operations!",
    avatar: "",
  },
  {
    id: 2,
    name: "Raj Pratap",
    role: "Operations Head at TechSolutions Ltd.",
    content:
      "The normal IVR system implemented by Agilis has transformed our customer support. The intuitive design allows our clients to get the assistance they need without frustration. Since launching, we’ve seen a marked improvement in customer satisfaction and faster resolution times. Highly recommend their services!",
    avatar: "",
  },
  {
    id: 3,
    name: "Ms Durga",
    role: "Marketing Director at GreenLeaf Products",
    content:
      "Working with Agilis for our IVR needs has been fantastic. Their team took the time to understand our requirements and delivered a customized IVR system that fits perfectly with our brand. The ability to update messages and manage calls efficiently has made a significant impact on our customer interactions!",
    avatar: "",
  },
  {
    id: 4,
    name: "Ms Trushika",
    role: "CEO at RetailConnect",
    content:
      "Agilis Communication Services has been a game-changer for our business. Their IVR solutions, both toll-free and normal, have streamlined our communication processes and improved our customer experience. The professionalism and support from the Agilis team have made this journey smooth and successful!",
    avatar: "",
  },
];

const Specific = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Star className="w-12 h-12 text-amber-500" />,
      title: "Best-in-Market Pricing",
      description: "Top-tier cloud telephony services at competitive rates.",
    },
    {
      icon: <Clock className="w-12 h-12 text-amber-500" />,
      title: "99.99% Uptime",
      description:
        "Backed by a 99.99% Service Level Agreement (SLA) guarantee.",
    },
    {
      icon: <Headphones className="w-12 h-12 text-amber-500" />,
      title: "Comprehensive Support",
      description:
        "Assistance at every step, from consultation to post-purchase.",
    },
    {
      icon: <Database className="w-12 h-12 text-amber-500" />,
      title: "Seamless API Integrations",
      description:
        "Integrate with popular applications like CRM and other software.",
    },
  ];

  const faqs = [
    {
      question: "What is an IVR system?",
      answer:
        "An IVR (Interactive Voice Response) system is an automated telephony system that responds to customer inputs via voice or keypad commands. It uses pre-recorded menus to gather information and routes calls to appropriate agents or departments based on the input.",
    },
    {
      question: "Can I add IVR to my existing number?",
      answer:
        "Yes, our IVR solutions can seamlessly integrate with your current business number.",
    },
    {
      question: "How long does it take to implement an IVR system?",
      answer:
        "Implementation times vary based on your business needs, but we work quickly to get your system up and running with minimal downtime.",
    },
    {
      question: "Can I customize the IVR system?",
      answer:
        "Yes, we offer fully customizable IVR solutions to meet your business's unique needs.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-[#FFFFFF] text-black">
      <h1 className="text-5xl font-bold text-center mb-16 text-amber-500">
        Why Choose Us for Your IVR Needs?
      </h1>

      <div className="mb-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <Button
              key={index}
              variant={activeFeature === index ? "secondary" : "ghost"}
              className={`h-auto w-full flex flex-col items-center p-4 transition-all duration-300 ${
                activeFeature === index
                  ? "bg-amber-200 text-black"
                  : "hover:bg-[#F5F5F5] text-black"
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <span className="text-white">{feature.icon}</span>
              <span className="mt-2 text-lg text-wrap font-semibold">
                {feature.title}
              </span>
            </Button>
          ))}
        </div>
        <Card className="bg-[#F5F5F5] border-amber-500 transition-shadow hover:shadow-lg hover:shadow-amber-500/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-amber-500">
              {features[activeFeature].title}
            </h3>
            <p className="text-lg text-[#333333]">
              {features[activeFeature].description}
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-500">
          Happy Clients Speak for Us
        </h2>
        <Testimonial testimonials={testimonials} />
      </section>

      <section className="mb-24 bg-amber-400 text-[#1A1A1A] p-10 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center  justify-center">
          Start Converting Leads into Customers Today{" "}
        </h2>
        <p className="text-lg text-center mb-8">
          Don&apos;t miss another business opportunity. Our IVR system ensures
          you are always available to your customers.
        </p>
        <div className="flex flex-col gap-y-4 items-center justify-center space-x-4">
          <Button className="bg-[#1A1A1A] text-amber-500 hover:bg-black">
            <Link href="#demo">Book a Demo</Link>
          </Button>
          <Button className="bg-[#1A1A1A] text-amber-500 hover:bg-black">
            <a href="tel:+919810787931">Call Now:+91 98107 87931</a>
          </Button>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-500">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-start">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#333333]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default Specific;
