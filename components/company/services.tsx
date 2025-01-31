import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { SERVICES_GROUPED } from "@/constants/data";

export default function ServicesPage() {
  return (
    <div id="services" className="py-10 mx-10">
      <div className="mx-auto space-y-4 mb-10 text-center">
        <h2 className="inline-block text-2xl text-center md:text-4xl font-semibold bg-[#f8e67e] px-3 py-1 rounded-lg text-[#0d0d0d]">
          Our Services
        </h2>
        <p className="text-xl text-gray-900 text-center dark:text-gray-400 mx-5">
          Explore a wide range of features that will streamline your sales and
          customer experience management.
        </p>
      </div>

      {Object.entries(SERVICES_GROUPED).map(([category, services], index) => (
        <section key={index} className="mb-16">
          <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-800 mb-4">
            {category}
          </h2>
          <div className="flex justify-center mb-8">
            <div className={`w-[16rem] h-2 bg-yellow-300`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="shadow-md p-2 border-yellow-500 border-2"
              >
                <CardHeader
                  aria-setsize={index}
                  className="flex items-center justify-center mb-4"
                >
                  {
                    // @ts-expect-error : ts(2769)
                    React.createElement(service.icon, {
                      className: "w-12 h-12 text-yellow-500",
                    })
                  }
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
      ))}
    </div>
  );
}
