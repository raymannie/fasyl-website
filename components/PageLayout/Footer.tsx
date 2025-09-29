import Image from "next/image";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import {
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";

export default function Footer() {
  return (
    <>
      <section className="py-20 bg-secondary-500">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Ready to Transform Your Business with Next-level Solutions?
              </h2>
              <p className="text-gray-700 mb-8">
                Speak to one of our top professionals today to understand how
                Fasyl can help provide your technological business needs.
              </p>
              <div className="flex gap-4">
                <button className="bg-brand-500 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors flex items-center">
                  Consultation <HiChevronRight className="ml-2" size={15} />
                </button>
                <button className="border border-brand-500 text-brand-500 px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-colors flex items-center">
                  Contact Us <HiChevronRight className="ml-2" size={15} />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-y-5 gap-x-3">
                {/* <div className="grid md:grid-cols-2 gap-4">
                </div> */}
                <div>
                  <input
                    placeholder="First Name"
                    type="text"
                    className="input"
                  />
                </div>
                <div>
                  <input
                    placeholder="Last Name"
                    type="text"
                    className="input"
                  />
                </div>

                <div>
                  <input placeholder="Email" type="email" className="input" />
                </div>
                <div>
                  <input
                    placeholder="Company Name"
                    type="email"
                    className="input"
                  />
                </div>
                <div>
                  <input
                    placeholder="Position"
                    type="email"
                    className="input"
                  />
                </div>
                <div>
                  <input
                    placeholder="Company Size"
                    type="email"
                    className="input"
                  />
                </div>

                <div className="col-span-2">
                  <textarea
                    placeholder="Message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none h-32 resize-none"
                  ></textarea>
                </div>

                <div>
                  <button className=" btn btn-primary">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 px-5 text-white py-16">
        <div className="mx-auto text-sm">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src={"/images/logo-small.png"}
                  height={28}
                  width={115}
                  alt="Fasyl Logo small"
                />
              </div>
              <p className="text-white text-sm mb-6">
                Great digital Banking, Payment Possibilities for individuals and
                Business everywhere
              </p>
            </div>

            <div>
              <h4 className="font-normal text-sm text-secondary-500 mb-6">
                About Us
              </h4>
              <div className="space-y-7 text-gray-400">
                <div>
                  <a href="#" className="hover:text-white">
                    Our Story
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Awards
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Testimonials
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-normal text-sm text-secondary-500 mb-6">
                Services
              </h4>
              <div className="space-y-7 text-gray-400">
                <div>
                  <a href="#" className="hover:text-white">
                    Oracle Digital Banking Experience
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Fasyl Digital and Enterprise Solutions
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Xnett
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-normal text-sm text-secondary-500 mb-6">
                Our Terms
              </h4>
              <div className="space-y-7 text-gray-400">
                <div>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Disclaimer
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              ©1998 - 2025 Fasylgroup. All right reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-400 mt-4 md:mt-0 text-lg">
              <p className="text-xs">Connect With Us:</p>
              <a href="#" className="logo">
                <PiLinkedinLogoLight />
              </a>
              <a href="#" className="logo">
                <PiYoutubeLogoLight />
              </a>
              <a href="#" className="logo">
                <PiInstagramLogoLight />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
