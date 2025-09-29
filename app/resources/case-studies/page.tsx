import Image from "next/image";
import React from "react";
import { PiCaretRightLight } from "react-icons/pi";
import data from "@/data/case-study.json";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="bg-brand-500 text-white ">
        <div className="px-5 md:px-10 pt-16 pb-15">
          <div className="grid gap-12 items-center">
            <div className="max-w-[912px] mx-auto text-center">
              <p className="title-tip text-md text-secondary-500 mb-4 justify-center">
                Case Studies
              </p>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 max-w-[700px] mx-auto">
                Explore real success stories from our global implementations
              </h1>
              <p className="text-gray-300 text-md leading-[180%] mb-8 max-w-[558px] mx-auto">
                Our cost-effective technology experts have empowered leading
                growth-focused companies, agencies, and enterprises worldwide,
                guiding them from initial conception through successful
                deployment and beyond.
              </p>
              <button className="btn btn-secondary">
                Schedule a call <PiCaretRightLight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5">
        <div>
          <div className="">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16">
              {data.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div>
                    <div className="h-[300px] w-full">
                      <Image
                        src={item?.image || ""}
                        height={688}
                        width={555}
                        alt="banner"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <Link href={`/case-studies/${item?.id}`}>
                    <h4 className="text-xl text-brand-500 font-bold hover:text-brand-500">
                      {item?.title}
                    </h4>
                  </Link>

                  <Link href={`/case-studies/${item?.id}`} className="btn">
                    Read Case study <PiCaretRightLight />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
