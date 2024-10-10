import Image from "next/image";
import React from "react";
import ivr_benefits from "@/public/images/ivr_benefits.png";

type Props = {};

const Benefits = (props: Props) => {
  return (
    <div className="my-16 mx-auto max-w-7xl px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Interactive Voice
        </h2>
        <h2 className="text-4xl font-extrabold text-yellow-500">
          Response (IVR)
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            alt="IVR Benefits"
            height={400}
            width={400}
            src={ivr_benefits}
            className="w-full h-full object-cover "
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-[70%] text-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
            Enhance Customer Experience & Business Efficiency with IVR Systems
          </h3>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              <span className="font-semibold text-yellow-500">
                Improved Customer Service:
              </span>{" "}
              IVR allows customers to quickly reach the information or
              department they need without waiting for a live agent, reducing
              wait times and improving satisfaction.
            </p>
            <p>
              <span className="font-semibold text-yellow-500">
                Cost Efficiency:
              </span>{" "}
              By automating routine inquiries and directing calls to the
              appropriate departments, IVR reduces the need for a large customer
              service team, lowering operational costs.
            </p>
            <p>
              <span className="font-semibold text-yellow-500">
                24/7 Availability:
              </span>{" "}
              IVR systems can handle customer inquiries and provide information
              around the clock, ensuring support is available even outside of
              regular business hours.
            </p>
            <p>
              <span className="font-semibold text-yellow-500">
                Personalization:
              </span>{" "}
              IVR systems can be customized to provide personalized experiences
              based on customer data, such as previous interactions or account
              information, making the experience more relevant and efficient.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="mt-12 text-gray-700 space-y-6 text-lg leading-relaxed">
        <p>
          <span className="font-semibold text-yellow-500">
            Increased Productivity:
          </span>{" "}
          With IVR handling routine tasks, agents can focus on more complex or
          high-priority issues, boosting overall productivity.
        </p>
        <p>
          <span className="font-semibold text-yellow-500">Scalability:</span>{" "}
          IVR systems can easily scale with business growth, handling increased
          call volumes without the need for additional staff.
        </p>
        <p>
          <span className="font-semibold text-yellow-500">
            Enhanced Call Routing:
          </span>{" "}
          IVR efficiently routes calls to the correct department or agent,
          ensuring that customer inquiries are handled by the most appropriate
          person.
        </p>
        <p>
          <span className="font-semibold text-yellow-500">
            Data Collection:
          </span>{" "}
          IVR can gather valuable data on customer needs and preferences, which
          can be used to improve services and tailor future interactions.
        </p>
        <p>
          <span className="font-semibold text-yellow-500">
            Multilingual Support:
          </span>{" "}
          IVR systems can offer support in multiple languages, catering to a
          diverse customer base and improving accessibility.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
