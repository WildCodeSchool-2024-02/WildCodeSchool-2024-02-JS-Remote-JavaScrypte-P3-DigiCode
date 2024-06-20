/* eslint-disable import/no-unresolved */

import { useLoaderData } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomePage() {
  const videoData = useLoaderData();
  console.info(videoData);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-navigation-color": "rgb(255,250,250)",
          "--swiper-pagination-color": "rgb(255,250,250)",
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="heroSwiper"
        id="heroSwiper"
      >
        {videoData.slice(0, 5).map((v) => (
          <SwiperSlide key={v.name} id="heroSlide">
            {" "}
            <img id="imageSlider" src={v.image} alt={v.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h1>Homepage</h1>
    </>
  );
}
