import React, { useState } from "react";
import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import ReadMore from "./ReadMore";
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

import { Autoplay, Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
                  <img className="rounded-2xl" src={authorImg} alt="" />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h5 className="font-body text-2xl mb-8 italic font-normal text-[16px]">
                    <ReadMore length={200}>{authorText}</ReadMore>
                  </h5>
                  <div>
                    <p className="text-lg text-accent">{authorName}</p>
                    <p>{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
