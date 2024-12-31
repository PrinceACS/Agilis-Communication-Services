"use client";
import { Stars } from "lucide-react";

export default function NewYearOverlay() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#F8E67E] to-[#FF4500] text-white py-3 px-4">
      <div className="max-w-7xl text-center flex items-center justify-between">
        <div className="flex items-center text-center space-x-2">
          <Stars className="h-5 w-5 text-[#ff962ee0] animate-pulse" />
          <p className="text-sm text-bold text-center md:text-base font-medium">
            Happy New Year 2025! 🎉 Start your year with our special offers
          </p>
        </div>
      </div>
    </div>
  );
}
