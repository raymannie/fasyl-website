"use client";
import Image from "next/image";
import React from "react";
import { PiCaretRightLight } from "react-icons/pi";
import people from "@/data/people.json";
import about from "@/data/about.json";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link";
import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Icons } from "@/icons/icons";
import { ShineBorder } from "@/components/ui/shine-border";

export default function AboutPage() {
  const services = [
    {
      icon: <Icons.chatbot className="text-4xl text-[#FF6B35]" />,
      title: "Smart Automations    ",
      description:
        "Comprehensive Automation Solutions for a smart business ecosystem.",
    },
    {
      icon: <Icons.chatbot className="text-4xl text-[#FF6B35]" />,
      title: "Enterprise Solutions",
      description:
        "Optimizing data and workflow, increasing operational efficiency and enhancing productivity through a holistic approach to business an technology.",
    },
    {
      icon: <Icons.digital className="text-4xl text-[#FF6B35]" />,
      title: "Digital Infrastructure Services",
      description:
        "Helping you adapt to evolving business and technology landscape with end-to-end digital infrastructure services.",
    },
    {
      icon: <Icons.office className="text-4xl text-[#FF6B35]" />,
      title: "Government Resource Planning",
      description:
        "Enabling governments to deliver economic growth, accountability and transparency.",
    },
    {
      icon: <Icons.shield className="text-4xl text-[#FF6B35]" />,
      title: "Testing Assurance Services",
      description:
        "Ensuring seamless and consistent performance of your organization’s system and applications through comprehensive testing solutions.",
    },
    {
      icon: <Icons.star className="text-4xl text-[#FF6B35]" />,
      title: "Industry Point Solution",
      description:
        "Delivering sustainble business growth for organziations through application-specific knowledge, experience and best practices.",
    },
  ];
  return (
    <div>
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Fallback Image (shown if video fails to load) */}
          <Image
            src={"/images/about-banner.jpg"}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            // width={1440}
            // height={600}
          />

          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-secondary-600 mb-6 leading-tight text-3xl md:text-5xl font-semibold">
            <span>We Are Africa’s Premium Technology Powerhouse</span>
          </h1>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            As Africa&apos;s Premium Technology Powerhouse we central banks,
            regulators, and banks of every scale with sharp, secure tech and
            tailored fintech tools, redefining how Africa&apos;s financial
            systems connect and thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="btn btn-secondary">
              Schedule A Call
              <HiChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <p>WHO ARE WE?</p>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-semibold mb-6"
              >
                Transforming businesses through technology
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-gray-700 mb-6 leading-relaxed"
              >
                Fasyl Technology Group was founded in 1998 with the name Finance
                Applications System Limited and has metamorphosized from a
                one-country financial institution to a multiple-country
                technology conglomerate, covering aspects of not just financial
                technology but other industries and markets. Currently, Fasyl,
                with its 13-country operational office presence, services over
                100 countries and beyond, including small, medium, and large
                institutions in finance, telecommunications, manufacturing, the
                public sector, and more.
              </motion.p>
            </div>

            <div className="p-10">
              <div className="relative rounded-2xl z-10  overflow-hidden h-[550px] ">
                <Image
                  src="/images/about-sub.png"
                  alt="Business collaboration"
                  fill
                  className="object-cover"
                />
                {/* <BorderBeam size={300} duration={10} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 mb-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.story.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-brand-600 relative p-8 rounded-lg hover:bg-brand-700 transition-colors duration-200"
              >
                <FlickeringGrid
                  className="absolute inset-0 z-0 size-full"
                  squareSize={2}
                  gridGap={2}
                  color="#6B7280"
                  maxOpacity={0.5}
                  flickerChance={0.1}
                  // height={800}
                  // width={800}
                />
                <div className="text-5xl z-10 font-medium relative text-secondary-500  mb-3 flex items-center">
                  <NumberTicker
                    className="text-secondary-500"
                    value={Number(stat.number)}
                  />
                  {" +"}
                </div>
                <div className="text-white text-base z-10 relative">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex items-center justify-center">
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-5xl font-semibold mb-12"
              >
                Cutting-Edge Enterprise Solutions for Digital Age
              </motion.h3>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <p className="mb-3 text-base">
                Our enterprise solutions combine advanced technology with proven
                expertise to drive innovation, streamline operations, and
                accelerate growth for modern organizations{" "}
              </p>
              <button className="btn btn-primary">Learn More</button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="p-6 space-y-4 rounded-2xl bg-gray-100 relative overflow-hidden hover:bg-gray-200 transition-all group"
              >
                <ShineBorder
                  shineColor="#FEDC71"
                  borderWidth={5}
                  className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 z-20"
                />
                <FlickeringGrid
                  className="absolute inset-0 z-0 size-full"
                  squareSize={3}
                  gridGap={3}
                  color="#ddd"
                  maxOpacity={0.5}
                  flickerChance={0.1}
                />

                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-full flex items-center justify-center  transition-colors">
                      {/* <Icons.chatbot className="text-4xl txt-[#1AA3E3]" /> */}
                      {solution.icon}
                    </div>
                  </div>
                  <h4 className=" text-lg font-semibold">{solution.title}</h4>
                  <p className="text-base leading-[150%]">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-30">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="">
              <div className="relative rounded-2xl z-10  overflow-hidden h-[550px] ">
                <Image
                  src="/images/about-sub.png"
                  alt="Business collaboration"
                  fill
                  className="object-cover"
                />
                {/* <BorderBeam size={300} duration={10} /> */}
              </div>
            </div>

            <div className="lg:pl-30">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <p>OUR VISION</p>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-semibold mb-6"
              >
                Shaping tomorrow&apos;s digital landscape
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-gray-700 mb-6 leading-relaxed"
              >
                To be the leading technology solutions provider to institutions
                and partners in our selected markets.
              </motion.p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 items-center">
            <div className="lg:pr-30">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <p>OUR MISSION</p>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-semibold mb-6"
              >
                Empowering businesses through innovation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-gray-700 mb-6 leading-relaxed"
              >
                To be the leading technology solutions provider to institutions
                and partners in our selected markets.
              </motion.p>
            </div>

            <div className="">
              <div className="relative rounded-2xl z-10  overflow-hidden h-[550px] ">
                <Image
                  src="/images/about-sub.png"
                  alt="Business collaboration"
                  fill
                  className="object-cover"
                />
                {/* <BorderBeam size={300} duration={10} /> */}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 items-start relative">
            <div className="lg:pr-30 sticky top-40">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-semibold mb-6"
              >
                Our fasyl story
              </motion.h2>
            </div>

            <div className=" space-y-7">
              <p>
                Fasyl Technology Group was founded in 1999 with the name Finance
                Applications System Limited and has metamorphosized from a
                one-country financial institution to a multiple-country
                technology conglomerate, covering aspects of not just financial
                technology but other industries and markets. Currently, Fasyl,
                with its 13-country operational office presence, services over
                100 countries and beyond, including small, medium, and large
                institutions in finance, telecommunications, manufacturing, the
                public sector, and more.
              </p>

              <p>
                Today, Fasyl Technology Group is proud to employ over 200
                dedicated professionals who drive innovation and deliver
                exceptional solutions from our offices in South Africa, India,
                and sub-Saharan Africa. With over 100 core organization
                re-engineering and transformation projects completed, we have
                consistently demonstrated our expertise and dedication to
                fostering business growth. Our journey is a testament to our
                relentless pursuit of excellence and our commitment to shaping
                the future of financial technology for our clients.
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
        </div>
      </section>
    </div>
  );
}
