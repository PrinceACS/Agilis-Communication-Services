import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Contact from "@/components/company/contact";
import Testimonial from "@/components/company/Testimonial";
import Demo from "@/components/company/demo";

const CustomizedSolution = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="container max-w-7xl mx-auto py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-6">Customized Solution</h1>
          <p className="mb-8">
            We understand that every business is unique and may require a
            customized solution to meet their specific needs. Our team of
            experts will work closely with you to understand your business
            requirements and develop a customized solution that meets your
            needs.
          </p>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 bg-yellow-400">
              {/* <Image
                src={customized_solution}
                alt="Customized Solution"
                className="w-full h-auto"
              /> */}
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-8">
              <h2 className="text-2xl font-bold mb-4">
                Benefits of Customized Solution
              </h2>
              <ul className="list-disc list-inside mb-4">
                <li>Increased Efficiency</li>
                <li>Improved Productivity</li>
                <li>Enhanced Customer Experience</li>
                <li>Cost Savings</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <Contact />
        <Testimonial />
        <Demo />
      </div>
    </div>
  );
};

export default CustomizedSolution;
