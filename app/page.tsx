import HeroSection from "@/components/hero";
import Services from "@/components/company/services";
import Contact from "@/components/company/contact";
import Testimonial from "@/components/company/Testimonial";
import WorkWithUs from "@/components/company/work-wth-us";
import { CTA1 } from "@/components/cta";
import WhyChooseAgilis from "@/components/company/WhyCooseAgilis";
import SolutionByBusiness from "@/components/company/solution-by-buisness";
import OurCustomers from "@/components/company/our-customers";
import NewYearOverlay from "@/components/newyear-overlays";

const testimonials = [
  {
    id: 1,
    name: "Tushar",
    role: "Marketing Manager at BrightFuture Corp.",
    content:
      "Agilis Communication Services has transformed our outreach strategy! Their bulk voice call solution has enabled us to connect with thousands of clients effortlessly. The call quality is outstanding, and we've seen a significant boost in engagement. We couldn't be happier with the results!",
    avatar: "",
  },
  {
    id: 2,
    name: " Ms Priyanshi",
    role: "Head of Communications at EcoGreen Solutions",
    content:
      "Agilis Communication Services' bulk WhatsApp messaging has revolutionized how we connect with our audience. We can easily send updates, promotions, and important announcements directly to our clients’ phones. The engagement has soared, making it an essential part of our communication strategy!",
    avatar: "",
  },
  {
    id: 3,
    name: "Ms Bhagyalaxmi",
    role: "Operations Director at TechSavvy Inc.",
    content:
      "The IVR and dialer solutions from Agilis have streamlined our customer support processes. Our clients appreciate the intuitive navigation of the IVR, and the automated dialer has reduced our response times remarkably. The improvement in customer satisfaction is evident, and we’re thrilled with the support we've received!",
    avatar: "",
  },
  {
    id: 4,
    name: "Manish Tiwari",
    role: "CEO at FinancePro Group",
    content:
      "Partnering with Agilis for our tax and IT solutions was a game-changer. Their deep expertise in tax regulations has saved us both time and money, while their IT services have streamlined our operations. The team is professional and responsive, making them an invaluable partner for our business!",
    avatar: "",
  },
];

export default function Home() {
  return (
    <div>
      <NewYearOverlay />
      <HeroSection />
      <Services />
      <CTA1 />
      <WhyChooseAgilis />
      <SolutionByBusiness />
      <OurCustomers />
      <WorkWithUs />
      {/* <About /> */}
      <Testimonial testimonials={testimonials} />
      <Contact />
    </div>
  );
}
