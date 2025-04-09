"use client";
import { useState } from "react";
import Hero from "@/components/hero";
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
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onVideoEnd={() => setShowSplash(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <Services />
            <CTA1 />
            <WhyChooseAgilis />
            <SolutionByBusiness />
            <OurCustomers />
            <WorkWithUs />
            <Testimonial testimonials={testimonials} />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
