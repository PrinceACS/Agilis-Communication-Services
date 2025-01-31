"use client";

import ExcelUploader from "@/components/excel-uploader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/actions/sendEmail";

export interface Client {
  Email: string;
  Name: string;
  Number: string;
  message?: string;
}

export default function SendBulkEmail() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setLoading] = useState(false);
  const handleBulkEmails = async () => {
    if (clients.length === 0) {
      alert("No clients to send emails to. Please upload a file.");
      return;
    }

    setLoading(true);

    const results = [];
    for (const client of clients) {
      try {
        const res = await sendEmail({
          senderEmail: client.Email,
          senderName: client.Name,
          phone: client.Number,
          message: client.message || "No message provided",
          subject: "Personal Loan Query",
          type: "contact",
        });
        results.push(res);
      } catch (error) {
        console.error(`Error sending email to ${client.Email}`, error);
      }
    }

    setClients([]);
    setLoading(false);

    alert("Emails sent successfully!");
  };

  return (
    <main className="flex  mt-10 flex-col items-center justify-center p-10">
      <h1 className="text-2xl font-bold mt-10 flex flex-col">
        Send Bulk Emails
      </h1>
      <Button
        size="lg"
        onClick={handleBulkEmails}
        className="mb-4"
        disabled={clients.length === 0 || isLoading}
      >
        {isLoading ? "Sending..." : "Send Bulk Emails"}
      </Button>
      {isLoading && (
        <div className="animate-spin h-5 w-5 border-b-2 border-gray-900 mx-auto mt-2"></div>
      )}
      <ExcelUploader setClients={setClients} />
    </main>
  );
}
