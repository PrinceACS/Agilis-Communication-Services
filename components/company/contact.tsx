"use client";
import { useState } from "react";
import { MapPinIcon } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import MarkSvg from "../ui/mark-svg";
import toast from "react-hot-toast";

import { sendEmail } from "@/actions/sendEmail";
import { Button } from "../ui/button";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all the required fields.", {
        position: "top-right",
        duration: 5000,
      });
      return;
    }

    const response = await sendEmail({
      senderEmail: formData.email,
      senderName: formData.name,
      phone: formData.phone,
      message: formData.message,
      subject: formData.subject,
      type: "contact",
    });

    if (!response.error) {
      toast.success(
        `Thank you for contacting us. We'll get back to you soon.`,
        {
          duration: 5000,
        }
      );
    }
    if (!response) {
      toast.error("Failed to send email. Please try again later.", {
        position: "top-right",
        duration: 5000,
      });
      return;
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full py-16 px-10 bg-gray-100 from-orange-200 via-white to-green-200 items-center "
    >
      {/* Header */}
      <div className=" text-center">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <div className="w-[10rem] h-1 mx-auto">
          <MarkSvg />
        </div>
        <p className="text-gray-600 text-lg mt-4">
          We&apos;d love to hear from you! Feel free to reach out with any
          questions, feedback, or business inquiries.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-700">Get in Touch</h3>
          <div className="flex items-center">
            <PhoneIcon className="h-6 w-6 text-[#d4af37]" />
            <span className="ml-3 text-gray-700">+91 98107 87931</span>
          </div>
          <div className="flex items-center">
            <MailIcon className="h-6 w-6 text-[#d4af37]" />
            <span className="ml-3 text-gray-700">
              info@agiliscommunications.com
            </span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-6 w-6 text-[#d4af37]" />
            <span className="ml-3 text-gray-700">
              Office No 206, EMCA House, 23, Ansari Rd
              <br />
              Daryaganj, Delhi, 110002
            </span>
          </div>

          {/* Google Maps Integration */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.297215438!2d77.242809!3d28.642518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7628fc4e03%3A0x851f0d9ba6bed8f0!2sAgilis%20Communication%20Services!5e0!3m2!1sen!2sin!4v1728372617346!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="rounded-lg shadow-lg border-0"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Send us a message
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#d4af37] focus:border-[#d4af37] sm:text-sm"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#d4af37] focus:border-[#d4af37] sm:text-sm"
                  required
                />
              </div>

              {/* phone number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#d4af37] focus:border-[#d4af37] sm:text-sm"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject or Query
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#d4af37] focus:border-[#d4af37] sm:text-sm"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[##f8e67e] focus:border-[#e7bf3d] sm:text-sm"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="acceptPrivacyPolicy"
                    className="mr-2"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    By submitting this form, you acknowledge and accept
                    Agilis&apos;s{" "}
                    <a
                      href="https://www.agilis.com/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-[#f3e00ef1] underline"
                    >
                      privacy policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <Button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Contact;
