import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "../public/images/hero.png";
import { Button } from "./ui/button";
import { ContactRound, Earth } from "lucide-react";

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 my-20 text-gray-900 bg-gradient-to-b from-white to-gray-100">
      <section className="relative flex flex-col-reverse items-center justify-between m-10 lg:mt-20 md:flex-row">
        <div className="md:w-[50%] text-center md:text-left space-y-6 md:ml-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Power Your Business with Cloud Telephony Solutions
          </h1>
          <p className="text-lg md:text-2xl text-gray-800 leading-relaxed">
            Discover unparalleled cloud solutions this year and revolutionize
            your business operations with us!
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <Button size="lg" variant="default" className="flex items-center">
              <Earth size={20} className="mr-2" />
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="default" className="flex items-center">
              <ContactRound size={20} className="mr-2" />
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="w-[75%] md:w-[30%] lg:justify-center md:mr-10">
          <div className="relative">
            <Image
              src={hero}
              alt="Hero Image"
              className="w-full object-cover rounded-xl border-2 shadow-lg border-animation"
            />
            <style jsx>{`
              .border-animation {
                border-width: 4px;
                border-style: solid;
                border-radius: 1rem;
                border-image-slice: 1;
                border-image-source: linear-gradient(
                  45deg,
                  #f8e67e,
                  #f39c12,
                  #e74c3c,
                  #8e44ad,
                  #3498db,
                  #1abc9c,
                  #2ecc71,
                  #f8e67e
                );
                animation: gradientBorder 5s linear infinite;
              }

              @keyframes gradientBorder {
                0% {
                  border-image-source: linear-gradient(
                    45deg,
                    #f8e67e,
                    #f39c12,
                    #e74c3c,
                    #8e44ad,
                    #3498db,
                    #1abc9c,
                    #2ecc71,
                    #f8e67e
                  );
                }
                100% {
                  border-image-source: linear-gradient(
                    405deg,
                    #f8e67e,
                    #f39c12,
                    #e74c3c,
                    #8e44ad,
                    #3498db,
                    #1abc9c,
                    #2ecc71,
                    #f8e67e
                  );
                }
              }
            `}</style>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
