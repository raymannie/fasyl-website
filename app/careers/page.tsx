import { ShineBorder } from "@/components/ui/shine-border";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { PiCaretRightLight } from "react-icons/pi";

export default function CareersPage() {
  return (
    <div>
      <section className="px-5 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className=" col-span-1 md:col-span-2 lg:col-span-3">
            <p className="text-gray-400">CAREERS</p>
            <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
              Join Fasyl, <br /> Help Build the Future
            </h3>
            <p>
              Are you passionate about innovation, or do you want to make a
              significant impact in the technology sector? Join Fasyl and be a
              part of a team that&apos;s driving technological excellence across
              continents.
            </p>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="open-positions" className="py-10 ">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-5">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className=" bg-gray-100 p-6 bg-[url(/images/pattern.png)] bg-repeat rounded-2xl pr-16 relative group cursor-pointer"
            >
              <ShineBorder
                shineColor="#FEDC71"
                borderWidth={5}
                className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 z-20"
              />
              <div className="space-y-3">
                <h4 className="text-lg text-brand-500 font-bold">
                  Software Developer
                </h4>
                <p className="text-sm leading-[150%]">
                  As a Senior Python Developer, youll be responsible for making
                  exceptional software. Read More
                </p>
                <div>
                  <div className="flex items-center text-sm space-x-1">
                    <CheckCircle size={16} />
                    <p>Remote</p>
                  </div>
                </div>
              </div>
              <div className=" w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center absolute right-2 top-2">
                <CgArrowTopRight size={"18"} />
              </div>
              {/* <button className="btn">
                Apply <PiCaretRightLight />
              </button> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
