"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaPlay,
  FaCheckCircle,
  FaLightbulb,
  FaCog,
  FaRocket,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import homeData from "@/data/home.json";
import productsData from "@/data/products.json";
import LocationMap from "@/components/LocationMap";
import { BorderBeam } from "@/components/ui/border-beam";
import { Icons } from "@/icons/icons";
import { NumberTicker } from "@/components/ui/number-ticker";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ShineBorder } from "@/components/ui/shine-border";
import { Marquee } from "@/components/ui/marquee";
import { TextAnimate } from "@/components/ui/text-animate";
import { CometCard } from "@/components/ui/comet-card";
import { motion, useScroll, useTransform } from "motion/react";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const positionRef = React.useRef(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const parallaxRef = React.useRef<HTMLDivElement>(null);

  const { openModal } = useContactModal();

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for each element
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]); // Main image - slower
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Bottom card - medium
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]); // Top card - faster

  // Seamless infinite slider effect
  React.useEffect(() => {
    if (isHovered) return;

    let animationFrameId: number;
    const speed = 0.5; // Adjust speed (pixels per frame)

    const animate = () => {
      if (scrollerRef.current) {
        positionRef.current -= speed;

        // Get the width of one set of logos
        const scrollWidth = scrollerRef.current.scrollWidth / 2;

        // Reset position when first set is completely scrolled
        if (Math.abs(positionRef.current) >= scrollWidth) {
          positionRef.current = 0;
        }

        scrollerRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  // Prevent video from being paused
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePause = () => {
      video.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    };

    video.addEventListener("pause", handlePause);
    return () => video.removeEventListener("pause", handlePause);
  }, []);

  const stats = [
    { number: "26", label: "Years of Industry Experience" },
    { number: "100", label: "Clients Served Globally" },
    { number: "200", label: "Projects Completed" },
    { number: "150", label: "Industry Experts" },
  ];

  const services = [
    {
      icon: <Icons.business className="text-4xl text-secondary-500" />,
      title: "Business Process Review",
      description: "Comprehensive analysis to optimize your operations",
    },
    {
      icon: <Icons.gear className="text-4xl text-secondary-500" />,
      title: "Implementation Services",
      description: "Expert deployment of enterprise solutions",
    },
    {
      icon: <Icons.headphone className="text-4xl text-secondary-500" />,
      title: "Post-Implementation Support",
      description: "Ongoing assistance for seamless operations",
    },
    {
      icon: <Icons.chatbot className="text-4xl text-secondary-500" />,
      title: "Smart Automation",
      description: "Intelligent solutions to enhance efficiency",
    },
    {
      icon: <Icons.digital className="text-4xl text-secondary-500" />,
      title: "Digital Infrastructure",
      description: "Modern technology foundation for growth",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "I can't imagine the simplicity of the service and the simplicity of the software along with the company's support. It has been a very good time with them.",
      author: "J. Aderemi",
      company: "Union Bank Africa",
      logo: "/images/partners/union-bank.png",
    },
    {
      id: 2,
      quote:
        "I can't imagine the simplicity of the service and the simplicity of the software along with the company's support. It has been a very good time with them.",
      author: "O. Ibrahim",
      company: "NTHC Bank",
      logo: "/images/partners/nthc.png",
    },
    {
      id: 3,
      quote:
        "I can't imagine the simplicity of the service and the simplicity of the software along with the company's support. It has been a very good time with them.",
      author: "M. Adebayo",
      company: "Premium Trust Bank",
      logo: "/images/partners/premium-trust.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/innovate.jpg"
            className="object-cover w-full h-full"
          >
            <source src="/fasylhomepage.mp4" type="video/mp4" />
          </video>

          {/* Fallback Image (shown if video fails to load) */}
          <Image
            src="/images/innovate.jpg"
            alt="Hero Background"
            fill
            className="object-cover -z-10"
            priority
          />

          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-secondary-600 mb-6 leading-tight text-3xl md:text-5xl font-semibold">
            <TextAnimate animation="slideUp" by="word">
              Powering Innovation with Secure, Scalable Solutions
            </TextAnimate>
          </h1>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            <TextAnimate animation="slideUp" by="word">
              At Fasyl, your vision of resilient top-class growth is afforded
              business technology solutions through cutting-edge tools,
              unrivaled expertise, and dedicated support.
            </TextAnimate>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowVideo(true)}
              className="btn btn-secondary-outlined gap-3"
            >
              <FaPlay size={14} />
              Watch Video
            </button>
            <button onClick={openModal} className="btn btn-secondary">
              Schedule A Call
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {showVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-secondary-500"
              >
                ✕
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/YizSijt0AC4?si=IIJeqyj-eoHLAd06"
                title="Company Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>

      {/* Trusted By Section */}
      <section className="py-16 overflow-hidden">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xl font-medium text-brand-500 mb-12">
            Trusted by 50+ Global Companies
          </p>

          {/* Infinite Slider */}
          <div className="relative">
            <Marquee pauseOnHover className="[--duration:30s] grid-cols-3">
              {homeData.industry.partners.map((partner, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={70}
                    className="object-contain h-16 w-auto"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Business Transformation Section */}

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

            <div className="p-10" ref={parallaxRef}>
              <div className="relative rounded-2xl z-10 bg-secondary-400 h-[450px] ">
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
                <motion.div
                  style={{ y: y1 }}
                  className="absolute -left-14 -top-14 h-full w-full rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src="/images/teams.png"
                    alt="Business collaboration"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  style={{ y: y2 }}
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
                </motion.div>
                <motion.div
                  style={{ y: y3 }}
                  className="flex items-center gap-4 max-w-[300px] absolute -top-6 -right-14 bg-gray-100 text-brand-500 px-6 py-4 rounded-lg shadow-xl"
                >
                  <div className="w-12 h-12 mb-2 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold">
                    <Icons.dashboard size={24} />
                  </div>
                  <p className="text-sm flex-1">
                    Integrated Data Platform for Reporting and Analytics
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 mb-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
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

      {/* Our Products Section */}
      <section className=" bg-white">
        <div className="">
          <h2 className="text-center text-brand-500 mb-12 text-5xl font-semibold">
            Our Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 overflow-hidden relative h-[600px] text-center p-8 pt-30 hover:pt-12  hover:shadow-xl text-brand-500 hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <Image
                  src={product.introImage}
                  alt="Hero Background"
                  fill
                  className="object-cover absolute top-0 left-0 opacity-10 group-hover:opacity-5 transition-opacity duration-300"
                  priority
                />
                <ShineBorder
                  shineColor="#FEDC71"
                  borderWidth={5}
                  className="group-hover:opacity-100  transition-opacity duration-300 opacity-0 z-20"
                />
                <div className=" relative z-10">
                  <div className="mb-4">
                    <h3 className="text-2xl font-medium  mb-3 group-hover:text-secondary-500 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-5">{product.title}</p>
                  </div>
                  <div>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-sm text-secondary-500 inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold hover:underline"
                    >
                      Learn More
                      <HiChevronRight className="ml-1" size={18} />
                    </Link>
                  </div>
                </div>

                <div className=" overflow-hidden absolute -bottom-full left-1/2 -translate-x-1/2 w-[150%] h-[300px] rounded-t-full group-hover:bottom-[0] transition-all duration-500">
                  <Image
                    src={product.introImage}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Products Section */}
      <section className="py-20 relative bg-brand-500 text-white">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={2}
          gridGap={2}
          color="#6B7280"
          maxOpacity={0.4}
          flickerChance={0.1}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-center text-5xl font-semibold mb-4 max-w-5xl mx-auto">
            Innovative Products To Accelerate Your Business Growth
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${
                  index > 2 ? "col-span-3" : "col-span-2"
                } bg-brand-700 relative p-4 group hover:transform transition-all duration-300`}
              >
                <ShineBorder
                  shineColor="#FEDC71"
                  borderWidth={2}
                  className="group-hover:opacity-100  transition-opacity duration-300 opacity-0 z-20"
                />
                <div className="mb-8">
                  <div className="w-14 h-14 bg-secondary-50/5 rounded-full flex items-center justify-center  transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className=" text-brand-500 text-5xl mb-4 font-medium">
            Don&apos;t Take Our Word For It — <br /> Hear From Our Satisfied
            Clients
          </h2>

          <Marquee pauseOnHover className="[--duration:30s] grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-brand-500 w-[400px] relative text-white p-4 hover:shadow-2xl transition-shadow duration-300"
              >
                <p className=" mb-4 text-lg text-secondary-400">
                  {testimonial.quote}
                </p>
                <div className="mb-4">
                  <div className="font-medium text-sm text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {testimonial.company}
                  </div>
                </div>
                <Image
                  src={testimonial.logo}
                  alt={testimonial.company}
                  width={140}
                  height={32}
                  className="object-contain h-8 w-auto grayscale-100"
                />
              </div>
            ))}
          </Marquee>

          {/* <div className="grid md:grid-cols-3 gap-4 mt-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-brand-500 relative text-white p-4 hover:shadow-2xl transition-shadow duration-300"
              >
                <FlickeringGrid
                  className="absolute inset-0 z-0 size-full"
                  squareSize={10}
                  gridGap={10}
                  color="#6B7280"
                  maxOpacity={0.2}
                  flickerChance={0.1}
                />
                <p className=" mb-4 text-lg text-secondary-400">
                  {testimonial.quote}
                </p>
                <div className="mb-4">
                  <div className="font-medium text-sm text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {testimonial.company}
                  </div>
                </div>
                <Image
                  src={testimonial.logo}
                  alt={testimonial.company}
                  width={140}
                  height={32}
                  className="object-contain h-8 w-auto grayscale-100"
                />
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Location Map */}
    </>
  );
}
