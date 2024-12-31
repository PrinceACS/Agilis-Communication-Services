import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaPhone, FaHeadset, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "10 Digit IVR",
    href: "/ivr",
    description: "Automate calls to reach large audiences in seconds.",
    icon: <FaPhone className="h-8 w-8" />,
  },
  {
    title: "Toll Free IVR",
    href: "/ivr",
    description: "Provide seamless customer support with toll-free options.",
    icon: <FaHeadset className="h-8 w-8" />,
  },
  {
    title: "Analytics Dashboard",
    href: "/analytics",
    description: "Gain insights from call data to optimize your strategies.",
    icon: <FaChartLine className="h-8 w-8" />,
  },
];

export default function EnhancedHeroSection() {
  return (
    <section className="w-full py-16 bg-black text-white overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center mb-16">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Revolutionize Your{" "}
                <span className="text-amber-400">Communication</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
                Empower your business with cutting-edge IVR solutions. Reach
                your audience efficiently and effectively.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                className="bg-amber-400 text-black hover:bg-amber-300 transition-colors duration-300 text-lg px-8 py-3 rounded-full"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button
                variant="outline"
                className="text-amber-400 border-amber-400 hover:bg-amber-400/10 transition-colors duration-300 text-lg px-8 py-3 rounded-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div
            id="services"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm text-white border border-amber-400/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20 group"
              >
                <div className="flex flex-col h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(service.icon, {
                        className: "h-8 w-8 text-black",
                      })}
                    </div>
                    <CardTitle className="text-2xl font-bold text-amber-400">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <CardDescription className="text-gray-300 text-lg mb-4">
                      {service.description}
                    </CardDescription>
                    <Button
                      variant="link"
                      asChild
                      className="mt-auto p-0 text-amber-400 hover:text-amber-300 transition-colors duration-300 text-lg"
                    >
                      <Link href={service.href}>Learn More →</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
