"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import { Client } from "@/app/(pages)/(other-services)/private/send-bulk-email/page";
import { Button } from "./ui/button";

interface ExcelUploaderProps {
  setClients: (data: Client[]) => void;
}

const ExcelUploader: React.FC<ExcelUploaderProps> = ({ setClients }) => {
  const [jsonData, setJsonData] = useState<Client[]>([]);

  const handleExcelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      if (data) {
        const arrayBuffer = data as ArrayBuffer;
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), {
          type: "array",
        });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(sheet) as Client[];
        setJsonData(json);
        setClients(json);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleJsonUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        setJsonData(json);
        setClients(json);
      } catch (error) {
        console.error("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  const handleDownloadJson = () => {
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="p-6 border-b border-gray-300">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Excel to JSON Converter
        </h1>
        <p className="text-gray-600 text-center">
          Easily convert Excel data to JSON format
        </p>
      </div>

      <div className="p-6 bg-gray-100 rounded-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
        <div className="bg-white p-4 rounded-md shadow-md text-gray-700">
          <ol className="list-decimal list-inside space-y-2">
            <li>Upload an Excel file containing your data.</li>
            <li>Download the converted JSON data.</li>
            <li>Upload the JSON file to ChatGPT or DeepSeek.</li>
            <li>
              <strong>Prompt LLM: </strong>
              Please create a new JSON file by adding a personalized message for
              each entry related to personal loans. Each message should be
              unique and relevant to personal loans. For example, for the entry
              &quot;Can I get a personal loan if I am a student?&quot;,message
              should be different but related to personal loans
            </li>
            <li>
              Upload the new file to Upload Json file and click on Send Bulk
              Email
            </li>
          </ol>
        </div>
      </div>

      <div className=" rid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-200 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Upload Excel File</h3>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleExcelUpload}
            className="block w-full text-gray-700"
          />
        </div>

        <div className="p-4 bg-gray-200 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Upload JSON File</h3>
          <input
            type="file"
            accept=".json"
            onChange={handleJsonUpload}
            className="block w-full text-gray-700"
          />
        </div>
      </div>

      {jsonData.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Converted JSON Data</h2>
          <pre className="p-4 bg-gray-200 rounded overflow-x-auto max-h-60">
            {JSON.stringify(jsonData, null, 2)}
          </pre>
          <Button
            onClick={handleDownloadJson}
            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg"
          >
            Download JSON
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExcelUploader;
