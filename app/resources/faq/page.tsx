"use client";
import React, { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import data from "@/data/faq.json";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";

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
      <section className="px-5 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className=" col-span-1 md:col-span-2 lg:col-span-3">
            <p className="text-gray-400">FAQs</p>
            <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
              Help Center
            </h3>
            <p>
              Everything you need to know about our services, solutions, and how
              we can assist your business.
            </p>
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
                    ? "bg-gray-100 shadow-lg"
                    : " hover:bg-gray-50 hover:shadow-md"
                }`}
              >
                <div
                  className={`p-6 cursor-pointer flex items-center transition-all duration-200 ${
                    isActive ? "" : "hover:bg-gray-50"
                  }`}
                  onClick={() => toggleSection(section.id)}
                >
                  <div
                    className={`transition-all duration-300 transform mr-2 ${
                      isActive ? " rotate-180" : " rotate-0"
                    }`}
                  >
                    {isActive ? (
                      <PlusCircleIcon className="text-gray-300" size={20} />
                    ) : (
                      <MinusCircleIcon className="text-gray-300" size={20} />
                    )}
                  </div>
                  <h3
                    className={`font-bold text-lg transition-colors duration-200 flex-1 ${
                      isActive ? "" : ""
                    }`}
                  >
                    {section.title}
                  </h3>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`px-6 pb-6 transition-colors duration-200 ${
                      isActive ? "" : ""
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
