"use client";

import { PROJECTS_DATA } from "@/data/projectsInfo";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProjectCard from "../ProjectCard/ProjectCard";
import "swiper/css";
import "swiper/css/pagination";
import settings from "./SwiperSettings/config";
import SliderArrow from "./SwiperNavigation/SlideArrow";
import { useCallback, useRef } from "react";

export default function ProjectSwiper() {
  const slider = useRef<SwiperRef>();

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
        speed={1500}
        pagination={{
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {PROJECTS_DATA.map(el => (
          <SwiperSlide key={el.title}>
            <ProjectCard
              image={el.image}
              title={el.title}
              description={el.description}
              tech={el.tech}
              links={el.links}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="containerForBullets" />
    </div>
  );
}
