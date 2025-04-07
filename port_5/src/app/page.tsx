"use client";
import { motion } from "motion/react";
import Navbar from "./(app)/components/Navbar";
import { Montserrat } from "next/font/google";
import Carousel1 from "./(app)/components/Carousel1";
import { TabContent, Tabs, TabTitle } from "./(app)/components/Tabs";
import Carousel2 from "./(app)/components/Carousel2";
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
    <div className={`${montserrat500.className} overflow-hidden`}>
      <Navbar />

      <div className="py-20 lg:px-8 text-center" id="part1">
        <p
          className={`xl:text-8xl lg:text-5xl text-4xl text-[#002B28] text-center font-bold ${montserrat900.className}`}
        >
          INDEPENDENT’S
          <br />
          <motion.span className=" bg-[#F5DA2A]  px-8 rounded-xl">
            PAY BUTTON
          </motion.span>
        </p>
        <p className="py-12 text-xl lg:w-1/3 lg:px-0 px-8 mx-auto">
          This is your personal pay button. Use it to sell professional services
          to any business in the world.
        </p>
        <div className="flex  justify-center">
          <button className="rounded-full lg:px-8 px-4 py-4 text-lg bg-[#002B28] text-white  mr-4">
            Open your account
          </button>
          <button className="rounded-full lg:px-8 py-4 px-4 text-lg text-black border bg-[#F1F4F0]  mr-4">
            Learn more
          </button>
        </div>
      </div>

      <div className="py-12" id="part2">
        <Carousel1 />
      </div>

      <div
        className="bg-[#F5DA2A] lg:py-40 py-20 my-20 lg:px-20 flex flex-col justify-center items-center text-xl"
        id="part3"
      >
        <p className="pb-8">RUUL IN A NUTSHELL</p>
        <p className="xl:text-6xl/20 lg:text-4xl/20 text-2xl/11 text-[#002B28] text-center lg:w-2/3 lg:px-0 px-8 mx-auto overflow-hidden">
          Ruul resells your professional services
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: 0 }} // Keeps it at x:0 when not hovered
            whileHover={{ x: 0, rotate: -10 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-[#E44506] rounded-4xl inline-block px-6  border-2 border-[#E44506] hover:border-black"
          >
            🧑‍💻
          </motion.span>{" "}
          to your clients, handles Billing & Payment Collection
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: 0 }} // Keeps it at x:0 when not hovered
            whileHover={{ x: 0, rotate: -10 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-[#002B28] rounded-4xl inline-block px-6 py-1 hover:border-2 hover:border-black"
          >
            💳
          </motion.span>{" "}
          so you
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: 0 }} // Keeps it at x:0 when not hovered
            whileHover={{ x: 0, rotate: -10 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-[#B8F0FC] rounded-4xl inline-block px-6 py-1 hover:border-2 my-2 hover:border-black"
          >
            don&apos;t have to.
          </motion.span>
        </p>
      </div>

      <div className="">
        <Tabs>
          <TabTitle>Billing & Checkout</TabTitle>
          <TabContent>
            <div className="lg:p-24 p-8 m-4 bg-[#F1F4F0] rounded-xl mb-8 flex flex-col justify-center items-center">
              <p className="my-4 text-lg">
                Provide services. Bill your client. Get paid. Repeat. All with
                Ruul’s Billing & Checkout system.
              </p>
              <button className="bg-[#F5DA2A] px-6 py-4 rounded-full border my-4">
                Learn more
              </button>
              <div className="flex justify-center">
                <img
                  src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6700e9caff52c415dcf57378_new-invoice.avif"
                  alt=""
                  className=" w-1/2 h-1/2"
                />
                <img
                  src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6700e9ca34f5bf31b2e9aba2_checkout.avif"
                  alt=""
                  className=" w-1/2 h-1/2"
                />
              </div>
            </div>
          </TabContent>
          <TabTitle>Payment Collection</TabTitle>
          <TabContent>
            <div className="lg:p-24 p-8 m-4 bg-[#F1F4F0] rounded-xl mb-8 flex flex-col justify-center items-center">
              <p className="my-4 text-lg">
                Provide services. Bill your client. Get paid. Repeat. All with
                Ruul’s Billing & Checkout system.
              </p>
              <button className="bg-[#F5DA2A] px-6 py-4 rounded-full border my-4">
                Learn more
              </button>
              <div className="flex justify-center">
                <img
                  src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6700e9caff52c415dcf57378_new-invoice.avif"
                  alt=""
                  className=" w-1/2 h-1/2"
                />
                <img
                  src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6700e9ca34f5bf31b2e9aba2_checkout.avif"
                  alt=""
                  className=" w-1/2 h-1/2"
                />
              </div>
            </div>
          </TabContent>
          <TabTitle>Tax & Compliance</TabTitle>
          <TabContent>
            <div className="lg:p-24 p-8 m-4 bg-[#F1F4F0] rounded-xl mb-8 flex flex-col justify-center items-center">
              <p className="my-4 text-lg">
                Provide services. Bill your client. Get paid. Repeat. All with
                Ruul’s Billing & Checkout system.
              </p>
              <button className="bg-[#F5DA2A] px-6 py-4 rounded-full border my-4">
                Learn more
              </button>
              <div className="flex justify-center">
                <img
                  src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6700e9caff52c415dcf57378_new-invoice.avif"
                  alt=""
                  className=" w-1/2 h-1/2"
                />
                <img
                  src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6700e9ca34f5bf31b2e9aba2_checkout.avif"
                  alt=""
                  className=" w-1/2 h-1/2"
                />
              </div>
            </div>
          </TabContent>
          <TabTitle>CRM & Analytics</TabTitle>
          <TabContent>
            <div className="lg:p-24 p-8 m-4 bg-[#F1F4F0] rounded-xl mb-8 flex flex-col justify-center items-center">
              <p className="my-4 text-lg">
                Provide services. Bill your client. Get paid. Repeat. All with
                Ruul’s Billing & Checkout system.
              </p>
              <button className="bg-[#F5DA2A] px-6 py-4 rounded-full border my-4">
                Learn more
              </button>
              <div className="flex justify-center">
                <img
                  src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6700e9caff52c415dcf57378_new-invoice.avif"
                  alt=""
                  className=" w-1/2 h-1/2"
                />
                <img
                  src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6700e9ca34f5bf31b2e9aba2_checkout.avif"
                  alt=""
                  className=" w-1/2 h-1/2"
                />
              </div>
            </div>
          </TabContent>
        </Tabs>
      </div>

      <div className="flex lg:flex-row flex-col justify-center xl:w-2/3 lg:w-4/5 items-center mx-auto py-20">
        <div className="flex  flex-col items-center basis-1/3 mx-12 lg:my-0 my-8">
          <img
            src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6718745a731ac80375b19807_icon-1.avif"
            alt=""
            className="w-44"
          />
          <p className="text-2xl py-4">Global coverage</p>
          <p className="text-xl text-center py-2">
            Invoice your business clients in 190 countries and get paid in 140
            currencies.
          </p>
        </div>
        <div className="border mx-auto border w-1/2 lg:hidden block border-zinc-300"></div>
        <div className="flex flex-col items-center basis-1/3 mx-12 lg:my-0 my-8">
          <img
            src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6718745993f3aece411b31ee_icon-2.avif"
            alt=""
            className="w-44"
          />
          <p className="text-2xl py-4">Faster payments</p>
          <p className="text-xl text-center py-2">
            Reduce your payment collection time, and cut down on unpaid
            invoices.
          </p>
        </div>
        <div className="border mx-auto border w-1/2 lg:hidden block border-zinc-300"></div>

        <div className="flex flex-col items-center basis-1/3 mx-12 lg:my-0 my-8">
          <img
            src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6718745a1597b1ca9285c3ef_icon-3.avif"
            alt=""
            className="w-44"
          />
          <p className="text-2xl py-4">Pay-as-you-go</p>
          <p className="text-xl text-center py-2">
            No upfront payments or monthly subscriptions. Pay only when you use.
          </p>
        </div>
      </div>

      <div className="py-20 overflow-hidden bg-[#BCF5F1]">
        <Carousel2 />
      </div>

      <div className="xl:pt-40 xl:pb-10 2xl:px-60 xl:px-60 lg:px-40">
        <div className="flex xl:flex-row flex-col justify-between">
          <div className="flex flex-col basis-1/2 lg:px-0 px-8 pt-12">
            <p className="text-lg my-4 font-bold text-[#002B28]">OUR MODEL</p>
            <p className="text-xl my-4 tracking-[3px]">
              Ruul, as your
              <span className="bg-[#F5DA2A] px-2 py-1 rounded-lg mx-2">
                Merchant of Record
              </span>
              ,is the legal entity selling your professional services to your
              business clients compliantly in 190 countries.
            </p>

            <div className="flex lg:py-8 py-0 pb-8">
              <button className="bg-[#002B28] text-white lg:px-6 px-4 lg:py-4 py-3 rounded-full border my-4">
                Learn more
              </button>
              <button className="lg:px-6 px-4 lg:py-4 py-3 rounded-full border my-4 mx-4">
                Open your account
              </button>
            </div>
          </div>
          <div className="flex flex-col basis-1/2  lg:px-0 px-8 ">
            <div className="flex pb-12 border-b justify-between">
              <div className="flex flex-col mr-4">
                <p className="my-4 font-bold">B2B Invoicing</p>
                <p className="">
                  Provides B2B invoices to clients for easy accounting.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="my-4 font-bold">Global Sales Tax</p>
                <p className="">
                  Handles global sales tax charging and remittance.
                </p>
              </div>
            </div>
            <div className="flex pt-12  justify-between">
              <div className="flex flex-col mr-4">
                <p className="my-4 font-bold">Payment Options</p>
                <p className="">
                  Offers local & international payment methods.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="my-4 font-bold">Onboarding & Support</p>
                <p className="">Handles all payment-related support queries.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 ">
          <p className="my-8 px-8 font-bold tracking-wider">HOW IT WORKS</p>
          <div className="2xl:flex 2xl:flex-row flex-col xl:px-0 lg:grid lg:grid-cols-2 lg:p-12 p-4">
            <div className="flex flex-col  px-8 py-8 lg:mx-4 bg-[#F5DA2A] rounded-xl my-4">
              <p className="px-6 py-4 my-4 tracking-[2] rounded-lg bg-[#002B28] w-16 text-white text-lg">
                1
              </p>
              <p className="text-lg py-4 text-[#002B28] font-semibold">
                Authorize Ruul
              </p>
              <p className="text-lg py-4 text-[#002B28]">
                Authorize Ruul as your Merchant of Record to sell your services
                and collect payment.
              </p>
            </div>
            <div className="flex flex-col  px-8 py-8 lg:mx-4 bg-[#F5DA2A] rounded-xl my-4">
              <p className="px-6 py-4 my-4 tracking-[2] rounded-lg bg-[#002B28] w-16 text-white text-lg">
                2
              </p>
              <p className="text-lg py-4 text-[#002B28] font-semibold">
                Payment Request
              </p>
              <p className="text-lg py-4 text-[#002B28]">
                Submit your payment request with details such as service fee,
                payout currency, etc.
              </p>
            </div>
            <div className="flex flex-col  px-8 py-8 lg:mx-4 bg-[#F5DA2A] rounded-xl my-4">
              <p className="px-6 py-4 my-4 tracking-[2] rounded-lg bg-[#002B28] w-16 text-white text-lg">
                3
              </p>
              <p className="text-lg py-4 text-[#002B28] font-semibold">
                Billing & Checkout
              </p>
              <p className="text-lg py-4 text-[#002B28]">
                Ruul, as your Merchant of Record, onboards your client, handles
                invoicing and payment collection.
              </p>
            </div>
            <div className="flex flex-col  px-8 py-8 lg:mx-4 bg-[#F5DA2A] rounded-xl my-4">
              <p className="px-6 py-4 my-4 tracking-[2] rounded-lg bg-[#002B28] w-16 text-white text-lg">
                4
              </p>
              <p className="text-lg py-4 text-[#002B28] font-semibold">
                Payout
              </p>
              <p className="text-lg py-4 text-[#002B28]">
                Ruul initiates the payout to your preferred account immediately
                and handles sales tax compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center xl:pb-40">
        <p className="text-lg ">UNIQUE FEATURES</p>
        <p className="lg:text-6xl text-[#002B28] font-semibold text-3xl py-4 text-center">
          What makes Ruul <br className="lg:block hidden" />
          so different?
        </p>
        <div className="flex">
          <div className="flex overflow-hidden justify-between bg-[#D5BEFA] rounded-xl  basis-1/2">
            <div className="mx-2 my-4 absolute">
              <p className="pl-4 text-2xl font py-4 ">Crypto payout</p>
            </div>
            <img
              src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/66e123ebfcc7148c937889a9_cryptopMan-p-500.png"
              alt=""
              className="w-80 mx-40"
            />
          </div>
          <div className="flex flex-col basis-1/4">
            {" "}
            <p className="pl-4 text-lg py-4">Crypto payout</p>
            <img
              src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/66e123ebfcc7148c937889a9_cryptopMan-p-500.png"
              alt=""
              className="w-80"
            />
          </div>
          <div className="flex flex-col basis-1/4 hidden">
            {" "}
            <p className="pl-4 text-lg py-4">Crypto payout</p>
            <img
              src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/66e123ebfcc7148c937889a9_cryptopMan-p-500.png"
              alt=""
              className="w-80"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col basis-1/2"></div>
          <div className="flex flex-col basis-1/4"></div>
          <div className="flex flex-col basis-1/4 "></div>
        </div>
        <div className="flex">
          <div className="flex flex-col basis-1/2 hidden"></div>
          <div className="flex flex-col basis-1/4"></div>
          <div className="flex flex-col basis-1/4 "></div>
        </div>
      </div>
    </div>
  );
}
