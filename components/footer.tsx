import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import acs_logo from "@/public/acs-logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-start -ml-1">
            <Image
              src={acs_logo}
              alt="Agilis Communication Services"
              width={120}
              height={50}
            />
          </div>
          <h3 className="text-lg font-semibold text-white">
            Agilis Communication
          </h3>
          <p className="mt-4 text-gray-400">
            Empowering businesses with innovative communication solutions to
            thrive in the digital age.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="hover:text-[#d4af37]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#d4af37]">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#d4af37]">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#d4af37]">
                Contact Us
              </a>
            </li>
            {/* <li>
              <a href="/careers" className="hover:text-[#d4af37]">
                Careers
              </a>
            </li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full relative">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-[#d4af37] mr-2" />
              <span>+91 9810787931</span>
            </li>
            <li className="flex items-center">
              <MailIcon className="h-5 w-5 text-[#d4af37] mr-2" />
              <span>Info@agiliscommunications.com</span>
            </li>
            <li className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-[#d4af37] mr-2" />
              <span>
                Office No 206, EMCA House, 23, Ansari Rd
                <br />
                Daryaganj, Delhi, 110002
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-700 mt-5 pt-5 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <div className="flex mx-10">
          {/* <a href="https://facebook.com" className="hover:text-[#d4af37]">
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" className="hover:text-[#d4af37]">
            <FaTwitter className="h-6 w-6" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/agilis-communication-services-822a8a320/"
            className="hover:text-[#d4af37]"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
          {/* <a href="https://instagram.com" className="hover:text-[#d4af37]">
            <FaInstagram className="h-6 w-6" />
          </a> */}
        </div>
        <p className="mt-2 text-sm mr-5 md:mt-0">
          &copy; 2024 Agilis Communication. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
