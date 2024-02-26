"use client";

import { FC, useCallback } from "react";
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import FeatureCard from "../FeatureCard/FeatureCard";
import settings from "./SwiperSettings/config";
import { FeatureProps } from "@/Types";
import SliderArrow from "./SwiperNavigation/SliderArrow";

interface FeaturesSliderProps {
  features: Array<FeatureProps>;
}

const FeaturesSlider: FC<FeaturesSliderProps> = ({ features }) => {
  const slider = useRef<SwiperRef>(null);
  const handleNext = useCallback(() => slider?.current?.swiper.slideNext(), []);

  const handlePrev = useCallback(() => slider?.current?.swiper.slidePrev(), []);

  return (
    <div className="relative">
      <div className="sm:flex hidden gap-8px items-center justify-end mb-16px">
        <SliderArrow onClick={handlePrev} />
        <SliderArrow onClick={handleNext} isReversed />
      </div>
      <Swiper
        ref={slider}
        {...settings}
        loop
        speed={2000}
        pagination={{
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        modules={[Pagination]}
        className="feature-swiper"
      >
        {features.map((feature, idx) => (
          <SwiperSlide key={`${feature.name}-${idx}`}>
            <FeatureCard
              featureName={feature.name}
              description={feature.description}
              imgUrl={feature.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="containerForBullets" />
    </div>
  );
};

export default FeaturesSlider;
