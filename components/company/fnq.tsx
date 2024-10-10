import React from "react";

type FNQType = {
  question: string;
  answer: string;
};
type FNQProps = {
  faqItems: FNQType[];
};

const FNQ = ({ faqItems }: FNQProps) => {
  return (
    <div className="container mx-auto px-4 my-5 ">
      <h2 className="text-3xl text-yellow-50 font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 ">
        {faqItems.map((item, index) => (
          <details
            key={index}
            className=" text-yellow-50 p-6 rounded-lg shadow-md items-center"
          >
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FNQ;
