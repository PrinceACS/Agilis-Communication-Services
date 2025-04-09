"use client";
import React from "react";
import it_services from "@/public/images/It_services.png";
import tax_solutions from "@/public/images/tax_solutions.png";
import cloud_services from "@/public/images/cloudpng.png";
import client_centeric_approach from "@/public/images/client-centeric.png";
import Link from "next/link";
import Image from "next/image";

const SolutionByBusiness = () => {
  return (
    <div className="py-16 md:px-10 lg:px-8 bg-gray-50">
      {/* Main Heading Section */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
          Solutions for Businesses
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      {/* Introduction Paragraph */}
      <div className="text-gray-700 md:max-w-6xl mx-auto mb-20">
        <p className="text-center mx-5 text-lg md:text-2xl">
          At Agilis, we provide comprehensive solutions that help businesses
          thrive in an ever-changing landscape. Whether youre looking to enhance
          communication, streamline operations, or ensure compliance, Agilis
          offers the expertise and tools you need.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
        {/* Cloud Telephony Section */}
        <div className="p-4 flex flex-col space-y-6 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src={cloud_services.src}
            alt="Cloud Telephony"
            width={500}
            height={256}
            className="w-full h-64 object-contain rounded-lg shadow-md border-2 border-yellow-500"
          />
          <h3 className="text-2xl font-bold text-center text-gray-900">
            Transform Your Communication with Cloud Telephony
          </h3>
          <p className="text-gray-700 text-lg">
            Our cloud telephony solutions offer a reliable, scalable platform to
            streamline communication. Boost efficiency, save costs, and improve
            customer service with our advanced call management features.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
            <li>
              <span className="font-bold">Boost Efficiency:</span> Smart routing
              and real-time analytics
            </li>
            <li>
              <span className="font-bold">Cost Savings:</span> Eliminate
              traditional phone system costs
            </li>
            <li>
              <span className="font-bold">Enhanced Customer Service:</span>{" "}
              Improve customer interactions
            </li>
          </ul>
        </div>

        {/* Tax Solutions Section */}
        <div className="p-4 flex flex-col space-y-6 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src={tax_solutions.src}
            alt="Tax Solutions"
            width={500}
            height={256}
            loading="lazy"
            className="w-full h-64 object-contain rounded-lg shadow-md border-2 border-yellow-500"
          />
          <h3 className="text-2xl font-bold text-center text-gray-900">
            Ensure Compliance and Optimize Finances with Tax Solutions
          </h3>
          <p className="text-gray-700 text-lg">
            Navigate complex tax regulations with ease using our expert tax
            solutions. We help businesses stay compliant while maximizing their
            financial outcomes.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
            <li>
              <span className="font-bold">Streamline Tax Management:</span>{" "}
              End-to-end support
            </li>
            <li>
              <span className="font-bold">Minimize Risks:</span> Mitigate tax
              risks and avoid penalties
            </li>
            <li>
              <span className="font-bold">Maximize Savings:</span> Customized
              tax strategies
            </li>
          </ul>
        </div>

        {/* IT Solutions Section */}
        <div className="p-4 flex flex-col space-y-6 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src={it_services.src}
            alt="IT Solutions"
            width={500}
            height={256}
            className="w-full h-64 object-contain rounded-lg shadow-md border-2 border-yellow-500"
          />
          <h3 className="text-2xl font-bold text-center text-gray-900">
            Boost Productivity with Comprehensive IT Solutions
          </h3>
          <p className="text-gray-700 text-lg">
            From infrastructure to cybersecurity, our IT solutions are designed
            to support your business in achieving digital transformation.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
            <li>
              <span className="font-bold">Modern Infrastructure:</span>{" "}
              Cutting-edge IT solutions
            </li>
            <li>
              <span className="font-bold">Cybersecurity Protection:</span>{" "}
              Safeguard your business
            </li>
            <li>
              <span className="font-bold">Tailored IT Services:</span>{" "}
              Customized to your unique needs
            </li>
          </ul>
        </div>
      </div>

      {/* Client-Centric Approach Section */}
      <div className="flex flex-col rounded-lg shadow-lg p-4 mx-6 md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 mb-20 border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <Image
          src={client_centeric_approach.src}
          alt="Client-Centric Approach"
          width={500}
          height={256}
          className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md border-2 border-yellow-500"
        />
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold mb-1 text-gray-900">
            Our Client-Centric Approach
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            At Agilis, we prioritize your success. Our dedicated team works
            closely with you to understand your challenges and deliver solutions
            that add real value to your business.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
            <li>
              <span className="font-bold">Tailored Solutions:</span> Crafted to
              fit your specific business needs
            </li>
            <li>
              <span className="font-bold">Dedicated Support:</span>{" "}
              Round-the-clock support for seamless operations
            </li>
            <li>
              <span className="font-bold">Innovation-Driven:</span> Cutting-edge
              solutions to keep you ahead
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-amber-300 to-amber-500 text-white text-xl font-bold py-4 px-6 rounded-lg leading-4 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-700 transition duration-300 shadow-lg shadow-amber-300/50">
          <Link href="#contact">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default SolutionByBusiness;
