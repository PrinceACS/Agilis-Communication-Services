import { sendEmail } from "@/actions/sendEmail";
import React from "react";
import toast from "react-hot-toast";

interface SelectProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
}

const Demo: React.FC<{
  title?: string;
  description?: string;
  options?: SelectProps["options"];
}> = ({
  title = "Request A Demo",
  description = "Contact us today to schedule a demonstration and know how our solution can benefit your organization.",
  options = [
    { label: "Bulk Voice Call", value: "Bulk Voice Call" },
    { label: "Dialer & IVR", value: "Dialer & IVR" },
    { label: "Bulk SMS", value: "Bulk SMS" },
    { label: "Bulk WhatsApp", value: "Bulk WhatsApp" },
  ],
}) => {
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = React.useState(false);

  const fields = [
    {
      label: "Name",
      name: "name",
      rules: [{ required: true, message: "Please input your name!" }],
    },
    {
      label: "Business Email*",
      name: "email",
      rules: [{ required: true, message: "Please input your email!" }],
    },
    {
      label: "Phone*",
      name: "phone",
      rules: [{ required: true, message: "Please input your phone number!" }],
    },
    {
      label: "Company Name*",
      name: "company",
      rules: [{ required: true, message: "Please input your company name!" }],
    },
    {
      label: "Select Demo Type*",
      name: "option",
      rules: [{ required: true, message: "Please select an option!" }],
    },
  ];

  const onFinishHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    const newErrors: { [key: string]: string } = {};

    fields.forEach((field) => {
      const value = values[field.name];
      const isRequired = field.rules?.some((rule) => rule.required);

      if (isRequired && !value) {
        newErrors[field.name] =
          field.rules?.find((rule) => rule.required)?.message ||
          "This field is required";
      }
    });
    setErrors(newErrors);

    setIsSending(true);
    try {
      const { error } = await sendEmail({
        senderEmail: formData.get("email") as string,
        senderName: formData.get("name") as string,
        message: formData.get("message") as string,
        subject: formData.get("subject") as string,
        phone: formData.get("phone") as string,
        option: formData.get("option") as string,
        company: formData.get("company") as string,
        type: "demo-request",
      });

      if (error) {
        throw error;
      }

      toast.success(`Form submitted: ${JSON.stringify(values)}`);
    } catch (error) {
      console.error("Error - demo", error);
      toast.error(`Error submitting form: ${error}`);
    } finally {
      setIsSending(false);
    }

    if (Object.keys(newErrors).length === 0) {
    }
  };

  return (
    <div className="bg-yellow-300 rounded-lg p-10 mx-10 lg:mx-0">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4">{description}</p>
      <form onSubmit={onFinishHandler} className="mt-8">
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <div className="mt-1">
              {field.name === "option" ? (
                <select
                  id={field.name}
                  name={field.name}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                >
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              )}
            </div>
            {errors[field.name] && (
              <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="acceptPrivacyPolicy"
              className="mr-2"
              required
            />
            <span className="text-sm text-gray-700">
              By submitting this form, you acknowledge and accept Agilis&apos;s{" "}
              <a
                href="https://www.agilis.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Demo;
