import { useState } from "react"; // To handle toggle state

// Sample data imports (or you can use actual imports)
import { FaPhone, FaWhatsapp, FaSms, FaCloud, FaRobot } from "react-icons/fa";
import Login from "./login";

// Accordion component for each category
const Accordion = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string; icon: React.ReactNode }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-600">
      <button
        className="w-full flex justify-between items-center py-3 px-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-gray-900 text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="pl-6 pb-3">
          {items.map((item) => (
            <a
              href={item.href}
              key={item.title}
              className="py-1 flex items-center space-x-2"
            >
              {item.icon}
              <span className="text-md text-gray-900">{item.title}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// Main MenuMobile component
const MobileNavbar = () => {
  // Data structure
  const bulk_marketing = [
    {
      title: "Bulk Voice Call",
      href: "/bulk-voice-call",
      icon: <FaPhone className="h-5 w-5 text-[#f8e67e]" />,
    },
    {
      title: "Bulk WhatsApp",
      href: "/bulk-whatsapp",
      icon: <FaWhatsapp className="h-5 w-5 text-[#f8e67e]" />,
    },
    {
      title: "Bulk SMS",
      href: "/bulk-sms",
      icon: <FaSms className="h-5 w-5 text-[#f8e67e]" />,
    },
  ];

  const call_management = [
    // {
    //   title: "Click To Call",
    //   href: "/click-to-call",
    //   icon: <FaPhone className="h-5 w-5 text-[#f8e67e]" />,
    // },
    // {
    //   title: "Call Masking",
    //   href: "/call-masking",
    //   icon: <FaWhatsapp className="h-5 w-5 text-[#f8e67e]" />,
    // },
    // {
    //   title: "Dialer",
    //   href: "/dialer",
    //   icon: <MdOutlineContactPhone className="h-5 w-5 text-[#f8e67e]" />,
    // },
    {
      title: "Complete Calling Solutions",
      href: "/complete-call-management",
      icon: <FaCloud className="h-5 w-5 text-[#f8e67e]" />,
    },
    // {
    //   title: "Call Tracking",
    //   href: "/call-tracking",
    //   icon: <FaCloud className="h-5 w-5 text-[#f8e67e]" />,
    // },
    // {
    //   title: "Call Reports",
    //   href: "/call-reports",
    //   icon: <FaRobot className="h-5 w-5 text-[#f8e67e]" />,
    // },
  ];

  const ivr = [
    {
      title: "IVR",
      href: "/ivr",
      icon: <FaRobot className="h-5 w-5 text-[#f8e67e]" />,
    },
    // {
    //   title: "10 Digit IVR",
    //   href: "/ivr",
    //   icon: <FaPhone className="h-5 w-5 text-[#f8e67e]" />,
    // },
    // {
    //   title: "Toll Free IVR",
    //   href: "/ivr",
    //   icon: <FaPhone className="h-5 w-5 text-[#f8e67e]" />,
    // },
  ];

  // const other_services = [
  //   {
  //     title: "AI Powered Solutions",
  //     href: "/ai-solutions",
  //     icon: <FaRobot className="h-5 w-5 text-[#f8e67e]" />,
  //   },
  //   {
  //     title: "CRM Integration",
  //     href: "/crm-integration",
  //     icon: <FiSettings className="h-5 w-5 text-[#f8e67e]" />,
  //   },
  //   {
  //     title: "Customized Solution",
  //     href: "/customized-solution",
  //     icon: <FaSms className="h-5 w-5 text-[#f8e67e]" />,
  //   },
  //   {
  //     title: "API Integration",
  //     href: "/api-integration",
  //     icon: <FaCloud className="h-5 w-5 text-[#f8e67e]" />,
  //   },
  // ];

  // const services = [
  //   {
  //     title: "CRM Integration",
  //     href: "/crm-integration",
  //     icon: <FiSettings className="h-5 w-5 text-[#f8e67e]" />,
  //   },
  //   {
  //     title: "Call Tracking",
  //     href: "/call-tracking",
  //     icon: <MdOutlineContactPhone className="h-5 w-5 text-[#f8e67e]" />,
  //   },
  //   {
  //     title: "AI Powered Solutions",
  //     href: "/ai-solutions",
  //     icon: <FaRobot className="h-5 w-5 text-[#f8e67e]" />,
  //   },
  // ];

  return (
    <nav className="w-full h-auto max-w-md mx-auto mt-2 items-center bg-white rounded-lg shadow-lg">
      <Accordion title="Bulk Marketing" items={bulk_marketing} />
      <Accordion title="Call Management" items={call_management} />
      <Accordion title="IVR" items={ivr} />
      <div className="border-t border-gray-600 p-2">
        <Login />
      </div>

      {/* <Accordion title="Other Services" items={other_services} /> */}
      {/* <Accordion title="Services" items={services} /> */}
    </nav>
  );
};

export default MobileNavbar;
