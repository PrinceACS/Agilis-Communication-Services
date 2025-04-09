// IVRServicesAdvanced.tsx
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaRegSmile, FaCog, FaChartLine } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const IVRServicesAdvanced: React.FC = () => {
  return (
    <div className="min-h-screen mt-14 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="bg-yellow-400 w-full h-96"></div>
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl text-white font-extrabold">
            10-Digit IVR Services by Agilis
          </h1>
          <p className="text-white text-lg mt-4 max-w-2xl">
            Empower your business with seamless and reliable IVR solutions that
            ensure effortless communication with your customers, anytime,
            anywhere.
          </p>
          <Link
            href="#contact"
            className="mt-6 bg-black border-black hover:text-black hover:bg-yellow-400 border-2 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Agilis for Your IVR Needs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <FaPhoneAlt className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Navigation</h3>
              <p className="text-gray-600">
                Customers can easily navigate through options using their
                10-digit numbers, ensuring seamless interactions.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <FaRegSmile className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Customized Solutions
              </h3>
              <p className="text-gray-600">
                Tailored IVR services designed to meet the unique needs of your
                business for a personalized customer experience.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <FaCog className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Ensure your customers can access information and support any
                time of day, without the need for live agents.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <FaChartLine className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-600">
                Gather valuable customer data effortlessly through our advanced
                IVR system for improved service and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our IVR Solutions Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Greeting and Introduction",
              "Account Access",
              "Order Tracking",
              "Service Requests",
              "Feedback Collection",
              "Cancellation Requests",
              "Support Ticket Status",
              "Special Offers and Promotions",
              "Appointment Management",
              "Closing Messages",
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  This feature allows you to {feature.toLowerCase()} seamlessly
                  and improve overall customer experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Step 1: Contact Us</h3>
              <p className="text-gray-600">
                Reach out to Agilis to discuss your business needs and
                objectives.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">
                Step 2: Customization
              </h3>
              <p className="text-gray-600">
                Our team will work with you to design a tailored IVR system that
                aligns with your brand.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">
                Step 3: Implementation
              </h3>
              <p className="text-gray-600">
                We’ll set up the IVR system and ensure it integrates smoothly
                with your existing communication channels.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Step 4: Support</h3>
              <p className="text-gray-600">
                Our support team is available to assist you with any questions
                or adjustments needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-400 text-white" id="contact">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
          <p className="text-lg mb-8">
            Transform your customer communication with Agilis’s 10-Digit IVR
            Services. Contact us today to learn more about how our IVR solutions
            can enhance your business operations.
          </p>
          <a
            href="mailto:info@agilis.com"
            className="bg-white text-yellow-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us <HiOutlineMail className="inline ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default IVRServicesAdvanced;
