import Image from "next/image";
import React from "react";
import { PiCaretRightLight } from "react-icons/pi";

export default function BlogPage() {
  return (
    <div>
      <section className="bg-brand-500 text-white ">
        <div className="px-5 md:px-10 pt-16 pb-15">
          <div className="grid gap-12 items-center">
            <div className="max-w-[912px] mx-auto text-center">
              <p className="title-tip text-md text-secondary-500 mb-4 justify-center">
                Blog Page
              </p>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                Latest Tech News
                <br />
                and Insights
              </h1>
              <p className="text-gray-300 text-md leading-[180%] mb-8 max-w-[558px] mx-auto">
                Stay up to date with global tech trends and news.
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div>
                  <input className="input" placeholder="search" />
                </div>
                <button className="btn bg-secondary-500 text-brand-500 h-10 rounded-sm px-5">
                  Search <PiCaretRightLight className="ml-2" size={16} />
                </button>
              </div>
              {/* <button className="btn btn-secondary">
                Schedule a call <PiCaretRightLight className="ml-2" size={16} />
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-5">
        <div>
          <h3 className="text-center mb-5">Categories</h3>
          <div className="flex items-center justify-center flex-wrap max-w-[500px] gap-4 mx-auto">
            <button className="btn btn-primary">All</button>
            <button className="btn btn-primary-outlined">Banking</button>
            <button className="btn btn-primary-outlined">Finance</button>
            <button className="btn btn-primary-outlined">Investment</button>
            <button className="btn btn-primary-outlined">
              Resource Management
            </button>
            <button className="btn btn-primary-outlined">
              Project Management
            </button>
          </div>

          <div className="pt-20">
            <div className="grid md:grid-cols-3 gap-5">
              <div className="space-y-3">
                <div className="h-[300px] w-full">
                  <Image
                    src={"/images/office.jpg"}
                    height={688}
                    width={555}
                    alt="banner"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <p className="title-tip-brand">Finance</p>
                  <p>May 12 2025</p>
                </div>
                <h4 className="text-lg text-brand-500 font-bold">
                  Cross-boarder payments
                </h4>
                <p className="text-sm leading-[150%]">
                  Optimize your core banking operations with our advanced
                  solutions that streamline processes, reduce costs, and improve
                  service delivery.
                </p>
                <button className="btn">
                  Learn More <PiCaretRightLight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
