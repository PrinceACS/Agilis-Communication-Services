"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import republicday from "../public/images/repbulicday.png";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <main className="text-gray-900 flex flex-col items-center justify-center gap-5 mt-20 bg-gradient-to-b from-orange-200 via-white to-green-200">
      <section className="relative mt-14 lg:mt-20 mx-10 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-[60%] lg:mr-14 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-neutral-500 to-green-600 mb-6 animate-shimmer">
            Happy Republic Day!
          </h1>
          <h1 className="text-3xl font-extrabold mb-6 md:text-4xl lg:text-5xl text-gray-800 leading-tight">
            Power Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-green-600 mb-6 animate-shimmer">
              Cloud Telephony Solutions
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
            Discover unparalleled cloud solutions this year and revolutionize
            your business operations with us!
          </p>
          <div className="flex md:pb-10 justify-center md:justify-start flex-col sm:flex-row gap-4">
            <Button
              size={"lg"}
              variant={"default"}
              className="bg-gradient-to-r from-orange-500 to-green-500 text-white hover:from-orange-600 hover:to-green-600"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button
              variant="default"
              size={"lg"}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:mt-0 my-10 md:w-[30%] lg:justify-center bg-white rounded-2xl shadow-lg">
          <Image
            src={republicday}
            alt="Republic Day Image"
            className="w-full object-cover rounded-2xl border-4 border-transparent bg-gradient-to-r from-orange-500 via-white to-green-500"
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
