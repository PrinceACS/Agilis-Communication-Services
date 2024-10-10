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

type DemoFormEmailProps = {
  senderEmail: string;
  senderName: string;
  phone: string | undefined;
  company: string | undefined;
  option: string | undefined;
};

export default function DemoFormEmail({
  senderEmail,
  senderName,
  phone,
  company,
  option,
}: DemoFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>A demo Request from Agilis Communication Services</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-b from-gray-100 to-white text-black font-sans">
          <Container className="mx-auto px-4">
            <Section className="bg-white p-10 rounded-md shadow-md my-10">
              <Heading className="text-3xl font-bold mb-4">
                Received a demo request for {option} from {company}
              </Heading>
              <Text className="text-lg">Dear Team,</Text>
              <Text className="text-lg">
                We received a request from {senderName} at {company} for a demo
                of our {option} services.
              </Text>
              <Text className="text-lg">Please see the details below:</Text>

              <Text className="text-lg">Name: {senderName}</Text>
              <Text className="text-lg">Company: {company}</Text>
              <Text className="text-lg">Email: {senderEmail}</Text>
              {phone && <Text className="text-lg">Phone: {phone}</Text>}
              <Text className="text-lg">
                Please contact them at your earliest convenience.
              </Text>
              <Hr className="my-4 border-gray-300" />
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
