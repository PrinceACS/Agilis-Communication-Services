"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import { Client } from "@/app/(pages)/(other-services)/private/send-bulk-email/page";
import { Button } from "./ui/button";

const ExcelUploader: React.FC = () => {
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
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleCopyToClipboard = () => {
    const text = `You are given a JSON dataset containing multiple objects, each representing a person. Your task is to modify each object by adding a new field called "Message". This field should contain a unique message related to a personal loan inquiry, as if the person in the object has reached out via my website to inquire about a personal loan.`;
    navigator.clipboard.writeText(text).then(() => {
      console.log("Copied to clipboard");
    });
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
    <div className="max-w-3xl mx-auto px-4 bg-white shadow-lg rounded-lg">
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
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
          <ol className="list-decimal list-inside space-y-3">
            <li>Upload an Excel file containing your data.</li>
            <li>Download the converted JSON data.</li>
            <li>Upload the JSON file to ChatGPT or DeepSeek.</li>
            <li className="flex flex-col items-start space-x-3 ">
              <div className="flex items-center justify-end space-x-2">
                <span className="font-semibold">Prompt LLM:</span>{" "}
                <span className="text-sm text-gray-600">copy prompt</span>
                <button
                  type="button"
                  onClick={handleCopyToClipboard}
                  className="text-primary hover:text-accent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 text-gray-700 border-2 p-2 border-gray-300 bg-slate-200">
                You are given a JSON dataset containing multiple objects, each
                representing a person. Your task is to modify each object by
                adding a new field called &quot;message&quot;. This field should
                contain a unique message related to a personal loan inquiry, as
                if the person in the object has reached out via my website to
                inquire about a personal loan.
              </div>
            </li>
            <li>Now copy and paste the modified data to a JSON file.</li>
            <li>
              Upload that file to &quot;Upload JSON File&quot; and click on
              &quot;Send Bulk Email&quot;.
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Upload Excel File
          </h3>
          <div className="flex flex-col items-center justify-center space-y-4">
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleExcelUpload}
              className="block w-full text-center text-gray-700 border border-gray-300 rounded-md p-2"
            />
            {jsonData.length > 0 && (
              <Button
                onClick={handleDownloadJson}
                className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Download JSON
              </Button>
            )}
          </div>
        </div>
      </div>

      {jsonData.length > 0 && (
        <div className="mt-4 p-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Converted JSON Data
          </h2>
          <p>{jsonData.length} records</p>
          <div className="p-4 bg-gray-100 rounded-md overflow-x-auto max-h-60">
            <pre className="text-sm text-gray-800">
              {JSON.stringify(jsonData, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcelUploader;
