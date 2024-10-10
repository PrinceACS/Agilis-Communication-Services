"use client";
import React, { useState, useEffect } from "react";
import {
  FaDollarSign,
  FaChartLine,
  FaHeadset,
  FaDatabase,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  PhoneCall,
  BarChart2,
  UserCheck,
  Zap,
  Clock,
  ThumbsUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ivr from "@/public/ivr.jpg";
import Specific from "../../../components/ivr/component/specific";
import Image from "next/image";
import Benefits from "@/components/ivr/benifits";
import MarketAnalysis from "@/components/ivr/market-ananlysis";
import TypesOfIVR from "@/components/ivr/types-of-ivr";
import Demo from "@/components/company/demo";

// Custom color theme
const theme = {
  primary: "#FFFFFF", // White (dominant background)
  secondary: "#000000", // Black (for text, borders, and strong contrast)
  accent: "#FFD700", // Gold (highlight color for buttons, icons, or call-to-action elements)
};

const IVRPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll("section");

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - windowHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: theme.primary, color: theme.secondary }}>
      <header
        className="sticky top-0 bg-opacity-90 backdrop-filter backdrop-blur-lg"
        style={{ backgroundColor: theme.primary }}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ color: theme.accent }}>
            IVR Solutions
          </h1>
          <ul className="flex space-x-6">
            {["Overview", "Features", "Benefits", "Pricing", "Contact"].map(
              (item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-accent transition-colors ${
                      activeSection === index + 1 ? "border-b-2" : ""
                    }`}
                    style={{
                      color:
                        activeSection === index + 1
                          ? theme.accent
                          : theme.secondary,
                      borderColor: theme.accent,
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 ">
        {/* <HeroSection /> */}
        {/* <EnhancedHeroSection /> */}
        <OverviewSection />
        <TypesOfIVR />
        <Benefits />
        <MarketAnalysis />

        <FeaturesSection />

        {/* <BenefitsSection /> */}
        <Specific />
        <PricingSection />
        <ContactSection />
      </main>
    </div>
  );
};

const OverviewSection: React.FC = () => (
  <section
    id="overview"
    className="py-14 px-8 lg:px-16 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-3xl relative overflow-hidden"
    style={{
      backgroundColor: theme.secondary,
      color: theme.primary,
    }}
  >
    {/* Background accent for added visual appeal */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-transparent opacity-10 pointer-events-none"></div>

    {/* Section Title */}
    {/* <h2
      className="text-4xl xl:text-5xl font-semibold mb-12 text-center tracking-tight leading-tight"
      style={{ color: theme.primary }}
    >
      What is IVR?
    </h2> */}

    {/* Content grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left column: Textual content */}
      <div>
        <h3
          className="text-2xl lg:text-3xl font-semibold mb-6 leading-snug tracking-tight"
          style={{ color: theme.accent }}
        >
          Interactive Voice Response
        </h3>
        <p className="mb-6 text-lg leading-relaxed">
          IVR is an automated telephony system that interacts with callers,
          gathers information, and routes calls to the appropriate recipients.
          It's a powerful tool for managing high call volumes efficiently and
          providing 24/7 customer service.
        </p>
        <ul className="list-disc list-inside text-lg space-y-3">
          <li>Automate routine inquiries</li>
          <li>Reduce wait times</li>
          <li>Improve customer satisfaction</li>
          <li>Increase operational efficiency</li>
        </ul>
      </div>

      {/* Right column: Image */}
      <div className="relative group hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src={ivr}
          alt="IVR System Overview"
          className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        {/* Decorative shadow for image */}
        <div className="absolute -inset-2 opacity-20 bg-gradient-to-br from-transparent to-black rounded-lg shadow-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>
    </div>
  </section>
);

const FeaturesSection: React.FC = () => (
  <section id="features" className="py-20">
    <h2
      className="text-4xl font-bold mb-12 text-center"
      style={{ color: theme.accent }}
    >
      Key Features
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: (
            <PhoneCall className="h-10 w-10" style={{ color: theme.accent }} />
          ),
          title: "Multi-level IVR",
          description:
            "Create complex call flows with multiple levels of menus and options.",
        },
        {
          icon: (
            <BarChart2 className="h-10 w-10" style={{ color: theme.accent }} />
          ),
          title: "Real-time Analytics",
          description:
            "Monitor call volumes, wait times, and customer interactions in real-time.",
        },
        {
          icon: (
            <UserCheck className="h-10 w-10" style={{ color: theme.accent }} />
          ),
          title: "Call Routing",
          description:
            "Intelligently route calls to the most appropriate agent or department.",
        },
        {
          icon: <Zap className="h-10 w-10" style={{ color: theme.accent }} />,
          title: "Voice Recognition",
          description:
            "Utilize advanced voice recognition for hands-free navigation.",
        },
        {
          icon: <Clock className="h-10 w-10" style={{ color: theme.accent }} />,
          title: "24/7 Availability",
          description:
            "Provide round-the-clock service with automated responses.",
        },
        {
          icon: (
            <ThumbsUp className="h-10 w-10" style={{ color: theme.accent }} />
          ),
          title: "Customizable Greetings",
          description:
            "Create personalized greetings and messages for a branded experience.",
        },
      ].map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </div>
  </section>
);

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
        Flexible Pricing Options
      </h2>
      <div className=" justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg shadow-md p-6 max-w-md mx-auto bg-white"
        >
          <div className="bg-red-500 text-white p-4 rounded-t-lg text-center">
            <h3 className="text-2xl font-semibold">Start with Minimum Price</h3>
            <p className="text-3xl font-bold mt-2">(Best Price Guaranteed)</p>
          </div>
          {/* <div className="bg-gray-50 p-6">
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Incoming</span>
                <span>Unlimited</span>
              </li>
              <li className="flex justify-between">
                <span>Channel(s)</span>
                <span>1 Pair(s)</span>
              </li>
              <li className="flex justify-between">
                <span>User(s)</span>
                <span>1 User(s)</span>
              </li>
            </ul>
          </div> */}
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border rounded-lg shadow-md p-6 max-w-md mx-auto bg-white"
        >
          <div className="bg-red-500 text-white p-4 rounded-t-lg text-center">
            <h3 className="text-xl font-semibold">Growth</h3>
            <p className="text-3xl font-bold mt-2">₹ 2,599/month</p>
          </div>
          {/* <div className="bg-gray-50 p-6">
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Incoming</span>
                <span>Unlimited</span>
              </li>
              <li className="flex justify-between">
                <span>Channel(s)</span>
                <span>2 Pair(s)</span>
              </li>
              <li className="flex justify-between">
                <span>User(s)</span>
                <span>2 User(s)</span>
              </li>
            </ul>
          </div> */}
        {/* </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border rounded-lg shadow-md p-6 max-w-md mx-auto bg-white"
        >
          <div className="bg-red-500 text-white p-4 rounded-t-lg text-center">
            <h3 className="text-xl font-semibold">Professional</h3>
            <p className="text-3xl font-bold mt-2">₹ 4,999/month</p>
          </div> */}
        {/* <div className="bg-gray-50 p-6">
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Incoming</span>
                <span>Unlimited</span>
              </li>
              <li className="flex justify-between">
                <span>Channel(s)</span>
                <span>5 Pair(s)</span>
              </li>
              <li className="flex justify-between">
                <span>User(s)</span>
                <span>5 User(s)</span>
              </li>
            </ul>
          </div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 mb-10">
    {/* <div className="container mx-auto px-4">
      <h2
        className="text-4xl font-bold mb-8 text-center"
        style={{ color: theme.primary }}
      >
        Ready to Get Started?
      </h2>
      <p className="text-xl mb-8 text-center">
        Reach out to us for a personalized IVR solution tailored to your
        business needs.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <a
          href="mailto:info@ivrsolutions.com"
          className="flex items-center text-lg hover:text-accent transition-colors"
        >
          <Mail className="mr-2" /> contact@agilis.com
        </a>
        <a
          href="tel:+919810787931"
          className="flex items-center text-lg hover:text-accent transition-colors"
        >
          <Phone className="mr-2" /> +1 (800) 123-4567
        </a>
      </div>
      <form className="max-w-lg mx-auto mt-12">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 rounded-lg"
          style={{ backgroundColor: theme.primary, color: theme.secondary }}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
          style={{ backgroundColor: theme.accent, color: theme.primary }}
        >
          Request a Demo
        </motion.button>
      </form>
    </div> */}
    <div id="demo">
      <Demo />
    </div>
  </section>
);

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <Card
    className="h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    style={{ backgroundColor: "#fff", borderColor: theme.accent }}
  >
    <CardHeader className="flex items-center space-x-4">
      <div className="flex items-center justify-center w-14 h-14 bg-black p-2 rounded-full text-white">
        {icon}
      </div>
      <CardTitle className="text-2xl font-bold" style={{ color: theme.accent }}>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-lg">{description}</p>
    </CardContent>
  </Card>
);

// const BenefitCard: React.FC<{ title: string; description: string }> = ({
//   title,
//   description,
// }) => (
//   <Card
//     className="h-full hover:shadow-lg transition-shadow duration-300"
//     style={{ backgroundColor: theme.secondary, borderColor: theme.accent }}
//   >
//     <CardHeader>
//       <CardTitle className="text-xl font-bold" style={{ color: theme.primary }}>
//         {title}
//       </CardTitle>
//     </CardHeader>
//     <CardContent>
//       <p style={{ color: theme.primary }}>{description}</p>
//     </CardContent>
//   </Card>
// );

// const PricingCard: React.FC<{
//   title: string;
//   price: string;
//   features: string[];
// }> = ({ title, price, features }) => (
//   <Card
//     className="h-full hover:shadow-lg transition-shadow duration-300"
//     style={{ backgroundColor: theme.primary, borderColor: theme.accent }}
//   >
//     <CardHeader>
//       <CardTitle className="text-xl font-bold" style={{ color: theme.accent }}>
//         {title}
//       </CardTitle>
//       <p className="text-2xl font-bold mt-2" style={{ color: theme.secondary }}>
//         {price}
//       </p>
//     </CardHeader>
//     <CardContent>
//       <ul className="space-y-2">
//         {features.map((feature, index) => (
//           <li
//             key={index}
//             className="flex items-center"
//             style={{ color: theme.secondary }}
//           >
//             <ThumbsUp
//               className="h-5 w-5 mr-2"
//               style={{ color: theme.accent }}
//             />
//             {feature}
//           </li>
//         ))}
//       </ul>
//     </CardContent>
//   </Card>
// );

export default IVRPage;
