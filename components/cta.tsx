import Image from "next/image";
import React from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogPortal,
  DialogOverlay,
} from "./ui/dialog";

import cta_1 from "@/public/cta_1.jpg";

type CTAProps = {
  message: string;
  phoneNumber: string;
  icon: React.ReactNode;
};

const CTA1 = () => {
  return (
    <div className="flex mx-20 flex-col md:flex-row items-center justify-between gap-10 mb-10 ">
      <div className="max-w-[60rem] md:ml-20 md:justify-center text-center md:text-left">
        <h1 className="text-3xl font-bold mb-5 text-gray-800 leading-tight">
          Grow Your Business With Us
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          We help you take your business to the next level with tailored
          solutions.
        </p>
        <div className="flex flex-row md:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="#"
            className="flex items-center w-[12rem] justify-center rounded-md bg-[#d2b71d] px-4 py-2 text-lg font-semibold text-black transition hover:bg-[#c0a030] shadow-lg"
          >
            Shedule Demo
          </Link>
          <Link
            href="#"
            className="flex items-center w-[12rem] justify-center rounded-md border-2 border-[#FFD700] px-4 py-2 text-lg font-semibold text-[#FFD700] transition hover:bg-[#d4af37] hover:text-black shadow-lg"
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
          className="rounded-lg object-contain "
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
      <button
        className="bg-black border-2 border-amber-400 text-primary-foreground px-4 py-2 rounded-md"
        onClick={openDialog}
      >
        Get Started
      </button>
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
                  href="https://wa.me/917004960557"
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
