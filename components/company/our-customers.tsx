"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <h2 className="text-center text-4xl font-bold text-amber-500 mb-10">
        Thousands of teams love Agilis, including:
      </h2>

      {/* Carousel Section */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 }, // Mobile
          640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
          1024: { slidesPerView: 4, spaceBetween: 30 }, // Desktop
        }}
        className="mySwiper"
      >
        {customers.map((customer) => (
          <SwiperSlide key={customer.name}>
            <div className="flex justify-center items-center">
              <div className="w-[150px] h-[150px] bg-white flex items-center justify-center p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="object-contain"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurCustomers;
