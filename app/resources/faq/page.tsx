"use client";
import React, { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import data from "@/data/faq.json";

export default function FaqPage() {
  const [activeSection, setActiveSection] = useState<string | null>(
    "financial-tech"
  );

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };
  return (
    <div>
      {/* Hero section */}
      <section className="bg-brand-500 text-white ">
        <div className="px-5 md:px-10 pt-16 pb-15">
          <div className="grid gap-12 items-center">
            <div className="max-w-[912px] mx-auto text-center">
              <p className="title-tip text-md text-secondary-500 justify-center mb-4">
                FAQ
              </p>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6 max-w-[500px] mx-auto">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-300 text-md leading-[180%] mb-8 max-w-[558px] mx-auto">
                Everything you need to know about our services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="space-y-4 max-w-4xl mx-auto p-6">
          {data.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <div
                key={section.id}
                className={`rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-gray-800 text-white shadow-lg"
                    : " bg-[#F0FAFF] hover:bg-gray-50 hover:shadow-md"
                }`}
              >
                <div
                  className={`p-6 cursor-pointer flex items-center justify-between transition-all duration-200 ${
                    isActive ? "" : "hover:bg-gray-50"
                  }`}
                  onClick={() => toggleSection(section.id)}
                >
                  <h3
                    className={`font-bold text-lg transition-colors duration-200 ${
                      isActive ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {section.title}
                  </h3>
                  <div
                    className={`transition-all duration-300 transform ${
                      isActive
                        ? "text-white rotate-180"
                        : "text-gray-600 rotate-0"
                    }`}
                  >
                    <PiCaretDownLight size={16} />
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`px-6 pb-6 transition-colors duration-200 ${
                      isActive ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <p>{section.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
