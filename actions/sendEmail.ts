"use server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import DemoRequestEmail from "@/email/demo-form-email"; // Assuming you have a separate template for demo requests
import React from "react";
import { getErrorMessage } from "@/lib/utils/utils";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}

const resend = new Resend(process.env.RESEND_API_KEY);


export type SendEmailArgs = {
  senderEmail: string;
  senderName: string;
  message: string;
  subject: string;
  type: "contact" | "demo-request";
  phone?: string;
  company?: string;
  option ?: string;
};

export const sendEmail = async ({
  senderEmail,
  senderName,
  message,
  subject,
  type, // This will determine whether it's a contact or demo request
  phone, // Optional for demo requests
  company, // Optional for demo requests
  option, // Optional for demo requests
} : SendEmailArgs) => {
  // Validate input fields
  // if (!validateString(senderEmail, 500)) {
  //   return {
  //     error: "Invalid sender email",
  //   };
  // }
  // if (!validateString(senderName, 500)) {
  //   return {
  //     error: "Invalid sender name",
  //   };
  // }
  // if (!validateString(message, 5000)) {
  //   return {
  //     error: "Invalid message",
  //   };
  // }

  // Handle both contact and demo requests
  let data;
  try {
    if (type === "contact") {
      data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "shivangtripathi101@gmail.com",
        subject: subject || "Message from contact form",
        replyTo: senderEmail,
        react: React.createElement(ContactFormEmail, {
          message: message,
          senderEmail: senderEmail,
          senderName: senderName,
        }),
      });
    } else if (type === "demo-request") {
      data = await resend.emails.send({
        from: `${option} Demo Request <onboarding@resend.dev>`,
        to: "princetiwari180@gmail.com",
        subject: subject || `${option} Demo Request`,
        replyTo: senderEmail,
        react: React.createElement(DemoRequestEmail, {
          senderName: senderName,
          senderEmail: senderEmail,
          phone: phone,
          company: company,
          option : option,
        }),
      });
    } else {
      return {
        error: "Invalid request type",
      };
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { ...data };
};
