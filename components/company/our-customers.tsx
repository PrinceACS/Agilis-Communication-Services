"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { customers } from "@/constants/data";

const OurCustomers = () => {
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
