import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useInView } from "framer-motion";

import { SERVICES_GROUPED } from "@/constants/data";

export default function ServicesPage() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isSectionInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div id="services" className="py-10 mx-10">
      <div ref={titleRef} className="mx-auto space-y-4 mb-10 text-center">
        <h2
          className={`inline-block text-2xl text-center md:text-4xl font-semibold bg-[#f8e67e] px-3 py-1 rounded-lg text-[#0d0d0d] transition-opacity duration-500 ${
            isTitleInView ? "opacity-100" : "opacity-0"
          }`}
        >
          Our Services
        </h2>
        <p
          className={`text-xl text-gray-900 text-center dark:text-gray-400 mx-5 transition-opacity duration-500 delay-200 ${
            isTitleInView ? "opacity-100" : "opacity-0"
          }`}
        >
          Explore a wide range of features that will streamline your sales and
          customer experience management.
        </p>
      </div>

      {Object.entries(SERVICES_GROUPED).map(([category, services], index) => {
        return (
          <section ref={sectionRef} key={index} className="mb-16">
            <h2
              className={`text-3xl md:text-4xl text-center font-semibold text-gray-800 mb-4 transition-opacity duration-500 ${
                isSectionInView ? "opacity-100" : "opacity-0"
              }`}
            >
              {category}
            </h2>
            <div
              className={`flex justify-center mb-8 transition-opacity duration-500 ${
                isSectionInView ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-[16rem] h-2 bg-yellow-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, idx) => (
                <Card
                  key={idx}
                  className="border-yellow-500 border-2 shadow-md p-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <CardHeader className="flex items-center justify-center mb-4 ">
                    {React.createElement(service.icon as React.ElementType, {
                      className: "w-12 h-12 text-yellow-500",
                    })}
                  </CardHeader>
                  <CardTitle className="text-2xl md:text-2xl text-center font-bold text-gray-800 mb-2 mx-5">
                    {service.title}
                  </CardTitle>
                  <CardContent className="text-gray-900 text-lg text-center">
                    {service.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
