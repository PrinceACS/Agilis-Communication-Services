"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../public/images/acs-logo.png";
import Navbar from "./navbar";
import MobileNavbar from "./MobileNavbar";
import Login from "./login";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-opacity-95 bg-black/90 shadow-md backdrop-blur-md">
      <div className="flex justify-between items-center px-5 md:px-20 py-4">
        <Link
          id="acs-header-logo"
          href={"/"}
          className="flex flex-col justify-start space-y-1 md:space-y-0"
        >
          <div className="justify-start">
            <Image
              src={logo}
              alt="ACS Logo"
              width={80}
              height={80}
              className="transition-all duration-1000"
            />
          </div>
          <div className="text-white text-center text-sm">
            Agilis Communication Service
          </div>
        </Link>
        <div className="hidden lg:flex items-center">
          <Navbar />
        </div>

        <div className="flex gap-x-4">
          <div className="hidden md:flex">
            <Login />
          </div>

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

          {isMobileMenuOpen && (
            <div className="absolute items-center pb-5 top-[6.3rem] left-0 w-full bg-black/90 text-white">
              <MobileNavbar />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
