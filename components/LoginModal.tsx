import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import Link from "next/link";

const LoginModal = () => {
  return (
    <DialogContent className="sm:max-w-[425px] bg-white">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-900 ">
          Choose Your Service
        </DialogTitle>
        <DialogDescription className="text-gray-900 text-lg font-bold">
          Select the service you want to log in to:
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3 mt-4">
        {/* Dialer and IVR */}
        <Link
          href="http://calls.agiliscommunications.com/"
          target="_blank"
          className="bg-[#6495ED] hover:bg-[#4682B4] text-white py-2 rounded text-center"
        >
          Dialer and IVR
        </Link>

        {/* Bulk Voice Call */}
        <Link
          href="http://obd.agiliscommunications.com/OBDSEA/user"
          target="_blank"
          className="bg-[#32CD32] hover:bg-[#2E8B57] text-white py-2 rounded text-center"
        >
          Bulk Voice Call
        </Link>

        {/* Bulk WhatsApp */}
        <Link
          href="https://www.smswt.in/sign-in"
          target="_blank"
          className="bg-[#34A85A] hover:bg-[#228B22] text-white py-2 rounded text-center"
        >
          Bulk WhatsApp
        </Link>
        {/* Bulk SMS */}
        <Link
          href="http://sirfsms.com/sms/login.aspx"
          target="_blank"
          className="bg-[#FFD700] hover:bg-[#FFA07A] text-white py-2 rounded text-center"
        >
          Bulk SMS
        </Link>
      </div>
      <div className="mt-4">
        <p className="text-gray-800 text-sm text-center">
          <span className="text-red-400">
            Don&apos;t have an account? Call us at{" "}
          </span>
          <a href="tel:9810787931" className="text-blue-500">
            +91 9810787931
          </a>{" "}
          or fill in your number to get a call from us.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const number = (
              e.currentTarget.elements.namedItem("number") as HTMLInputElement
            ).value;
            if (number) {
              window.open(
                `https://wa.me/+919810787931?text=Hello%20I%20am%20interested%20in%20your%20services%20My%20number%20is%20${number}`,
                "_blank"
              );
            }
          }}
          className="flex flex-col gap-2 mt-4"
        >
          <input
            type="tel"
            name="number"
            className="py-2 px-4 rounded border border-gray-300"
            placeholder="Enter your phone number"
          />
          <button
            type="submit"
            className="bg-green-700 text-white py-2 rounded text-center w-full"
          >
            Get a Call from Us
          </button>
        </form>
      </div>
    </DialogContent>
  );
};

export default LoginModal;
