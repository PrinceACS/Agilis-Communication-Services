import React from "react";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container max-w-7xl mx-10 my-16 py-14 md:mx-20 px-4 ">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
      <p className="mb-4">
        At Agilis, we are committed to protecting your privacy and ensuring the
        security of your personal data. This Privacy Policy outlines how we
        collect, use, and protect your information when you interact with our
        website and services.
      </p>
      <p className="mb-4">
        <strong>Scope of the Policy:</strong> This policy applies to our
        website, products, and services provided by Agilis.
      </p>
      <p className="mb-4">
        <strong>Key Terms:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Personal Data:</strong> Any information that relates to an
          identified or identifiable individual.
        </li>
        <li>
          <strong>Processing:</strong> Any operation performed on personal data,
          including collection, storage, and use.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Data Collection</h2>
      <p className="mb-4">
        Agilis collects various types of personal data, including but not
        limited to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Names</li>
        <li>Email addresses</li>
        <li>Usage data (e.g., pages visited, time spent on the site)</li>
      </ul>
      <p className="mb-4">
        <strong>How Data is Collected:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Through website forms</li>
        <li>Cookies and similar tracking technologies</li>
        <li>
          Third-party integrations (e.g., payment processors, analytics tools)
        </li>
      </ul>
      <p className="mb-4">
        <strong>Legal Basis for Data Collection:</strong> We collect personal
        data based on consent, contract, and legitimate interest.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Data Usage</h2>
      <p className="mb-4">
        Agilis uses your personal data for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Providing and improving our services</li>
        <li>Marketing and promotional activities</li>
        <li>Analyzing website usage and user behavior</li>
      </ul>
      <p className="mb-4">
        <strong>Third-Party Data Sharing:</strong> We may share your data with
        trusted third parties to help us operate our services and improve our
        offerings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
      <p className="mb-4">
        Agilis implements various technical and organizational measures to
        protect your personal data, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Encryption of sensitive data</li>
        <li>Access controls to limit data access</li>
        <li>Firewalls to prevent unauthorized access</li>
      </ul>
      <p className="mb-4">
        In the event of a data breach, we will follow our incident response
        procedures to promptly address the issue and notify affected users.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Data Retention</h2>
      <p className="mb-4">
        Agilis retains personal data only as long as necessary to fulfill the
        purposes for which it was collected.
      </p>
      <p className="mb-4">
        <strong>Criteria for Retention and Deletion:</strong> We evaluate the
        necessity of retaining your data based on its intended purpose.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. User Rights</h2>
      <p className="mb-4">
        Under applicable data protection laws, users have the following rights
        regarding their personal data:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Access</li>
        <li>Rectification</li>
        <li>Erasure</li>
        <li>Restriction</li>
        <li>Objection</li>
        <li>Portability</li>
      </ul>
      <p className="mb-4">
        To exercise your rights, please contact us using the information
        provided below.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        7. Cookies and Tracking
      </h2>
      <p className="mb-4">
        Agilis uses cookies and similar tracking technologies to enhance user
        experience and analyze website performance.
      </p>
      <p className="mb-4">
        You can manage your cookie preferences through your browser settings.
        Please note that disabling cookies may affect your experience on our
        website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        8. Children&apos;s Privacy
      </h2>
      <p className="mb-4">
        Agilis does not knowingly collect personal data from children under the
        age of 13. If we become aware that we have collected data from a child,
        we will take steps to delete that data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        9. Changes to the Privacy Policy
      </h2>
      <p className="mb-4">
        Agilis reserves the right to update this Privacy Policy at any time. We
        will notify users of any changes by posting the updated policy on our
        website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        10. Contact Information
      </h2>
      <p className="mb-4">
        For any inquiries regarding this Privacy Policy or your personal data,
        please contact us at:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="flex gap-x-1 items-start">
          <MailIcon className="h-6 w-6 mr-1 text-[#d4af37]" />
          <strong>Email:</strong>
          <span>Info@agiliscommunications.com</span>
        </li>
        <li className="flex gap-x-1 items-start">
          <PhoneIcon className="h-6 w-6 mr-1 text-[#d4af37]" />
          <strong>Phone:</strong> +91 9810787931
        </li>
        <li className="flex gap-x-1 items-start">
          <MapPinIcon className="h-6 w-6 mr-1 text-[#d4af37]" />
          <strong>Address:</strong>{" "}
          <div className="flex items-center">
            <span className="ml-3 text-gray-700">
              Office No 206, EMCA House, 23, Ansari Rd
              <br />
              Daryaganj, Delhi, 110002
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
