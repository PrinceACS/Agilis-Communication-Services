import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../public/images/hero.png";
import { Button } from "./ui/button";
import { ContactRound, SearchIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <main className="text-gray-900 bg-gray-100 flex flex-col items-center justify-center gap-5 mt-20">
      <section className="relative m-16 lg:mt-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-[50%] lg:mr-14 text-center md:text-left space-y-6 md:ml-10">
          <h1 className="text-3xl font-extrabold md:text-5xl text-gray-900 leading-tight">
            Power Your Business with{" "}
            <span className="text-transparent text-nowrap bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 animate-shimmer">
              Cloud Telephony Solutions
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
            Discover unparalleled cloud solutions this year and revolutionize
            your business operations with us!
          </p>
          <div className="flex md:pb-10 justify-center md:justify-start flex-col sm:flex-row gap-4">
            <Button size={"lg"} variant={"default"}>
              <SearchIcon size={20} className="mr-2" />
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button variant="default" size={"lg"}>
              <ContactRound size={20} className="mr-2" />
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="w-[75%] md:mt-0 my-10 md:w-[30%] lg:justify-center md:mr-10">
          <Image
            src={hero}
            alt="Hero Image"
            className="w-full object-cover rounded-xl border-2 border-yellow-500 shadow-lg"
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
