"use client";

import ExcelUploader from "@/components/excel-uploader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/actions/sendEmail";

export interface Client {
  Email: string;
  Name: string;
  Number: string;
  Message?: string;
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
      console.log("Sending email to", client.Number);
      try {
        const res = await sendEmail({
          senderEmail: client.Email,
          senderName: client.Name,
          phone: client.Number,
          message: client.Message || "No message provided",
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

  const handleJsonUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        setClients(json);
      } catch (error) {
        console.error("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <main className="flex flex-col items-center justify-center p-8 mt-10 space-y-6 sm:p-10 sm:mt-10 bg-slate-50">
      <h1 className="text-3xl mt-10 font-bold text-center text-primary sm:text-4xl">
        Send Bulk Emails
      </h1>

      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md sm:max-w-lg">
        <h3 className="text-lg font-semibold text-center mb-4 sm:text-xl">
          Upload JSON File
        </h3>
        <input
          type="file"
          accept=".json"
          onChange={handleJsonUpload}
          className="block w-full text-gray-700 border border-gray-300 rounded-md p-3 transition duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Button
        size="lg"
        onClick={handleBulkEmails}
        className="w-full max-w-md py-3 mb-4 text-lg font-medium  rounded-lg shadow-md sm:max-w-lg "
        disabled={clients.length === 0 || isLoading}
      >
        {isLoading ? "Sending..." : "Send Bulk Emails"}
      </Button>
      {isLoading && (
        <div className="flex items-center justify-center w-8 h-8 mx-auto mt-2 border-2 border-gray-200 border-t-primary  rounded-full animate-spin"></div>
      )}

      {clients.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Uploaded JSON Data
          </h2>
          <p>{clients.length} clients uploaded</p>
          <div className="p-4 bg-gray-100 rounded-md overflow-x-auto max-h-60">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
              {JSON.stringify(clients, null, 2)}
            </pre>
          </div>
        </div>
      )}
      <ExcelUploader />
    </main>
  );
}
