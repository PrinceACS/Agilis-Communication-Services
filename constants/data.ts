import { PhoneIcon, MessageCircleIcon,  PhoneOutgoingIcon, HeadsetIcon, ImageIcon, DockIcon, CalculatorIcon, FileTextIcon, BarChartIcon, HelpCircleIcon, CheckCircleIcon, CodeIcon, TrendingUpIcon, PaletteIcon, SearchIcon, HardDriveIcon, Icon } from "lucide-react"
import { FaEnvelopeOpenText, FaCogs, FaRobot, FaChartLine, FaListAlt, FaHeadset } from "react-icons/fa";

interface ServicesGroup {
    [key: string]: {
        className : string;
        icon: typeof Icon;
        title: string;
        description: string;
      }[];
    }

export const SERVICES_GROUPED : ServicesGroup = {
    "Cloud Telephony": [
      {
        className : "h-[3rem] w-[3rem] text-[#007bff]",
        icon: PhoneIcon,
        title: "Click to Call",
        description:
          "Make outbound calls efficiently with one click without manually dialing.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#00c851]",
        icon: MessageCircleIcon,
        title: "WhatsApp API",
        description:
          "Run Sales, Support, & Marketing Conversations on a unified WhatsApp platform.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#ff9800]",
        icon: PhoneOutgoingIcon,
        title: "Outbound Calling",
        description:
          "Make automatic outbound calls and get faster responses with IVR inputs.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#ff5722]",
        icon: HeadsetIcon,
        title: "IVR",
        description:
          "Create custom voice menus and direct callers to the right team with ease.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#673ab7]",
        icon: ImageIcon,
        title: "Bulk Marketing",
        description:
          "Reach large audiences with automated voice calls, SMS, and WhatsApp messages.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#4caf50]",
        icon: BarChartIcon,
        title: "Call Analytics",
        description:
          "Gain insights into customer interactions and agent performance with call analytics.",
      },
    ],
    "Tax Services": [
      {
        className : "h-[3rem] w-[3rem] text-[#ff5722]",
        icon: CalculatorIcon,
        title: "Tax Calculation",
        description:
          "Automate tax calculations and ensure accurate deductions across multiple regions.",
      },
      {
         className : "h-[3rem] w-[3rem] text-[#00bcd4]",
        icon: FileTextIcon,
        title: "Tax Filing",
        description:
          "File your taxes effortlessly with guided workflows and automated reports.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#007bff]",
        icon: BarChartIcon,
        title: "Audit Reports",
        description:
          "Generate comprehensive audit reports to ensure compliance with tax regulations.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#ff9800]",
        icon: DockIcon,
        title: "GST Filing",
        description:
          "Streamline the process of filing GST returns with automated solutions.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#4caf50]",
        icon: HelpCircleIcon,
        title: "Tax Consultation",
        description:
          "Receive expert advice on tax planning, compliance, and corporate tax optimization.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#2196f3]",
        icon: CheckCircleIcon,
        title: "Tax Compliance",
        description:
          "Ensure your business complies with the latest tax laws and regulations.",
      },
    ],
    "IT Solutions": [
      {
         className : "h-[3rem] w-[3rem] text-[#ff9800]",
        icon: CodeIcon,
        title: "Websites Design & Update",
        description:
          "Transform your online presence with our expert web design and development services.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#00bcd4]" ,
        icon: TrendingUpIcon,
        title: "Digital Marketing",
        description:
          "Reach new heights with our digital marketing services, including SEO, PPC, and social media.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#673ab7]" ,
        icon: PaletteIcon,
        title: "Software Design",
        description:
          "Design and develop software that meets your business needs with our expert software design services.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#4caf50]",
        icon: SearchIcon,
        title: "SEO",
        description:
          "Improve your website's visibility with our search engine optimization services.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#ff5722]",
        icon: ImageIcon,
        title: "Graphic Design",
        description:
          "Create visually appealing designs with our expert graphic design services.",
      },
      {
        className : "h-[3rem] w-[3rem] text-[#2196f3]" ,
        icon: HardDriveIcon,
        title: "IT Infrastructure Management",
        description:
          "Monitor and manage your IT infrastructure to ensure seamless business operations.",
      },
    ],
  };


 export  const features = [
    {
      icon: FaEnvelopeOpenText,
      title: "Personalized SMS Campaigns",
      description:
        "Easily send personalized messages to customers using their name or other details from your CRM.",
    },
    {
      icon: FaCogs,
      title: "Automated SMS Scheduling",
      description:
        "Set up automated campaigns to send messages at optimal times based on customer engagement data.",
    },
    {
      icon: FaRobot,
      title: "Smart Segmentation",
      description:
        "Segment your audience based on preferences, demographics, or behaviors to send targeted SMS campaigns.",
    },
    {
      icon: FaChartLine,
      title: "Real-Time Analytics",
      description:
        "Track SMS delivery rates, open rates, and customer responses in real-time to optimize campaign performance.",
    },
    {
      icon: FaListAlt,
      title: "Compliance Management",
      description:
        "Easily manage opt-out requests and ensure compliance with regulations like GDPR and TCPA.",
    },
    {
      icon: FaHeadset,
      title: "Customer Support Integration",
      description:
        "Automatically route SMS replies to your support team for immediate follow-up and personalized customer service.",
    },
  ];

  export const benefits = [
    {
      title: "Instant Communication",
      description:
        "Reach your customers instantly through SMS, with messages typically opened within minutes of receipt.",
    },
    {
      title: "High Open Rates",
      description:
        "SMS boasts one of the highest open rates of any marketing channel, ensuring your message is seen by most recipients.",
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "Bulk SMS campaigns allow you to reach a large audience with minimal investment, offering a high return on marketing spend.",
    },
    {
      title: "Personalized Engagement",
      description:
        "Easily personalize each message to create a more tailored experience for your audience.",
    },
    {
      title: "Two-Way Communication",
      description:
        "Enable customers to reply to SMS campaigns for enhanced interaction, customer support, or feedback.",
    },
    {
      title: "Real-Time Results",
      description:
        "Monitor the effectiveness of your campaigns in real-time, allowing for quick adjustments to improve performance.",
    },
  ];

  export const faqItems = [
    {
      question: "How does Bulk SMS Marketing work?",
      answer:
        "Bulk SMS Marketing allows you to send large volumes of SMS messages to a group of customers or prospects simultaneously, promoting products, services, or events in a fast and cost-effective way.",
    },
    {
      question: "Can I personalize SMS messages?",
      answer:
        "Yes, you can easily personalize each SMS by including variables like the recipient's name, location, or other details pulled from your CRM.",
    },
    {
      question: "Is SMS marketing compliant with regulations?",
      answer:
        "Yes, our platform ensures that all messages comply with regulations such as GDPR and TCPA, and we provide tools to manage opt-outs and maintain a clean subscriber list.",
    },
    {
      question: "What is the benefit of using SMS over email?",
      answer:
        "SMS offers higher open rates compared to email, making it a great tool for time-sensitive promotions or updates. It's also more direct and personal.",
    },
  ];