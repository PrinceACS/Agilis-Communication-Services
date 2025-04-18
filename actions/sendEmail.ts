"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import DemoRequestEmail from "@/email/demo-form-email";
import { getErrorMessage } from "@/lib/utils/utils";
import React from "react";

console.log(process.env.RESEND_API_KEY);
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
    const sanitizedEmail = senderEmail.trim().toLowerCase();

    if (type === "contact") {
      data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "info@agiliscommunications.com",
        subject: subject || "Message from contact form",
        replyTo: sanitizedEmail,
        react: React.createElement(ContactFormEmail, {
          senderName,
          senderEmail,
          message,
          phone
        })
      });
    } else if (type === "demo-request") {
      if (!option || typeof option !== "string") {
        return { error: "Invalid demo type option" };
      }
      data = await resend.emails.send({
        from: `${option} Demo Request <onboarding@resend.dev>`,
        to: "info@agiliscommunications.com",
        subject: subject || `${option} Demo Request`,
        replyTo: sanitizedEmail,
        react: React.createElement(DemoRequestEmail, {
          senderName,    
          senderEmail,
          phone,
          company,
          option
        })
      });
    } else {
      return { error: "Invalid request type" };
    }

    return { ...data };
  } catch (error) {
    console.error("Email sending error:", error);
    return { error: getErrorMessage(error) };
  }
};


export type BulkEmailArgs = {
  clients: SendEmailArgs[];
};

export const sendBulkEmails = async ({ clients }: BulkEmailArgs) => {
  const results = [];

  for (const client of clients) {
    try {
      const response = await sendEmail(client);
      results.push({ email: client.senderEmail, status: "success", data: response });
    } catch (error) {
      results.push({ email: client.senderEmail, status: "failed", error: getErrorMessage(error) });
    }
  }

  return results;
}