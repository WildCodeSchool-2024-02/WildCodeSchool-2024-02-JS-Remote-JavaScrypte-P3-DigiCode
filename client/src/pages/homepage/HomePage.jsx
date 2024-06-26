/* eslint-disable import/no-unresolved */

import { useLoaderData } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SearchBar from "../../components/searchbar/SearchBar";

export default function HomePage() {
  const videoData = useLoaderData();

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
          <SwiperSlide key={v.title} id="heroSlide">
            <img id="imageSlider" src={v.image} alt={v.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h1>Homepage</h1>
      <SearchBar/>
    </>
  );
}
