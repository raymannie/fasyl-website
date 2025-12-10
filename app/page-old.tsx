"use client";
import Modal from "@/components/Modal";
import data from "@/data/home.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { PiCaretDownLight } from "react-icons/pi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    "financial-tech"
  );

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="bg-brand-500 text-white">
          <div className="px-5 md:px-10 pt-16 pb-15">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  We&apos;re Africa&apos;s Premium
                  <br />
                  Financial Technology
                  <br />
                  Powerhouse
                </h1>
                <p className="text-gray-300 text-lg mb-8">
                  At Fasyl, we&apos;ve dedicated the last 26 years to providing
                  top-notch technology solutions for clients across various
                  industries including banking, telecommunications, insurance,
                  government, and more.
                </p>
                <button className="btn btn-secondary">
                  Schedule a call <HiChevronRight className="ml-2" size={15} />
                </button>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 mt-16">
                  <div>
                    <div className="text-3xl font-meduim text-secondary-500">
                      25+
                    </div>
                    <div className="text-gray-400 text-sm">
                      Years Financial Services Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-meduim text-secondary-500">
                      100+
                    </div>
                    <div className="text-gray-400 text-sm">
                      Businesses Transformed
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-meduim text-secondary-500">
                      2000
                    </div>
                    <div className="text-gray-400 text-sm">
                      Successful Projects
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-meduim text-secondary-500">
                      150+
                    </div>
                    <div className="text-gray-400 text-sm">Expert Team</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full bg-gray-700 flex items-center justify-center max-w-[554px] h-[700px] ml-auto clip-Card clip-Card-left-brand">
                  <Image
                    src={"/images/office.jpg"}
                    height={688}
                    width={555}
                    alt="banner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 px-5 md:px-10">
          <div className="mx-auto px-8 py-30 bg-secondary-500">
            <div className="grid md:grid-cols-2 gap-30 items-center">
              <div className="relative">
                <div className="w-full bg-gray-50 flex items-center justify-center max-w-[554px] h-[700px] ml-auto clip-Card clip-Card-left-secondary">
                  <Image
                    src={"/images/fasyl-office.jpg"}
                    height={688}
                    width={555}
                    alt="banner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => {
                        setIsOpen(true);
                      }}
                      className="bg-red-600 text-white w-[56px] h-[44px] rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  About Us
                </h2>
                <p className="text-gray-700 mb-12">
                  Fasyl Technology Group was founded in 1999 with the name
                  Finance Applications System Limited and has metamorphosed from
                  a one-country financial institution to a multiple-country
                  technology conglomerate, covering aspects of not just
                  financial technology but other industries and markets.
                </p>
                <p className="text-gray-700 mb-12">
                  Currently, Fasyl, with its 13-country operational office
                  presence, services over 100 countries and beyond, including
                  small, medium, and large institutions in finance,
                  telecommunications, manufacturing, the public sector, and
                  more.
                </p>
                <Link
                  href="/company/about-us"
                  className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Transforming Businesses Section */}
        <section className="py-20 bg-white">
          <div className=" mx-auto px-8">
            <div className="text-center mb-16">
              <p className="text-gray-600 mb-4 title-tip justify-center">
                Why Choose Fasyl
              </p>
              <h2 className="text-5xl leading-[150%] font-medium text-brand-500">
                Transforming Businesses
                <br />
                One Innovative Solution
                <br />
                At A Time
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-white">
              {data.mission.map((item, index) => (
                <div
                  key={index}
                  className="bg-brand-500  overflow-hidden clip-Card clip-Card-left-white"
                >
                  <div className="h-80 bg-gray-200 flex items-center justify-center">
                    <Image
                      src={item.image}
                      height={400}
                      width={400}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-secondary-500">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Leaders Section */}
        <section className="py-20 bg-[#00162D] text-white">
          <div className=" px-8">
            <div className="grid md:grid-cols-2 gap-15">
              <div className="relative">
                <div className=" top-10 sticky">
                  <p className="text-white mb-4 title-tip">
                    {data.industry.title}
                  </p>
                  <h2 className="text-5xl font-medium leading-[150%] max-w-[625px] mb-6">
                    {data.industry.description}
                  </h2>
                </div>
              </div>

              <div className="">
                <div className="ml-auto mr-auto sm:mr-0  max-w-[480px] grid sm:grid-cols-2 gap-10">
                  {data.industry.partners.map((item, index) => (
                    <div key={index} className="bg-gray-800 py-4">
                      <Image
                        src={item.logo}
                        height={40}
                        width={100}
                        alt={item.name}
                        className="h-10 object-contain mx-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-white">
          <div className=" px-8">
            <div className="text-center mb-16">
              <p className="text-gray-600 mb-4 title-tip justify-center">
                Our Services
              </p>
              <h2 className="text-5xl leading-[150%] font-medium text-gray-800">
                Our Expertise Is Your
                <br />
                Competitive Edge
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full bg-gray-700 flex items-center justify-center max-w-[554px] h-[700px] clip-Card clip-Card-left-white">
                  <Image
                    src={data?.expertise?.banner}
                    height={630}
                    width={500}
                    alt={data?.expertise?.title}
                    className="h-full w-full object-cover mx-auto"
                  />
                </div>
              </div>

              {/* <div className="space-y-4">
                <div className="bg-gray-800 text-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">
                    Financial Technology Solutions
                  </h3>
                  <p className="text-gray-300">
                    We provide cutting-edge fintech solutions that help businesses
                    optimize their financial operations.
                  </p>
                </div>
      
                <div className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-bold text-xl text-gray-800">
                    Digital Payment Systems
                  </h3>
                </div>
      
                <div className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-bold text-xl text-gray-800">
                    Business Intelligence & Analytics
                  </h3>
                </div>
      
                <div className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-bold text-xl text-gray-800">
                    AI and Automation
                  </h3>
                </div>
      
                <div className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-bold text-xl text-gray-800">
                    Digital Transformation
                  </h3>
                </div>
              </div> */}

              <div className="space-y-4 max-w-4xl mx-auto p-6">
                {data?.expertise?.section.map((section) => {
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
                          isActive
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
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
            </div>
          </div>
        </section>

        {/* Contact Form Section */}

        {/* Footer */}
      </div>

      {/* <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        // title="Example Modal"
        size="full"
        showCloseButton={true}
        closeOnOverlayClick={true}
        closeOnEscape={true}
      >
        <div className="grid grid-cols-5 gap-10 aspect-5/2 relative">
          <div>

          </div>
          <div>

          </div>
        </div>
      </Modal> */}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        // title="Example Modal"
        size="full"
        showCloseButton={true}
        closeOnOverlayClick={true}
        closeOnEscape={true}
      >
        <div className="grid grid-cols-5 gap-10 aspect-5/2 relative">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YizSijt0AC4?si=gqAbcVNuW9cioH1T"
            title="YouTube video player"
            frameBorder="0" // Changed from frameorder to frameBorder
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" // Changed from referrerpolicy to referrerPolicy
            allowFullScreen // Changed from allowfullscreen to allowFullScreen
            className="w-full h-full"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          />
        </div>
      </Modal>
    </>
  );
}
