"use client";
import React from "react";
import Image from "next/image";
import avatar from "@/public/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import quotg_icon from "@/public/quote.png";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Aiyana",
    role: "CEO / Specely",
    content:
      "Bring to the table win-win survival strategies to ensure proactive domination. User generated content in real-time will have multiple touchpoints for offshoring.",
    avatar: avatar,
  },
  {
    id: 2,
    name: "Alexander",
    role: "CEO / Combtree",
    content:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Organically grow the holistic world view of disruptive innovation.",
    avatar: avatar,
  },
  {
    id: 3,
    name: "Ariya",
    role: "CTO / Softone",
    content:
      "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise potential.",
    avatar: avatar,
  },
  {
    id: 4,
    name: "Braiden",
    role: "CFO / Markoo",
    content:
      "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.",
    avatar: avatar,
  },
];

export default function Testimonial() {
  return (
    <div className="max-w-7xl  mx-auto p-8 items-center">
      <h2 className="text-4xl font-bold text-center mb-2">
        Client Testimonials
      </h2>
      <div className="flex justify-center mb-12">
        <div className="w-[16rem] h-2 bg-yellow-300"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.75, delay: index * 0.1 }}
            className="mx-5 md:mx-0 bg-white shadow-md rounded-lg p-10"
          >
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <Image
                  src={quotg_icon}
                  width={30}
                  height={30}
                  alt="quote"
                  className="text-yellow-300"
                />
                <blockquote className="text-xl ml-10 py-2 -mt-2 italic mb-4">
                  {testimonial.content}
                </blockquote>
              </div>
              <div className="flex items-end gap-3 justify-end mt-2">
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
                <Image
                  src={testimonial.avatar}
                  width={80}
                  height={70}
                  alt={testimonial.name}
                  className="rounded-lg mr-4"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
