import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Phone, LucideSquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogPortal,
  DialogOverlay,
} from "./ui/dialog";

import cta_1 from "@/public/images/cta_1.png";

type CTAProps = {
  message: string;
  phoneNumber: string;
  icon: React.ReactNode;
};

const CTA1 = () => {
  return (
    <div className="flex mx-auto  flex-col md:flex-row items-center justify-center p-10">
      <div className="max-w-[50rem] px-10 md:ml-20 md:justify-center text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 leading-tight">
          Grow Your Business With Us
        </h1>
        {/* <p className=" md:text-lg mb-6 text-gray-600">
          We help you take your business to the next level with tailored
          solutions.
        </p> */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-start">
          <Link
            href="#"
            className="flex items-center w-[12rem] hover:scale-105 justify-center rounded-md bg-primary px-4 py-2 text-lg font-semibold text-foreground transition shadow-md"
          >
            <LucideSquareDashedMousePointer size={20} className="mr-2" />
            Schedule Demo
          </Link>
          <Link
            href="https://wa.me/+919810787931?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-[12rem] hover:scale-105 justify-center rounded-md border-2 bg-primary border-yellow-300 px-4 py-2 text-lg font-semibold text-foreground transition shadow-md"
          >
            <Phone size={20} className="mr-2" />
            Talk to Expert
          </Link>
        </div>
      </div>
      <div className="md:w-[20%] w-[60%] md:h-[20%] md:mr-20 relative">
        <Image
          alt="talk to expert"
          src={cta_1}
          className="rounded-lg object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export { CTA1 };

const CTAButton: React.FC<CTAProps> = ({ message, phoneNumber, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-yellow-400  text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-xl">
      <h2 className="text-2xl font-bold  text-center mb-4">{message}</h2>
      <div className="flex fles-col items-center rounded-lg bg-white">
        <a
          href={`tel:${phoneNumber}`}
          className=" text-[#ff9900] flex items-center justify-center text-center font-semibold py-2 px-4 rounded hover:bg-orange-100 transition-all duration-300 ease-in-out"
        >
          {icon} Call Now: {phoneNumber}
        </a>
      </div>
    </div>
  );
};

export { CTAButton };

const CTAList = () => {
  const phoneNumber = "+91 11 4960 5577";
  const ctaMessages = [
    "Boost Your Outreach Now – Contact Us for Expert Auto Dialer Solutions",
    "Ready to Streamline Your Calls? Get in Touch!",
    "Amplify Your Results with Our Auto Dialer – Call Today!",
    "Maximize Your Reach with Minimal Effort – Speak with Us",
    "Accelerate Your Outbound Calls – Connect with a Specialist Now!",
    "Unlock the Power of Automated Dialing – Call for Professional Assistance",
    "Take Your Call Strategy to the Next Level – Get Started Today!",
    "Optimize Your Call Campaigns with Our Solutions – Contact Us Now",
    "Improve Efficiency and Results – Call Us for Auto Dialer Services",
    "Get a Tailored Auto Dialer Solution – Reach Out for a Consultation",
  ];

  return (
    <div className="space-y-6">
      {ctaMessages.map((message, index) => (
        <CTAButton
          key={index}
          message={message}
          phoneNumber={phoneNumber}
          icon={<Phone size={20} />}
        />
      ))}
    </div>
  );
};

export { CTAList };

export const CTACallToAction = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  return (
    <div className="space-y-6">
      <Button
        className="bg-black border-2 border-amber-400 text-primary-foreground px-4 py-2 rounded-md"
        onClick={openDialog}
      >
        Get Started
      </Button>
      {showDialog && (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogTrigger asChild>
            <button className="bg-yellow-400 text-black text-primary-foreground px-4 py-2 rounded-md">
              Call/WhatsApp to Get Started
            </button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
            <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-4">
              <p className="text-center text-lg">
                Want to get started with our auto dialer solutions? Click on the
                button below to call or WhatsApp us directly.
              </p>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <a
                  href="tel:+919810787931"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/+919810787931"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                >
                  WhatsApp
                </a>
              </div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      )}
    </div>
  );
};
