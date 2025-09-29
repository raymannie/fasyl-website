import Image from "next/image";
import React from "react";
import { PiCaretRightLight } from "react-icons/pi";
import people from "@/data/people.json";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-brand-500 text-white pb-60">
        <div className="px-5 md:px-10 pt-16 pb-15">
          <div className="grid gap-12 items-center">
            <div className="max-w-[912px] mx-auto text-center">
              <p className="title-tip text-md text-secondary-500 mb-4">
                About Fasyl Technology
              </p>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                We&apos;re Your Partner In
                <br />
                Innovating Tomorrow&apos;s Financial
                <br />
                Solutions Today
              </h1>
              <p className="text-gray-300 text-sm leading-[180%] mb-8 max-w-[558px] mx-auto">
                At Fasyl, we&apos;ve dedicated the last 26 years to providing
                top-notch technology solutions for clients across various
                industries including banking, telecommunications, insurance,
                government, and more.
              </p>
              <button className="btn btn-secondary">
                Schedule a call <PiCaretRightLight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* banner section */}
      <section className=" pb-30">
        <div className="relative px-5 -mt-60">
          <div className="w-full  flex items-center justify-center h-[600px] ml-auto clip-Card clip-Card-right-brand">
            <Image
              src={"/images/about-banner.jpg"}
              height={683}
              width={1360}
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* story section */}
      <section className="px-5 mb-20">
        <div className="grid md:grid-cols-2 gap-30 bg-[#00162D] py-20 px-20 text-white">
          <div>
            <h3 className="text-3xl mb-20 text-secondary-500">
              Story of Fasyl
            </h3>
            <div className="grid grid-cols-2 gap-10  bg-[#0C2137] p-10">
              <div>
                <div className="text-3xl font-meduim ">25+</div>
                <div className="text-gray-400 text-sm">
                  International OEM partners
                </div>
              </div>
              <div>
                <div className="text-3xl font-meduim ">200+</div>
                <div className="text-gray-400 text-sm">
                  Locations Across The Globe
                </div>
              </div>
              <div>
                <div className="text-3xl font-meduim ">Over 35%</div>
                <div className="text-gray-400 text-sm">
                  Banks in Africa Served
                </div>
              </div>
              <div>
                <div className="text-3xl font-meduim ">95%</div>
                <div className="text-gray-400 text-sm">
                  Of Nigerian Institutions Served
                </div>
              </div>
              <div>
                <div className="text-3xl font-meduim ">32</div>
                <div className="text-gray-400 text-sm">
                  Countries in Sub-Saharan Africa Empowered
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <p>
              Fasyl Technology Group was founded in 1999 with the name Finance
              Applications System Limited and has metamorphosized from a
              one-country financial institution to a multiple-country technology
              conglomerate, covering aspects of not just financial technology
              but other industries and markets. Currently, Fasyl, with its
              13-country operational office presence, services over 100
              countries and beyond, including small, medium, and large
              institutions in finance, telecommunications, manufacturing, the
              public sector, and more.
            </p>
            <p>
              Today, Fasyl Technology Group is proud to employ over 200
              dedicated professionals who drive innovation and deliver
              exceptional solutions from our offices in South Africa, India, and
              sub-Saharan Africa. With over 100 core organization re-engineering
              and transformation projects completed, we have consistently
              demonstrated our expertise and dedication to fostering business
              growth. Our journey is a testament to our relentless pursuit of
              excellence and our commitment to shaping the future of financial
              technology for our clients.
            </p>
            <p>
              Fasyl has a unique presence in the market by developing local
              resources with a global perspective. While 99.9% of technology
              software service vendors rely on foreign resources for
              enterprise-level products, Fasyl provides full-resource capacity
              independently of any foreign OEMs. We excel in selling,
              implementing, and supporting financial software products with an
              highly skilled team.
            </p>
          </div>
        </div>
      </section>

      {/* vision section */}
      <section className="px-5">
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

      {/* believe section */}
      <section className="px-5">
        <div className="py-20">
          <h3 className="text-3xl text-brand-500 text-center mb-10">
            Beliefs & Values
          </h3>
          <div className="grid md:grid-cols-2 text-white gap-5">
            <div className="p-10 bg-[#00162D] space-y-4 rounded-2xl">
              <div className="h-[400px] w-full">
                <Image
                  src={"/images/office.jpg"}
                  height={688}
                  width={555}
                  alt="banner"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="title-tip text-2xl text-secondary-500">
                Integrity
              </h4>
              <p className="text-sm leading-[150%]">
                At Fasyl, integrity is the cornerstone of our operations. We are
                committed to delivering quality service that ensures client
                satisfaction and upholds the highest ethical standards.
                Integrity for us means protecting the sensitive data of our
                customers from any form of breach. Our
                zero-tolerance-for-failure mentality drives us to embrace
                challenges and maintain the trust of our clients.
              </p>
              <button className="btn btn-secondary">
                Learn More <PiCaretRightLight />
              </button>
            </div>
            <div className="p-10 bg-[#00162D] space-y-4 rounded-2xl">
              <div className="h-[400px] w-full">
                <Image
                  src={"/images/office.jpg"}
                  height={688}
                  width={555}
                  alt="banner"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="title-tip text-2xl text-secondary-500">
                Professionalism
              </h4>
              <p className="text-sm leading-[150%]">
                This is pivotal to our core values and it permeates every aspect
                of our businesses. Selling our products or delivering support,
                our professional approach upholds the truth about our service
                capabilities. In addition, our commitment to professionalism
                ensures that we provide accurate, reliable information and
                services, maintaining our reputation as a trusted partner in the
                industry.
              </p>
              <button className="btn btn-secondary">
                Learn More <PiCaretRightLight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="py-20">
          <h4 className="text-5xl text-brand-500 text-center mb-20 max-w-[600px] mx-auto">
            Meet our board of directors and executive team
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 gap-y-20">
            {people.map((item, index) => (
              <div key={index}>
                <div className="w-full aspect-1/1.5 mb-5">
                  <Image
                    src={item.image}
                    height={688}
                    width={555}
                    alt="banner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="title-tip-brand font-semibold mb-2 text-xl uppercase">
                  {item.name}
                </p>
                <p className="text-sm text-gray-400 uppercase">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
