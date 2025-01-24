import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
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
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-b from-gray-100 to-white text-black font-sans">
          <Container className="mx-auto px-4">
            <Section className="bg-white p-10 rounded-md shadow-md my-10">
              <Heading className="text-3xl font-bold mb-4">
                You received the following message from the contact form
              </Heading>
              <Text className="text-lg">{message}</Text>
              <Hr className="my-4 border-gray-300" />
              <Text className="text-lg">
                The sender&apos;s name is:{" "}
                <span className="font-bold">{senderName}</span>
              </Text>
              <Text className="text-lg">
                The sender&apos;s email is:{" "}
                <a
                  href={`mailto:${senderEmail}`}
                  className="text-blue-600 font-bold hover:underline"
                >
                  {senderEmail}
                </a>
              </Text>
              <Text className="text-lg">
                The sender&apos;s phone:{" "}
                <a
                  href={`mailto:${phone}`}
                  className="text-blue-600 font-bold hover:underline"
                >
                  {phone}
                </a>
              </Text>
              <Button
                className="mt-8 px-4 py-2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700"
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
