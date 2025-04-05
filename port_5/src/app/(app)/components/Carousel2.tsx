import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "motion/react";
export default function Carousel2() {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <motion.div

          animate={{
              scaleX: isActive ? 1.05 : 1,
              scaleY: isActive ? 1.05 : 1,
              scaleZ: isActive ? 1.05 : 1,
            }}
            className="rounded-xl"
          >
            <img
              src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/671770329ef1137933c0bfc1_talia.avif"
              alt=""
              className="rounded-xl"
            />
            <AnimatePresence>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} className={`my-4 py-8 ${isActive?"visible"  :"hidden"}`}>
                  <p className="text-black text-2xl ">Hey i am active</p>
                </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="rounded-xl h-80 bg-[#D9C4FB]"></div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="rounded-xl h-80 bg-[#E35B05]"></div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="rounded-xl h-80 bg-[#E35B05]"></div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="rounded-xl h-80 bg-[#E35B05]"></div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="rounded-xl h-80 bg-[#E35B05]"></div>
      </SwiperSlide>
    </Swiper>
  );
}
