import Image from "next/image";
import agile_team from "@/public/building_websites.svg";
import company from "@/public/Team work-amico.svg";

import React from "react";
import { ArrowRight } from "lucide-react";
import Contact from "./contact";

const LongTermPartnershipComponent = () => {
  return (
    <div className="mx-10 p-8 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 pr-8">
        <h2 className="text-4xl font-bold mb-4">
          We believe in Long Term Partnership.
        </h2>
        <p className="text-gray-600 text-xl mb-6">
          At Agilis, we believe in long-term partnerships with our clients. We
          understand that every business is unique and requires a tailored
          approach to communication. Our experts work closely with you to
          understand your business needs and provide solutions that meet your
          objectives.
        </p>
        <div className="my-5 flex flex-row items-center space-x-10">
          {["Experience", "Flexibility", "Results"].map((item, index) => (
            <div key={item} className="flex items-center ga justify-center">
              <div className="w-7 h-7 text-xl bg-gray-600 rounded-full flex items-center justify-center mr-3">
                <span className="font-bold text-gray-100">{index + 1}</span>
              </div>
              <span className="font-semibold text-xl ">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 mb-6 text-xl">
          Our team of experts will work closely with you to understand your
          business needs and provide solutions that meet your objectives.
        </p>
        <p className="text-gray-600 mb-6 text-xl">
          We believe that effective communication is the backbone of business
          success, and we are here to provide the tools and expertise to help
          you achieve that.
        </p>
        <button className="flex items-center text-blue-600 font-semibold">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
      <div className="lg:w-1/2">
        <div className="relative ">
          <Image src={agile_team} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-100">
      <div className="mx-auto text-center space-y-4">
        {/* Section Header */}
        <h2 className="inline-block text-2xl md:text-4xl font-semibold bg-[#f8e67e] px-3 py-1 rounded-lg text-[#0d0d0d]">
          About Us
        </h2>
        {/* <div className="inline-block bg-[#d4af37] px-3 py-1 rounded-lg text-[#0d0d0d] text-sm font-medium">
          About Us
        </div> */}
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800">
          Elevating Communication, Empowering Businesses
        </h2>
        <p className="text-xl text-gray-700">
          Agilis Communication Services is a leading provider of cutting-edge
          communication solutions, dedicated to helping businesses thrive in the
          digital age.
        </p>
      </div>

      {/* Content Section */}
      <div className="m-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        {/* Image */}

        <div className="relative w-[70%] ml-16">
          <Image src={company} alt="Illustration" />
        </div>

        {/* Text Content */}
        <div className="text-gray-700 px-10 justify-center leading-relaxed space-y-6">
          <p className="font-semibold text-lg md:text-xl">
            At Agilis, we understand the unique challenges businesses face in
            today’s competitive environment.
          </p>
          <p className="text-base md:text-lg">
            That’s why we offer innovative communication solutions, ranging from
            voice calling to internet and video conferencing, tailored to meet
            the specific needs of your business.
          </p>
          <p className="font-semibold text-lg md:text-xl">
            Our mission is to empower organizations to enhance their
            communication strategies and improve efficiency through cutting-edge
            technologies.
          </p>
          <p className="text-base md:text-lg">
            We believe that effective communication is the backbone of business
            success, and we are here to provide the tools and expertise to help
            you achieve that.
          </p>
        </div>
      </div>
      <LongTermPartnershipComponent />
      <Contact />
    </section>
  );
};

export default About;
