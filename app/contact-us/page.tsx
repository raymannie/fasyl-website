import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import data from "@/data/contact.json";
import { ShineBorder } from "@/components/ui/shine-border";

export default function ContactPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="px-5 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className=" col-span-1 md:col-span-2 lg:col-span-3">
            <p className="text-gray-400">CONTACT US</p>
            <h3 className="text-5xl font-semibold mb-4">
              We would love to hear from you
            </h3>
            <p>
              For inquiries, support, or to discuss how Fasyl Technology Group
              can assist with your financial technology needs, reach out to us
              through any of our global offices. Our team is here to provide you
              with tailored solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-10 ">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className=" bg-gray-100 p-6 bg-[url(/images/pattern.png)] bg-repeat rounded-2xl pr-16 relative group "
            >
              <ShineBorder
                shineColor="#FEDC71"
                borderWidth={5}
                className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 z-20"
              />
              <div className="space-y-3">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
