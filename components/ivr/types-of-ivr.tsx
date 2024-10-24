import Image from "next/image";
import React from "react";
import Link from "next/link";

import ivr_toll_free from "@/public/images/toll_free_ivr.png";
import ten_digit_ivr from "@/public/images/10digit_ivr.png";

const TypesOfIVR = () => {
  return (
    <div className="mt-10 mx-auto px-4 md:px-16 justify-center">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:flex-1 font-bold text-yellow-500">
          Interactive Voice <span>Response (IVR)</span>
        </h1>
      </div>

      {/* Toll-Free IVR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mb-16 md:mb-0">
        <div className="justify-center md:flex md:flex-row md:items-center md:justify-center md:order-last">
          <Link href="/ivr/toll-free-ivr">
            <div className="relative">
              <Image
                alt="Toll Free"
                height={400}
                width={400}
                src={ivr_toll_free}
                className="rounded-lg shadow-lg cursor-pointer"
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black hover:bg-opacity-25 transition duration-300">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white">
                  Explore
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center justify-center mx-5 md:order-first">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">
            Toll Free IVR
          </h2>
          <p className="text-md md:text-lg text-gray-700 mb-6">
            A Toll-Free IVR with a 1800 number is a customer service solution
            that allows callers to reach your business without incurring any
            charges. The 1800 number is widely recognized and accessible from
            any location within the country, making it easy for customers to
            connect with your business.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            This system combines the convenience of toll-free calling with the
            efficiency of an Interactive Voice Response (IVR) system, automating
            call handling and providing 24/7 service.
          </p>
          <Link href="/ivr/toll-free-ivr">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition duration-300">
              Explore Toll Free IVR
            </button>
          </Link>
        </div>
      </div>

      {/* 10 Digit IVR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mt-16 md:mt-0">
        <div className="justify-center md:flex md:flex-row md:items-center md:justify-center md:order-last">
          <Link href="/ivr/10-digit-ivr">
            <div className="relative">
              <Image
                alt="10 Digit IVR"
                height={400}
                width={400}
                src={ten_digit_ivr}
                className="rounded-lg shadow-lg cursor-pointer"
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black hover:bg-opacity-25 transition duration-300">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white">
                  Explore
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center justify-center mx-5 md:order-first">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">
            10 Digit IVR
          </h2>
          <p className="text-md md:text-lg text-center text-gray-700 mb-6">
            A normal IVR system using a 10-digit mobile number allows businesses
            to automate customer interactions through a standard phone line.
            Unlike toll-free numbers, callers may incur charges based on their
            phone plan when dialing the 10-digit number.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            This type of IVR is typically used by small to medium-sized
            businesses for routing calls, providing automated responses, and
            directing customers to the appropriate department or agent.
          </p>
          <Link href="/ivr/10-digit-ivr">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition duration-300">
              Explore 10 Digit IVR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TypesOfIVR;
