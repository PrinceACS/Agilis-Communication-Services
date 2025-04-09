import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SERVICES_GROUPED } from "@/constants/data";

const ServiceCard = () => {
  return (
    <div>
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
                <CardHeader className="flex items-center justify-center mb-4">
                  {
                    // @ts-expect-error : ts(2769)
                    React.createElement(service.icon, {
                      className: "w-12 h-12 text-[#eade3cf6]",
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
};

export default ServiceCard;
