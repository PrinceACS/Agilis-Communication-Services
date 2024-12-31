"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../public/acs-logo-removebg-preview.png";
import Navbar from "./navbar"; // Your existing full navbar for larger devices
import MobileNavbar from "./MobileNavbar";
import Login from "./login";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 shadow-md backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-20 py-4 mt-10 md:mt-8 ">
        <Link
          href={"/"}
          className="flex flex-col items-center md:items-center space-y-1 md:space-y-0 md:space-x-4"
        >
          <div className="md:ml-6">
            <Image
              src={logo}
              alt="ACS Logo"
              width={70}
              height={50}
              className="md:w-16 md:h-11"
            />
          </div>
          <div className="text-white text-center text-xs">
            Agilis Communication Service
          </div>
        </Link>

        {/* Full Navbar for large devices */}
        <div className="hidden lg:flex items-center">
          <Navbar />
        </div>

        <div className="flex gap-x-4">
          {/* Call to Action (Login/Sign Up) */}
          <div className="hidden md:flex">
            <Login />
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="flex md:hidden items-center">
            <button
              className="text-[#FFD700] text-2xl"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes />
              ) : (
                <FaBars className="text-2xl h-8 w-8" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute items-center pb-5 z-10 top-[4.7rem] left-0 w-full bg-gradient-to-b from-black to-gray-800 text-white">
              <MobileNavbar />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
