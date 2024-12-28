"use client";
import { useEffect } from "react";
import {
  PhoneIcon,
  MessageCircleIcon,
  PhoneOutgoingIcon,
  TrendingUpIcon,
  HeadsetIcon,
  BarChartIcon,
  CalculatorIcon,
  FileTextIcon,
  DockIcon as DocumentTextIcon,
  HelpCircleIcon,
  CheckCircleIcon,
  PaletteIcon,
  SearchIcon,
  CodeIcon,
  ImageIcon,
  HardDriveIcon,
} from "lucide-react";

const servicesGrouped = {
  "Cloud Telephony": [
    {
      icon: <PhoneIcon className="h-[3rem] w-[3rem] text-[#007bff]" />,
      title: "Click to Call",
      description:
        "Make outbound calls efficiently with one click without manually dialing.",
    },
    {
      icon: <MessageCircleIcon className="h-[3rem] w-[3rem] text-[#00c851]" />,
      title: "WhatsApp API",
      description:
        "Run Sales, Support, & Marketing Conversations on a unified WhatsApp platform.",
    },
    {
      icon: <PhoneOutgoingIcon className="h-[3rem] w-[3rem] text-[#ff9800]" />,
      title: "Outbound Calling",
      description:
        "Make automatic outbound calls and get faster responses with IVR inputs.",
    },
    {
      icon: <HeadsetIcon className="h-[3rem] w-[3rem] text-[#ff5722]" />,
      title: "IVR",
      description:
        "Create custom voice menus and direct callers to the right team with ease.",
    },
    {
      icon: <ImageIcon className="h-[3rem] w-[3rem] text-[#673ab7]" />,
      title: "Bulk Marketing",
      description:
        "Reach large audiences with automated voice calls, SMS, and WhatsApp messages.",
    },
    {
      icon: <BarChartIcon className="h-[3rem] w-[3rem] text-[#4caf50]" />,
      title: "Call Analytics",
      description:
        "Gain insights into customer interactions and agent performance with call analytics.",
    },
  ],
  "Tax Services": [
    {
      icon: <CalculatorIcon className="h-[3rem] w-[3rem] text-[#ff5722]" />,
      title: "Tax Calculation",
      description:
        "Automate tax calculations and ensure accurate deductions across multiple regions.",
    },
    {
      icon: <FileTextIcon className="h-[3rem] w-[3rem] text-[#00bcd4]" />,
      title: "Tax Filing",
      description:
        "File your taxes effortlessly with guided workflows and automated reports.",
    },
    {
      icon: <BarChartIcon className="h-[3rem] w-[3rem] text-[#007bff]" />,
      title: "Audit Reports",
      description:
        "Generate comprehensive audit reports to ensure compliance with tax regulations.",
    },
    {
      icon: <DocumentTextIcon className="h-[3rem] w-[3rem] text-[#ff9800]" />,
      title: "GST Filing",
      description:
        "Streamline the process of filing GST returns with automated solutions.",
    },
    {
      icon: <HelpCircleIcon className="h-[3rem] w-[3rem] text-[#4caf50]" />,
      title: "Tax Consultation",
      description:
        "Receive expert advice on tax planning, compliance, and corporate tax optimization.",
    },
    {
      icon: <CheckCircleIcon className="h-[3rem] w-[3rem] text-[#2196f3]" />,
      title: "Tax Compliance",
      description:
        "Ensure your business complies with the latest tax laws and regulations.",
    },
  ],
  "IT Solutions": [
    {
      icon: <CodeIcon className="h-[3rem] w-[3rem] text-[#ff9800]" />,
      title: "Websites Design & Update",
      description:
        "Transform your online presence with our expert web design and development services.",
    },
    {
      icon: <TrendingUpIcon className="h-[3rem] w-[3rem] text-[#00bcd4]" />,
      title: "Digital Marketing",
      description:
        "Reach new heights with our digital marketing services, including SEO, PPC, and social media.",
    },
    {
      icon: <PaletteIcon className="h-[3rem] w-[3rem] text-[#673ab7]" />,
      title: "Software Design",
      description:
        "Design and develop software that meets your business needs with our expert software design services.",
    },
    {
      icon: <SearchIcon className="h-[3rem] w-[3rem] text-[#4caf50]" />,
      title: "SEO",
      description:
        "Improve your website's visibility with our search engine optimization services.",
    },
    {
      icon: <ImageIcon className="h-[3rem] w-[3rem] text-[#ff5722]" />,
      title: "Graphic Design",
      description:
        "Create visually appealing designs with our expert graphic design services.",
    },
    {
      icon: <HardDriveIcon className="h-[3rem] w-[3rem] text-[#2196f3]" />,
      title: "IT Infrastructure Management",
      description:
        "Monitor and manage your IT infrastructure to ensure seamless business operations.",
    },
  ],
};

export default function ServicesPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".stagger");
    elements.forEach((el, idx) => {
      setTimeout(() => {
        el.classList.add("show");
      }, idx * 100);
    });
  }, []);

  return (
    <div id="services" className="mx-10 md:mx-20  py-12">
      <div className="mx-auto space-y-4 mb-10 text-center">
        <h2 className="inline-block text-2xl text-center md:text-4xl font-semibold bg-[#f8e67e] px-3 py-1 rounded-lg text-[#0d0d0d]">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 text-center dark:text-gray-400">
          Explore a wide range of features that will streamline your sales and
          customer experience management.
        </p>
      </div>

      {Object.entries(servicesGrouped).map(([category, services], index) => (
        <section key={index} className="mb-16 mx-10">
          <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-800 mb-4">
            {category}
          </h2>
          <div className="flex justify-center mb-12">
            <div className={`w-[16rem] h-2 bg-yellow-300`}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="stagger bg-white shadow-lg p-6 rounded-lg hover:bg-gray-50 scale-up"
              >
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xl">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
