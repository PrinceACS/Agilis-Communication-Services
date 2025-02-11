import React from "react";
import {
  Html,
  Body,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
  phone?: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
  phone,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission</Preview>
      <Tailwind>
        <Body className="bg-gray-50 text-gray-800 font-sans px-4">
          <Container className="max-w-2xl mx-auto p-6">
            <Section className="bg-white p-8 mx-2 rounded-lg shadow-lg border border-gray-200">
              <Hr className="my-4 border-gray-300" />
              <Text className="text-lg leading-relaxed">
                <span className="font-medium text-gray-700">Message:</span>{" "}
                {message}
              </Text>
              <Hr className="my-4 border-gray-300" />
              <Text className="text-lg">
                <span className="font-medium text-gray-700">Sender Name:</span>{" "}
                <span className="font-semibold">{senderName}</span>
              </Text>
              <Text className="text-lg">
                <span className="font-medium text-gray-700">Email:</span>{" "}
                <a
                  href={`mailto:${senderEmail}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {senderEmail}
                </a>
              </Text>
              {phone && (
                <Text className="text-lg">
                  <span className="font-medium text-gray-700">Phone:</span>{" "}
                  <span className="font-semibold">{phone}</span>
                </Text>
              )}
              <Button
                className="mt-6 mb-2 inline-block px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition-all"
                href={`mailto:${senderEmail}`}
              >
                Reply
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
