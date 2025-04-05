import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Carousel1() {
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        // freeMode={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={70}
        slidesPerView={1.3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="rounded-xl h-80 bg-[#ECD425]"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="rounded-xl h-80 bg-[#D9C4FB]"></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="rounded-xl h-80 bg-[#E35B05]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
