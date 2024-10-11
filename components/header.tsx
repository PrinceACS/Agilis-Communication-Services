"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import logo from "../public/acs-logo-removebg-preview.png";
import Navbar from "./navbar"; // Your existing full navbar for larger devices
import MobileNavbar from "./MobileNavbar";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between sticky z-50 w-full top-0 sm:px-10 items-center px-4 md:px-20 py-3 bg-[#000000] shadow-md">
      <Link href={"/"} className="text-center justify-center items-center">
        <div className="ml-12">
          <Image src={logo} alt="ACS Logo" width={100} height={100} />
        </div>
        <div className="text-white text-sm text-center">
          Agilis Communication Service
        </div>
      </Link>

      {/* Full Navbar for large devices */}
      <div className="hidden lg:flex items-center">
        <Navbar />
      </div>

      <div className="flex gap-x-4">
        {/* Call to Action (Login/Sign Up) */}
        <div className="hidden sm:flex space-x-4">
          {/* Use shadcn Dialog component */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-[#FFD700] hover:bg-[#f8db5a] focus:ring-4 focus:ring-yellow-400 text-[#000000] px-4 py-2 rounded-md transition-all duration-300 ease-in-out font-semibold">
                Login
              </button>
            </DialogTrigger>
            <LoginModal />
          </Dialog>
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
          <div className="absolute pb-5 z-10  top-[4.5rem] left-0 w-full bg-[#000000] text-white">
            <MobileNavbar />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
