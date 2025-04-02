import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";
import { ArrowRight, ChevronDown } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});
export default function Navbar() {
  return (
    <div className={`flex px-4 py-8  ${montserrat.className}`}>
      <div className="flex items-center basis-3/4 justify-center">
        <img
          src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6736f90415432ba5396cadcf_ruul-logo-25.svg"
          alt=""
          className="w-12 mx-8"
        />
        <div className="flex flex-row">
          <Link href="" className="text-[#003E39] mx-4 ">
            How it works
          </Link>
          <div className="flex mx-4">
            <Link href="" className="text-[#003E39] ">
              Features
            </Link>
            <ChevronDown />
          </div>

          <Link href="" className="text-[#003E39] mx-4 ">
            Pricing
          </Link>
          <div className="flex mx-4">
            <Link href="" className="text-[#003E39] ">
              Resources
            </Link>
            <ChevronDown/>
          </div>
        </div>
      </div>
      <div className="basis-1/4">
        <button className="border px-8 py-4  rounded-full bg-[#F1F4F0]">
          <div className="flex">
            <p className="">login </p>
            <ArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
}
