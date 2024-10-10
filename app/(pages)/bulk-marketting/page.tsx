import { FaPhone, FaWhatsapp, FaSms } from "react-icons/fa";

export default function BulkMarketing() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Bulk Marketing Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <FaPhone className="mx-auto h-16 w-16 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Bulk Voice Call</h2>
          <p>Automate calls to reach large audiences in seconds.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <FaWhatsapp className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Bulk WhatsApp</h2>
          <p>Send mass WhatsApp messages directly to your customers.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <FaSms className="mx-auto h-16 w-16 text-purple-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Bulk SMS</h2>
          <p>Efficiently send thousands of SMS messages with a click.</p>
        </div>
      </div>
    </div>
  );
}
