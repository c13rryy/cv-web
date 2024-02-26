"use client";

import { Icon } from "@/components/UI/Icon/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import sliderParams from "./SwiperSettings/settings";
import { TechData } from "@/Types";

interface TechSwiperProps {
  techData: Array<TechData>;
  sliderWidth: string;
}

export default function TechSwiper({ techData, sliderWidth }: TechSwiperProps) {
  return (
    <div className={`xl:mt-40px sm:mt-30px mt-20px ${sliderWidth}`}>
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
        {techData.map((el, idx) => (
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
