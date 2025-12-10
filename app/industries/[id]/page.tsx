"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
// import partners from "@/data/partners.json";
import industries from "@/data/industries.json";
// import { PiCaretRightLight } from "react-icons/pi";
import { Partner } from "@/utils/interface";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { HiChevronRight } from "react-icons/hi";
import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "motion/react";
import { Icons } from "@/icons/icons";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ShineBorder } from "@/components/ui/shine-border";

// Type definitions
interface Solution {
  title: string;
  description: string;
  image?: string;
}

interface Industry {
  id: string | number;
  name: string;
  title?: string;
  heroText?: string;
  description?: string;
  heroImage?: string;
  solutions?: Solution[];
  successStories?: Partner[];
  subImages?: string[];
}

interface PageProps {
  params: {
    id: string;
  };
}

// Note: generateStaticParams and generateMetadata cannot be used in client components
// These functions have been removed to allow motion/react animations
// The page will be rendered dynamically instead of statically pre-rendered

export default function IndustriesPage({ params }: PageProps) {
  const resolvedParams = params;

  // Find the industry with the matching ID
  const industry = (industries as Industry[]).find(
    (item) => item.id.toString() === resolvedParams.id
  );

  // If industry not found, trigger 404
  if (!industry) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Fallback Image (shown if video fails to load) */}
          <Image
            src={industry.heroImage || "/images/industries/industry-hero.jpg"}
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
            <span>{industry.title}</span>
          </h1>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            {industry.heroText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="btn btn-secondary">
              Schedule A Call
              <HiChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 overflow-hidden">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xl font-medium text-brand-500 mb-12">
            Trusted by 50+ Global Companies
          </p>

          {/* Infinite Slider */}
          <div className="relative">
            <Marquee pauseOnHover className="[--duration:30s] grid-cols-3">
              {(industry.successStories as Partner[]).map((solution, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={solution.logo || "/images/office.jpg"}
                    alt={solution.name}
                    width={100}
                    height={60}
                    className="object-contain h-16 w-[200px]"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-semibold mb-6"
              >
                Seamless Business Transformation With Fasyl
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-gray-700 mb-6 leading-relaxed"
              >
                Successful business transformation requires seamless,
                frictionless change management. Fasyl facilitates this
                transition through comprehensive products and services designed
                for long-term organizational growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <Link href="/company/about-us" className="btn btn-primary">
                  Schedule A Call
                </Link>
              </motion.div>
            </div>

            <div className="p-10">
              <div className="relative rounded-2xl z-10 bg-[#B7E0F3] h-[450px] ">
                <div className="absolute border border-gray-100 -z-10 -right-12 -bottom-12 h-full w-full rounded-lg  ">
                  <BorderBeam
                    size={100}
                    duration={10}
                    borderWidth={3}
                    initialOffset={50}
                  />
                  <BorderBeam
                    size={100}
                    duration={10}
                    borderWidth={3}
                    initialOffset={100}
                  />
                </div>
                {/* <BorderBeam size={300} duration={10} /> */}
                <div className="absolute -left-14 -top-14 h-full w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={industry?.subImages?.[0] || "/images/teams.png"}
                    alt="Business collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  // style={{ y: -2 }}
                  className=" absolute -bottom-14 -left-6 "
                >
                  <div className="flex items-center gap-4 max-w-[270px] bg-gray-100 text-brand-500 px-6 py-4 rounded-lg shadow-lg">
                    <div className="w-12 h-12 mb-2 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold">
                      <Icons.users size={24} />
                    </div>
                    <p className="text-sm flex-1">
                      Digital Transformation for Customers
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 max-w-[300px] absolute -top-6 -right-14 bg-gray-100 text-brand-500 px-6 py-4 rounded-lg shadow-xl">
                  <div className="w-12 h-12 mb-2 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold">
                    <Icons.dashboard size={24} />
                  </div>
                  <p className="text-sm flex-1">
                    Integrated Data Platform for Reporting and Analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="max-w-7xl mx-auto px-4 ">
          <p>HOW WE DO IT</p>
          <h3 className="text-5xl font-semibold mb-12">
            Solutions for {industry.name}
          </h3>

          <div className="grid md:grid-cols-3 gap-5">
            {industry.solutions &&
              industry.solutions.map((solution: Solution, index: number) => (
                <div
                  key={index}
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

                  <div className="mb-8">
                    <div className="w-14 h-14 bg-[#B7E0F3] rounded-full flex items-center justify-center  transition-colors">
                      <Icons.chatbot className="text-4xl txt-[#1AA3E3]" />
                    </div>
                  </div>
                  <h4 className=" text-lg font-semibold">{solution.title}</h4>
                  <p className="text-base leading-[150%]">
                    {solution.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
