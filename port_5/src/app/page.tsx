"use client";
import { motion } from "motion/react";
import Navbar from "./(app)/components/Navbar";
import { Montserrat } from "next/font/google";
import Carousel1 from "./(app)/components/Carousel1";
import { TabContent, Tabs, TabTitle } from "./(app)/components/Tabs";
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
        <Carousel1 />
      </div>

      <div
        className="bg-[#F5DA2A] py-40 my-20 px-20 flex flex-col justify-center items-center text-xl"
        id="part3"
      >
        <p className="">RUUL IN A NUTSHELL</p>
        <p className="text-6xl/20 text-[#002B28] text-center w-2/3 mx-auto overflow-hidden">
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
            <div className="p-24 bg-[#F1F4F0] rounded-xl mb-8 flex flex-col justify-center items-center">
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
            <div className="p-24 bg-[#F1F4F0] rounded-xl mb-8 flex flex-col justify-center items-center">
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
            <div className="p-24 bg-[#F1F4F0] rounded-xl mb-8 flex flex-col justify-center items-center">
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
            <div className="p-24 bg-[#F1F4F0] rounded-xl mb-8 flex flex-col justify-center items-center">
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

      <div className="flex justify-center w-2/3 items-center mx-auto py-20">
        <div className="flex flex-col items-center basis-1/3 mx-12">
          <img src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6718745a731ac80375b19807_icon-1.avif" alt="" className="w-44" />
          <p className="text-2xl py-4">Global coverage
          </p>
          <p className="text-xl text-center py-2">Invoice your business clients in 190 countries and get paid in 140 currencies.</p>
        </div>
        <div className="flex flex-col items-center basis-1/3 mx-12">
          <img src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6718745993f3aece411b31ee_icon-2.avif" alt="" className="w-44" />
          <p className="text-2xl py-4">Faster payments
          </p>
          <p className="text-xl text-center py-2">Reduce your payment collection time, and cut down on unpaid invoices.</p>
        </div>
        <div className="flex flex-col items-center basis-1/3 mx-12">
          <img src="https://cdn.prod.website-files.com/63fffb3513dd1b7acde9449c/6718745a1597b1ca9285c3ef_icon-3.avif" alt="" className="w-44" />
          <p className="text-2xl py-4">Pay-as-you-go
          </p>
          <p className="text-xl text-center py-2">No upfront payments or monthly subscriptions. Pay only when you use.</p>
        </div>
      </div>

      
    </div>
  );
}
