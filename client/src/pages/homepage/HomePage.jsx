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
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {videoData.slice(0, 3).map((v) => (
          <SwiperSlide key={v.name}>
            {" "}
            <img src={v.image} alt={v.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h1>Homepage</h1>
    </>
  );
}
