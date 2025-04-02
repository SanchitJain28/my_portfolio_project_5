"use client";
import { motion } from "motion/react";
import Navbar from "./(app)/components/Navbar";
import { Montserrat } from "next/font/google";
import Carousel1 from "./(app)/components/Carousel1";
const montserrat500 = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const montserrat900 = Montserrat({
  subsets: ["latin"],
  weight: "900",
});
export default function Home() {
  return (
    <div className={`${montserrat500.className}`}>
      <Navbar />
      <div className="py-20 px-8 text-center" id="part1">
        <p
          className={`text-8xl text-[#002B28] text-center font-bold ${montserrat900.className}`}
        >
          INDEPENDENT’S
          <br />
          <motion.span className=" bg-[#F5DA2A]  px-8 rounded-xl">
            PAY BUTTON
          </motion.span>
        </p>
        <p className="py-12 text-2xl w-1/3 mx-auto">
          This is your personal pay button. Use it to sell professional services
          to any business in the world.
        </p>
        <div className="flex  justify-center">
          <button className="rounded-full px-8 py-4 text-lg bg-[#002B28] text-white  mr-4">
            Open your account
          </button>
          <button className="rounded-full px-8 py-4 text-lg text-black border bg-[#F1F4F0]  mr-4">
            Learn more
          </button>
        </div>
      </div>
      <div className="py-12" id="part2">
        <Carousel1/>
      </div>
    </div>
  );
}
