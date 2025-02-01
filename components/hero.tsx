import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../public/images/hero.png";
import { Button } from "./ui/button";
import { ContactRound, Earth } from "lucide-react";

const HeroSection = () => {
  return (
    <main className="text-gray-900 flex flex-col items-center justify-center gap-5 my-20">
      <section className="relative flex-col-reverse m-10 lg:mt-20 flex md:flex-row items-center justify-between">
        <div
          className="md:w-[50%] justify-center
         text-center md:text-left space-y-4 md:ml-10"
        >
          <h1 className="text-3xl mt-5 text-center font-extrabold md:text-5xl text-gray-900 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Power Your Business with Cloud Telephony Solutions
          </h1>
          <p className="text-xl text-center lg:text-2xl text-gray-800 leading-relaxed">
            Discover unparalleled cloud solutions this year and revolutionize
            your business operations with us!
          </p>
          <div className="flex items-center justify-center md:pb-10">
            <Button size={"lg"} variant={"default"} className="mr-4">
              <Earth size={20} className="mr-2 " />
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button variant="default" className="ml-4" size={"lg"}>
              <ContactRound size={20} className="mr-2" />
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="w-[75%] md:w-[30%] lg:justify-center md:mr-10">
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
