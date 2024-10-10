"use client";
import React from "react";
import Image from "next/image";
import company from "@/public/images/company.jpg";
import company1 from "@/public/images/company1jpg.jpg";
import company2 from "@/public/images/company2.jpg";
import company4 from "@/public/images/company4.jpg";
import company5 from "@/public/images/company5.jpg";
import company6 from "@/public/images/company6.jpg";
import company7 from "@/public/images/company7.jpg";
import company8 from "@/public/images/company8.jpg";
import company9 from "@/public/images/company9.jpg";

const OurCustomers = () => {
  const customers = [
    { name: "Company", logo: company },
    { name: "Company1", logo: company1 },
    { name: "Company2", logo: company2 },
    { name: "Company4", logo: company4 },
    { name: "Company5", logo: company5 },
    { name: "Company6", logo: company6 },
    { name: "Company7", logo: company7 },
    { name: "Company8", logo: company8 },
    { name: "Company9", logo: company9 },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Title Section */}
      <h2 className="text-center text-4xl font-bold text-amber-300 mb-2">
        Thousands of teams love Agilis, including:
      </h2>

      {/* Logos Section */}
      <div className="flex justify-center items-center flex-wrap gap-8 mx-auto">
        {customers.map((customer) => (
          <div
            key={customer.name}
            className="w-[150px] h-[150px] bg-white flex items-center justify-center p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={customer.logo}
              alt={`${customer.name} logo`}
              className="object-contain w-full h-full"
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCustomers;
