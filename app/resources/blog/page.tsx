"use client";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import React from "react";
import { PiCaretRightLight } from "react-icons/pi";
import { motion } from "motion/react";

export default function BlogPage() {
  return (
    <div>
      <section className="px-5 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className=" col-span-1 md:col-span-2 lg:col-span-3">
            <p className="text-gray-400">BLOG</p>
            <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
              Latest Tech News and Insights
            </h3>
            <p>Stay up to date with global tech trends and news.</p>
            <div className="flex items-center space-x-3 mt-5 max-w-xl">
              <div className="flex-1">
                <input className="input w-full" placeholder="search" />
              </div>
              <button className="btn btn-primary">
                Search <PiCaretRightLight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
            Categories
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              "All",
              "Banking",
              "Finance",
              "Investment",
              "Resource Management",
              "Project Management",
            ].map((list, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="px-4 py-8 bg-gray-100 relative group"
                >
                  <ShineBorder
                    shineColor="#FEDC71"
                    borderWidth={5}
                    className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 z-20"
                  />
                  <FlickeringGrid
                    className="absolute inset-0 z-0 size-full"
                    squareSize={3}
                    gridGap={3}
                    color="#ddd"
                    maxOpacity={0.5}
                    flickerChance={0.1}
                  />
                  <p className=" relative z-10 text-base font-semibold">
                    {list}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-20">
            <h3 className="text-3xl lg:text-5xl font-semibold mb-4">Latest</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[1, 2, 3].map((news, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className=" border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg cursor-pointer"
                  >
                    <div className="h-[180px] w-full">
                      <Image
                        src={"/images/office.jpg"}
                        height={688}
                        width={555}
                        alt="banner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3 p-4">
                      <div className="flex items-center justify-between text-sm">
                        <p className=" text-[#1AA3E3] font-semibold">Finance</p>
                        <p className="text-xs">May 12 2025</p>
                      </div>
                      <h4 className="text-lg text-brand-500 font-bold">
                        Cross-boarder payments
                      </h4>
                      <p className="text-sm leading-[150%] text-gray-500">
                        Optimize your core banking operations with our advanced
                        solutions that streamline processes, reduce costs, and
                        improve service delivery.
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
