/* eslint-disable import/no-unresolved */
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import VideoCard from "../videocard/VideoCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function VideoList({ videoData }) {
  return (
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
          <VideoCard video={v} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

VideoList.propTypes = {
  videoData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
