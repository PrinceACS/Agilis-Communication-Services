"use client";
import React from "react";
import { motion } from "framer-motion";

type FNQType = {
  question: string;
  answer: string;
};

type FNQProps = {
  faqItems: FNQType[];
};

const FNQ = ({ faqItems }: FNQProps) => {
  return (
    <div className="container mx-auto px-4 my-5">
      <h2 className="text-3xl text-[#FFD700] font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <motion.details
            key={index}
            className="bg-[#F3F4F6] p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
              {item.question}
            </summary>
            <p className="mt-2 text-gray-700">{item.answer}</p>
          </motion.details>
        ))}
      </div>
    </div>
  );
};

export default FNQ;
