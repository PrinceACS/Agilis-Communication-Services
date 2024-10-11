import HeroSection from "@/components/hero";
import Services from "@/components/company/services";
import Contact from "@/components/company/contact";
import Testimonial from "@/components/company/Testimonial";
import WorkWithUs from "@/components/company/work-wth-us";
import { CTA1 } from "@/components/cta";
import WhyChooseAgilis from "@/components/company/WhyCooseAgilis";
import SolutionByBusiness from "@/components/company/solution-by-buisness";
import OurCustomers from "@/components/company/our-customers";

export default function Home() {
  return (
    <div className=" items-center justify-center min-h-screen font-[var(--font-geist-sans)]">
      <HeroSection />
      <Services />
      <CTA1 />
      <WhyChooseAgilis />
      <SolutionByBusiness />
      <OurCustomers />
      <WorkWithUs />
      {/* <About /> */}
      <Testimonial />
      <Contact />
    </div>
  );
}
