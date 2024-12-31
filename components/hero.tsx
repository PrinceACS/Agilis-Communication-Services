"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import hero from "../public/images/hero.jpg";
import NewYearConfetti from "./newyear-confetti";

const HeroSection = () => {
  return (
    <main className="text-gray-900 flex flex-col items-center justify-center gap-5 mt-20 mb-10 bg-gradient-to-b from-gray-100 via-white to-gray-200">
      <NewYearConfetti />
      <section className="relative mt-14 lg:mt-20 mx-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-[60%] lg:mr-14 text-center md:justify-start space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-600 mb-6 animate-shimmer">
            Welcome to 2025!
          </h1>
          <h1 className="text-3xl font-extrabold mb-6 md:text-4xl lg:text-5xl text-gray-800 leading-tight">
            Power Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-600 mb-6 animate-shimmer">
              Cloud Telephony Solutions
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-center text-gray-800 leading-relaxed">
            Discover unparalleled cloud solutions this year and revolutionize
            your business operations with us!
          </p>
          <div className="flex md:pb-10 text-center justify-center lg:ml-[12rem] flex-col sm:flex-row gap-4 sm:justify-start">
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-md bg-[#d2b71d] px-6 py-3 text-base font-medium text-[#0d0d0d] transition hover:bg-[#c0a030] shadow-lg transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              href="#contact"
              className="inline-flex bg-gray-900 items-center justify-center rounded-md border border-[#FFD700] px-8 py-3 text-base font-medium text-[#FFD700] transition hover:bg-[#d4af37] hover:text-[#0d0d0d] shadow-lg transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:mt-0 my-10 md:w-[30%] lg:justify-center bg-white rounded-2xl shadow-lg">
          <Image
            src={hero}
            alt="Hero Image"
            className="w-full h object-cover rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
