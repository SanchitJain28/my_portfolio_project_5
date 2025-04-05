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
      spaceBetween={0}
      slidesPerView={1.3}
      breakpoints={{
        640: {
          slidesPerView: 1.6,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3.6,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4.2,
          spaceBetween: 50,
        },
      }}
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
            className="rounded-xl w-10/12"
          >
            <img
              src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/671770329ef1137933c0bfc1_talia.avif"
              alt=""
              className="rounded-xl border-10 border-white"
            />
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`
                  my-4 p-8 ${
                    isActive ? " visible " : " invisible"
                  } bg-white rounded-xl`}
              >
                <p className="text-black lg:text-2xl text-lg py-2">Tania Sharma</p>
                <p className="text-black lg:text-xl text">Designer</p>

                <div className="border my-4 border-zinc-400 w-1/2"></div>
                <p className="text-black lg:text-lg ">
                  Marek freelances as a photographer during the New Year season,
                  with Ruul helping him manage his income.
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <motion.div
            animate={{
              scaleX: isActive ? 1.05 : 1,
              scaleY: isActive ? 1.05 : 1,
              scaleZ: isActive ? 1.05 : 1,
            }}
            className="rounded-xl w-10/12"
          >
            <img
              src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/671770323ea6a4d457d5ca69_ravi.avif"
              alt=""
              className="rounded-xl border-10 border-white"
            />
            <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`
                  my-4 p-8 ${
                    isActive ? " visible " : " invisible"
                  } bg-white rounded-xl`}
              >
                <p className="text-black lg:text-2xl text-lg py-2">Tania Sharma</p>
                <p className="text-black lg:text-xl text">Designer</p>

                <div className="border my-4 border-zinc-400 w-1/2"></div>
                <p className="text-black lg:text-lg ">
                  Marek freelances as a photographer during the New Year season,
                  with Ruul helping him manage his income.
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <motion.div
            animate={{
              scaleX: isActive ? 1.05 : 1,
              scaleY: isActive ? 1.05 : 1,
              scaleZ: isActive ? 1.05 : 1,
            }}
            className="rounded-xl w-10/12"
          >
            <img
              src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6717703212fffbd5023f025a_anil.avif"
              alt=""
              className="rounded-xl border-10 border-white"
            />
            <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`
                  my-4 p-8 ${
                    isActive ? " visible " : " invisible"
                  } bg-white rounded-xl`}
              >
                <p className="text-black lg:text-2xl text-lg py-2">Tania Sharma</p>
                <p className="text-black lg:text-xl text">Designer</p>

                <div className="border my-4 border-zinc-400 w-1/2"></div>
                <p className="text-black lg:text-lg ">
                  Marek freelances as a photographer during the New Year season,
                  with Ruul helping him manage his income.
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <motion.div
            animate={{
              scaleX: isActive ? 1.05 : 1,
              scaleY: isActive ? 1.05 : 1,
              scaleZ: isActive ? 1.05 : 1,
            }}
            className="rounded-xl w-10/12"
          >
            <img
              src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/67177031ad1778a602102825_clara.avif"
              alt=""
              className="rounded-xl border-10 border-white"
            />
            <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`
                  my-4 p-8 ${
                    isActive ? " visible " : " invisible"
                  } bg-white rounded-xl`}
              >
                <p className="text-black lg:text-2xl text-lg py-2">Tania Sharma</p>
                <p className="text-black lg:text-xl text">Designer</p>

                <div className="border my-4 border-zinc-400 w-1/2"></div>
                <p className="text-black lg:text-lg ">
                  Marek freelances as a photographer during the New Year season,
                  with Ruul helping him manage his income.
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <motion.div
            animate={{
              scaleX: isActive ? 1.05 : 1,
              scaleY: isActive ? 1.05 : 1,
              scaleZ: isActive ? 1.05 : 1,
            }}
            className="rounded-xl w-10/12"
          >
            <img
              src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/671770324eaa2ccd9d66e2ff_marek.avif"
              alt=""
              className="rounded-xl border-10 border-white"
            />
            <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`
                  my-4 p-8 ${
                    isActive ? " visible " : " invisible"
                  } bg-white rounded-xl`}
              >
                <p className="text-black lg:text-2xl text-lg py-2">Tania Sharma</p>
                <p className="text-black lg:text-xl text">Designer</p>

                <div className="border my-4 border-zinc-400 w-1/2"></div>
                <p className="text-black lg:text-lg ">
                  Marek freelances as a photographer during the New Year season,
                  with Ruul helping him manage his income.
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}
