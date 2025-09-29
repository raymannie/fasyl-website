import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import data from "@/data/contact.json";

export default function ContactPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-brand-500 text-white ">
        <div className="px-5 md:px-10 pt-16 pb-15">
          <div className="grid gap-12 items-center">
            <div className="max-w-[912px] mx-auto text-center">
              <p className="title-tip text-md text-secondary-500 mb-4 justify-center">
                Contact us
              </p>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 max-w-[500px] mx-auto">
                We would love to hear from you
              </h1>
              <p className="text-gray-300 text-md leading-[180%] mb-8 max-w-[558px] mx-auto">
                For inquiries, support, or to discuss how Fasyl Technology Group
                can assist with your financial technology needs, reach out to us
                through any of our global offices. Our team is here to provide
                you with tailored solutions and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="py-20 grid md:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-secondary-700 p-10 space-y-3 bg-secondary-500 bg-[url(/images/pattern.png)] bg-repeat"
            >
              <p className="text-lg font-bold">{item.location}</p>
              <div className="flex">
                <IoMdPin className="text-brand-500 mt-1.5 mr-2" />
                <div className="flex-1">
                  <p className="text-sm">{item.officeAdress}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone />
                <p className="text-sm">{item.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <IoMailSharp />
                <p className="text-sm">{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
