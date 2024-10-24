"use client";
import React from "react";
import { Check } from "lucide-react";
import { IoRocket } from "react-icons/io5";

import agile_team from "@/public/creative-team.svg";
import Image from "next/image";
import { motion } from "framer-motion";
const WorkWithUs = () => {
  return (
    <div className="my-10 mx-10  md:mx-20 px-4  items-center">
      <div className="flex flex-col md:flex-row items-center">
        <div className="[w-50%] lg:w-1/2 lg:pr-8 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4  leading-tight">
            Let our Agilis Team understand and serve your needs.{" "}
            <span className="inline-flex">
              <IoRocket />
            </span>
          </h2>
          <p className="text-gray-700 text-wrap mb-6 text-xl">
            Our cloud telephony experts craft tailored solutions to meet your
            business communication goals, ensuring timely delivery and
            exceptional support.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:grid md:grid-cols-2 gap-4 lg:flex hidden"
          >
            {[
              "Active Collaboration",
              "On-Schedule Delivery",
              "After Sales Services",
              "24x7 On-Support",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: index * 0.12,
                }}
                className="flex items-center"
              >
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-md md:text-xl md:text-nowrap font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="relative mb-4">
          <Image
            src={agile_team}
            alt="Illustration"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:hidden ">
        {[
          "Active Collaboration",
          "On-Schedule Delivery",
          "After Sales Services",
          "24x7 On-Support",
        ].map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-6 h-6 bg-emerald-500 rounded-full p-1 text-lg items-center justify-center mr-2">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-md md:text-xl font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkWithUs;
