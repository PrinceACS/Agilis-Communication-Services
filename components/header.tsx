"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../public/images/acs-logo.png";
import Navbar from "./navbar"; // Your existing full navbar for larger devices
import MobileNavbar from "./MobileNavbar";
import Login from "./login";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }} // Delay to sync with splash screen
      className="fixed top-0 left-0 z-50 w-full bg-opacity-95 bg-black shadow-md backdrop-blur-md"
    >
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
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute items-center pb-5 z-10 top-[4.7rem] left-0 w-full bg-gradient-to-b from-black to-gray-800 text-white"
              >
                <MobileNavbar />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
