import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiCaretRightLight } from "react-icons/pi";

export default function CareersPage() {
  return (
    <div>
      <section className="bg-brand-500 text-white pb-60">
        <div className="px-5 md:px-10 pt-16 pb-15">
          <div className="grid gap-12 items-center">
            <div className="max-w-[912px] mx-auto text-center">
              <p className="title-tip justify-center text-md text-secondary-500 mb-4">
                Career
              </p>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                Solutions Today Join Fasyl, Help Build the Future
              </h1>
              <p className="text-gray-300 text-sm leading-[180%] mb-8 max-w-[558px] mx-auto">
                Are you passionate about innovation, or do you want to make a
                significant impact in the technology sector? Join Fasyl and be a
                part of a team that&apos;s driving technological excellence
                across continents.
              </p>
              <Link href={"#open-positions"} className="btn btn-secondary">
                Open Positions <PiCaretRightLight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* vision section */}
      <section className="px-5 -mt-60">
        <div className="grid md:grid-cols-2 p-20 gap-40 bg-[#F6F6F6]">
          <div className="relative">
            <div className="w-full  flex items-center justify-center max-w-[554px] h-[600px] ml-auto clip-Card clip-Card-left-white ">
              <Image
                src={"/images/office.jpg"}
                height={688}
                width={555}
                alt="banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-5">
            <div className="bg-[#00162D] text-white p-10 space-y-3">
              <p className=" title-tip">Our Vision</p>
              <p className="text-sm">
                shaping tomorrow&apos;s digital landscape
              </p>
              <p className="text-xl">
                To be the leading technology solutions provider to institutions
                and partners in our selected markets.
              </p>
            </div>
            <div className="bg-secondary-500  p-10 space-y-3">
              <p className=" title-tip-brand after:bg-brand-500">Our Mission</p>
              <p className="text-sm">
                shaping tomorrow&apos;s digital landscape
              </p>
              <p className="text-xl">
                To empower businesses for optimum value creation through
                innovative technology driven by excellent and professional
                service delivery while fostering strong partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="open-positions" className="py-40 px-5">
        <div>
          <h3 className="text-center text-5xl mb-5">Opening Positions</h3>

          <div className="pt-20">
            <div className="grid md:grid-cols-3 gap-5 gap-y-10">
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="space-y-3 bg-[#F1FAFF] p-6 bg-[url(/images/pattern.png)] bg-repeat"
                >
                  {/* <div className="h-[300px] w-full">
                    <Image
                      src={"/images/office.jpg"}
                      height={688}
                      width={555}
                      alt="banner"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div> */}
                  <div className="flex items-center justify-between text-sm">
                    <p className="title-tip-brand">Remote</p>
                    <p className="title-tip-brand">May 12 2025</p>
                  </div>
                  <h4 className="text-lg text-brand-500 font-bold">
                    Software Developer
                  </h4>
                  <p className="text-sm leading-[150%]">
                    As a Senior Python Developer, youll be responsible for
                    making exceptional software. Read More
                  </p>
                  <button className="btn">
                    Apply <PiCaretRightLight />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
