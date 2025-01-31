"use client";
import React from "react";
import Image from "next/image";
import quotg_icon from "@/public/images/quote.png";
import { motion } from "framer-motion";
import type { Testimonial } from "@/type";

type TestimonialProps = {
  testimonials: Testimonial[];
};

export default function Testimonial({ testimonials }: TestimonialProps) {
  return (
    <div className=" items-center p-10">
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
              <div className="flex-grow bg-white">
                <Image
                  src={quotg_icon}
                  width={25}
                  height={25}
                  alt="quote"
                  className="text-yellow-300 bg-white"
                />
                <blockquote className="text-md text-pretty ml-10 py-2 -mt-2 italic mb-4 ">
                  {testimonial.content}
                </blockquote>
              </div>
              <div className="flex items-end gap-3 justify-end mt-2">
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
                {/* <Image
                  src={testimonial.avatar ?? "/default-avatar.png"}
                  width={80}
                  height={70}
                  alt={testimonial.name}
                  className="rounded-lg mr-4"
                /> */}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
