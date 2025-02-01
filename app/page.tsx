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
import { testimonials } from "@/constants/data";

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
