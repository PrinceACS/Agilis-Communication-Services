"use client";
import { useState } from "react";
import HeroSection from "@/components/hero";
import Services from "@/components/company/services";
import Contact from "@/components/company/contact";
import Testimonial from "@/components/company/Testimonial";
import WorkWithUs from "@/components/company/work-wth-us";
import { CTA1 } from "@/components/cta";
import WhyChooseAgilis from "@/components/company/WhyCooseAgilis";
import SolutionByBusiness from "@/components/company/solution-by-buisness";
import OurCustomers from "@/components/company/our-customers";
import SplashScreen from "@/components/splash-screen";

const testimonials = [
  {
    id: 1,
    name: "Tushar",
    role: "Marketing Manager at BrightFuture Corp.",
    content:
      "Agilis Communication Services has transformed our outreach strategy!...",
    avatar: "",
  },
  {
    id: 2,
    name: "Ms Priyanshi",
    role: "Head of Communications at EcoGreen Solutions",
    content:
      "Agilis Communication Services' bulk WhatsApp messaging has revolutionized how we connect...",
    avatar: "",
  },
  {
    id: 3,
    name: "Ms Bhagyalaxmi",
    role: "Operations Director at TechSavvy Inc.",
    content:
      "The IVR and dialer solutions from Agilis have streamlined our customer support processes...",
    avatar: "",
  },
  {
    id: 4,
    name: "Manish Tiwari",
    role: "CEO at FinancePro Group",
    content:
      "Partnering with Agilis for our tax and IT solutions was a game-changer...",
    avatar: "",
  },
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onVideoEnd={() => setShowSplash(false)} />}
      {!showSplash && (
        <div>
          <HeroSection />
          <Services />
          <CTA1 />
          <WhyChooseAgilis />
          <SolutionByBusiness />
          <OurCustomers />
          <WorkWithUs />
          <Testimonial testimonials={testimonials} />
          <Contact />
        </div>
      )}
    </>
  );
}
