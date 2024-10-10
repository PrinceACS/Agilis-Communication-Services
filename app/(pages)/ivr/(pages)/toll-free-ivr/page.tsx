// TollFreeIVRPage.tsx
import React from "react";
import { FaPhoneAlt, FaRegSmile, FaCog, FaChartLine } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const TollFreeIVRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        {/* <img
          src="https://via.placeholder.com/1920x600.png" // Replace with your hero image
          alt="Toll-Free IVR Services"
          className="w-full h-96 object-cover"
        /> */}
        <div className="bg-yellow-400 w-full h-96"></div>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl text-white font-extrabold">
            Toll-Free IVR Services by Agilis
          </h1>
          <p className="text-white text-lg mt-4 max-w-2xl">
            Elevate your business with seamless Toll-Free IVR solutions. Provide
            your customers with easy access to information, support, and more
            through a 24/7 IVR system.
          </p>
          <a
            href="#contact"
            className="mt-6 bg-black border-amber-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-amber-400 hover:text-black hover:border-amber-400 transition"
          >
            Get Started with Toll-Free IVR
          </a>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Agilis for Toll-Free IVR?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <FaPhoneAlt className="text-indigo-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Simplified Call Routing
              </h3>
              <p className="text-gray-600">
                Provide your customers with fast and simple call routing,
                ensuring they reach the right department effortlessly.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <FaRegSmile className="text-indigo-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Enhanced Customer Experience
              </h3>
              <p className="text-gray-600">
                Our toll-free IVR ensures a smooth and professional experience
                for your customers with a personalized touch.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <FaCog className="text-indigo-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Customers can get support anytime with 24/7 availability,
                reducing the need for human agents.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <FaChartLine className="text-indigo-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Data Insights
              </h3>
              <p className="text-gray-600">
                Gather valuable insights with real-time call data to understand
                your customer needs better and optimize your services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Toll-Free IVR Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Multi-Language Support",
              "Real-Time Data Insights",
              "Customizable IVR Menus",
              "Automated Customer Support",
              "Call Recording and Logging",
              "Appointment Scheduling",
              "Sales and Lead Generation",
              "Feedback Collection",
              "Order Tracking",
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  {`Provide ${feature.toLowerCase()} functionality seamlessly to your customers through our advanced IVR system.`}
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
              <h3 className="text-xl font-semibold mb-2">
                Step 1: Consultation
              </h3>
              <p className="text-gray-600">
                Discuss your business needs with our team, and we’ll design a
                custom IVR solution for you.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Step 2: Setup</h3>
              <p className="text-gray-600">
                Our experts will set up and configure your toll-free IVR system
                quickly and efficiently.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Step 3: Testing</h3>
              <p className="text-gray-600">
                We perform extensive testing to ensure smooth operation and a
                flawless customer experience.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Step 4: Launch</h3>
              <p className="text-gray-600">
                Once testing is complete, your IVR system will be live,
                providing top-tier service to your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-400 text-white" id="contact">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Your Toll-Free IVR Today
          </h2>
          <p className="text-lg mb-8">
            Ready to streamline your business communication? Contact us to learn
            more about how our toll-free IVR solutions can benefit your
            business.
          </p>
          <a
            href="mailto:info@agilis.com"
            className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us <HiOutlineMail className="inline ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default TollFreeIVRPage;
