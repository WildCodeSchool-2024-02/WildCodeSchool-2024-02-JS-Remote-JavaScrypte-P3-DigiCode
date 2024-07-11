/* eslint-disable import/no-unresolved */
import { useLoaderData, NavLink } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomePage.css";
import SearchBar from "../../components/searchbar/SearchBar";

export default function HomePage() {
  const videoData = useLoaderData();

  return (
    <>
      <HeroSlider />

      <SearchBar />

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
        className="newinSwiper"
        id="newinSwiper"
      >
        {videoData?.map((v) => (
          <SwiperSlide key={v.title} id="newinSlide">
            <NavLink to={`/video/${v.id}`}>
              <img id="imageNewin" src={v.image} alt={v.title} />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
