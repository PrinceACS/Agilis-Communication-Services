import { FaCloud, FaRobot, FaSms, FaPhone } from "react-icons/fa";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/company/contact";
import Image from "next/image";
import crm from "@/public/svg/hello.svg";

export default function CRMPage() {
  const services = [
    {
      title: "Zoho CRM",
      description:
        "Automate your sales, marketing & customer support activities with Zoho CRM.",
      icon: <FaCloud className="h-8 w-8" />,
    },
    {
      title: "Salesforce",
      description:
        "Unlock new business opportunities with Salesforce CRM integration.",
      icon: <FaRobot className="h-8 w-8" />,
    },
    {
      title: "Hubspot",
      description:
        "Transform your sales and marketing with Hubspot CRM integration.",
      icon: <FaSms className="h-8 w-8" />,
    },
    {
      title: "Freshdesk",
      description:
        "Deliver exceptional customer service with Freshdesk CRM integration.",
      icon: <FaPhone className="h-8 w-8" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-16 mx-10">
      <h1 className="text-4xl font-bold tracking-wide">
        Customer Relationship Management (CRM)
      </h1>
      <p className="text-lg text-gray-500">
        Manage your customer relationships efficiently with our CRM integration
        services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{service.description}</p>
              <div className="flex items-center mt-4">
                <Check className="h-6 w-6 text-green-500" />
                <span className="ml-2 text-green-500">Available</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16">
        <Image src={crm} alt="CRM Integration" className="rounded-lg" />
      </div>
      <Contact />
    </div>
  );
}
