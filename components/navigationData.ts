export type NavigationItem = {
  title: string;
  href: string;
  icon: string;
  description: string; // added description property
};

export type NavigationItems = {
  [category: string]: NavigationItem[];
};

export const navigationItems: NavigationItems = {
  "Bulk Marketing": [
    {
      title: "Bulk Voice Call",
      href: "/bulk-voice-call",
      icon: "FaPhone",
      description: "Send personalized voice calls to your customers", // added description
    },
    {
      title: "Bulk WhatsApp",
      href: "/bulk-whatsapp",
      icon: "FaWhatsapp",
      description: "Send personalized WhatsApp messages to your customers", // added description
    },
    {
      title: "Bulk SMS",
      href: "/bulk-sms",
      icon: "FaSms",
      description: "Send personalized SMS messages to your customers", // added description
    },
  ],
  "Call Management": [
    {
      title: "Complete Call Management",
      href: "/complete-call-management",
      icon: "FaCloud",
      description: "Manage all your calls in one place", // added description
    },
  ],
  "IVR": [
    {
      title: "IVR Solutions",
      href: "/ivr",
      icon: "FaRobot",
      description: "Automate your customer interactions with IVR", // added description
    },
  ],
  "Company": [
    {
      title: "About Us",
      href: "/about",
      icon: "FaUserAlt",
      description: "Learn more about our company", // added description
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
      icon: "ShieldPlus",
      description: "Read our privacy policy", // added description
    },
  ],
};