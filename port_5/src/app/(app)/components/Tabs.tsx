"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { ReactNode, useState } from "react";

export function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  const titles = children.filter((child) => {
    return child.type.name === "TabTitle";
  });
  const tabContent = children.filter((child) => {
    return child.type.name === "TabContent";
  });

  return (
    <div>
      <div className="flex w-full items-center justify-center p-2 my-12 rounded-ful">
        {titles.map((tab, index) => {
          return (
            <div className="" key={index}>
              <div className="mx-2  rounded-xl" key={index}>
                <button
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 ${
                    activeTab === index
                      ? "border rounded-full px-8 py-4  text-xl"
                      : "bg-[#002B28] text-white px-8 py-4 rounded-full text-xl"
                  }`}
                >
                  {tab.props.children}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <AnimatePresence>
        <motion.div
          key={activeTab} // Key ensures re-render when tab changes
          className="px-20 w-2/3 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {tabContent[activeTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export const TabTitle = ({ children }: { children: ReactNode }) => <>{children}</>;
export const TabContent = ({ children }:{ children: ReactNode }) => <>{children}</>;
