"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import company1 from "@/public/images/testimonials/company1.png";
import company2 from "@/public/images/testimonials/company2.png";
import company3 from "@/public/images/testimonials/company3.png";
import company4 from "@/public/images/testimonials/company4.png";
import company5 from "@/public/images/testimonials/company5.png";
import company6 from "@/public/images/testimonials/company6.png";
import company7 from "@/public/images/testimonials/company7.png";
import company8 from "@/public/images/testimonials/company8.png";
import company9 from "@/public/images/testimonials/company9.png";
import company10 from "@/public/images/testimonials/company10.png";
import company11 from "@/public/images/testimonials/company11.png";
import company12 from "@/public/images/testimonials/company12.png";
import company13 from "@/public/images/testimonials/company13.png";
import company14 from "@/public/images/testimonials/company14.png";

const OurCustomers = () => {
  const customers = [
    { name: "Betterr walls", logo: company1 },
    { name: "Probity", logo: company2 },
    { name: "Texta", logo: company3 },
    { name: "Cred Mart", logo: company4 },
    { name: "Mantri Election Compaign", logo: company5 },
    { name: "Merry gal", logo: company6 },
    { name: "Bean Bliss", logo: company7 },
    { name: "Group Genic", logo: company8 },
    { name: "Labour Unioin", logo: company9 },
    { name: "Mahavir Finelease Ltd.", logo: company10 },
    { name: "DE", logo: company11 },
    { name: "Recovery Layer", logo: company12 },
    { name: "Promise Myself", logo: company13 },
    { name: "Odwanis", logo: company14 },
  ];

  return (
    <div className="py-10 px-auto sm:px-6 lg:px-8 ">
      {/* Title Section */}
      <h2 className="text-center text-4xl font-bold text-amber-500 ">
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
              <div className="w-[10rem] h-[10rem] my-10  flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <Image
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="object-contain"
                  width={160}
                  height={160}
                  loading="lazy"
                  quality={90}
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
