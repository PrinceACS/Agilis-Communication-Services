"use server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import DemoRequestEmail from "@/email/demo-form-email";
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
  option?: string;
};

export const sendEmail = async ({
  senderEmail,
  senderName,
  message,
  subject,
  type,
  phone,
  company,
  option,
}: SendEmailArgs) => {
  try {
    let data;
    if (type === "contact") {
      data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "princetiwari180@gmail.com", // Change to your email
        subject: subject || "Message from contact form",
        replyTo: senderEmail,
        react: React.createElement(ContactFormEmail, {
          message: message,
          senderEmail: senderEmail,
          senderName: senderName,
        }),
      });
    } else if (type === "demo-request") {
      if (!option || typeof option !== "string") {
        return { error: "Invalid demo type option" };
      }
      data = await resend.emails.send({
        from: `${option} Demo Request <onboarding@resend.dev>`,
        to: "princetiwari180@gmail.com", // Change to your email
        subject: subject || `${option} Demo Request`,
        replyTo: senderEmail,
        react: React.createElement(DemoRequestEmail, {
          senderName: senderName,
          senderEmail: senderEmail,
          phone: phone,
          company: company,
          option: option,
        }),
      });
    } else {
      return { error: "Invalid request type" };
    }
    return { ...data };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
