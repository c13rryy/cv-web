"use client";

import { Icon } from "@/components/UI/Icon/Icon";
import { TECH_DATA } from "@/data/technologies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import sliderParams from "./SwiperSettings/settings";

export default function TechSwiper() {
  return (
    <div className="max-w-2xl  xl:mt-40px sm:mt-30px mt-20px">
      <Swiper
        navigation
        freeMode
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        {...sliderParams}
        modules={[Navigation, Autoplay, FreeMode]}
        className="tech-swiper"
      >
        {TECH_DATA.map((el, idx) => (
          <SwiperSlide key={`${el.title}${idx}`}>
            <Icon
              icon={el.icon}
              size={40}
              height={40}
              viewBox="0 0 40 40"
              text={el.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
