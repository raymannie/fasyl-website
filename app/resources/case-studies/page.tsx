import Image from "next/image";
import React from "react";
import { PiCaretRightLight } from "react-icons/pi";
import data from "@/data/case-study.json";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import SubfooterContent from "@/components/SubfooterContent";

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="px-5 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className=" col-span-1 md:col-span-2 lg:col-span-3">
            <p className="text-gray-400">CASE STUDIES</p>
            <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
              Explore real success stories from our global implementations
            </h3>
            <p>
              Our cost-effective technology experts have empowered leading
              growth-focused companies, agencies, and enterprises worldwide,
              guiding them from initial conception through successful deployment
              and beyond.
            </p>
            <Link href={`/case-studies`} className="btn btn-primary mt-6">
              Book A Consultation <PiCaretRightLight />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-5">
        <div>
          <div className="">
            <div className="grid max-w-7xl mx-auto px-4 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16">
              {data.map((item, index) => (
                <Link
                  href={`/case-studies/${item?.id}`}
                  key={index}
                  className=" block relative hover:shadow-2xl shadow-lg rounded-2xl overflow-hidden transition-shadow"
                >
                  <div className="h-[300px] w-full">
                    <Image
                      src={item?.image || ""}
                      height={688}
                      width={555}
                      alt="banner"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 py-6 flex items-end">
                    <h4 className="text-base text-white font-semibold flex-1">
                      {item?.title}
                    </h4>
                    <div className=" w-9 h-9 bg-white/20 flex items-center justify-center rounded-full ml-4">
                      <CgArrowTopRight className="text-white" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SubfooterContent />
    </div>
  );
}
