"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useContactModal } from "@/contexts/ContactModalContext";
import LocationMap from "../LocationMap";
import products from "@/data/products.json";
import industries from "@/data/industries.json";
import { motion } from "motion/react";

export default function Footer() {
  const pathname = usePathname();
  const { openModal } = useContactModal();
  return (
    <>
      {/* Ready to Get Started Section */}

      <div
        className={
          pathname === "/"
            ? "mb-30"
            : "max-w-7xl mx-auto rounded-3xl overflow-hidden mb-30"
        }
      >
        <section
          className={"relative overflow-hidden bg-brand-500 text-white py-30"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                  className="text-2xl lg:text-5xl font-semibold mb-6"
                >
                  Ready To Get Started
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="text-lg text-gray-300 mb-8 leading-relaxed"
                >
                  Speak to one of our top professionals today to understand how
                  Fasyl can help you navigate your technological business needs.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <button onClick={openModal} className="btn btn-secondary">
                    Schedule A Call
                  </button>
                </motion.div>
              </div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="absolute top-1/2 right-0 w-1/2 rounded-l-full h-[120%] -translate-y-1/2  rounded-lg overflow-hidden "
              >
                <Image
                  src="/images/face-card.jpg"
                  alt="Ready to get started"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      {/* Only show LocationMap on home page */}
      {pathname === "/" && <LocationMap />}

      {/* Footer */}
      <footer className=" text-white py-16 border-t bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Image
                  src="/images/logo.png"
                  height={50}
                  width={140}
                  alt="Fasyl Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Great digital Banking, Payment Possibilities for individuals and
                Business everywhere
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-base text-gray-400 mb-4">
                Products
              </h4>
              <ul className="space-y-3 text-sm flex flex-col">
                {products.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold text-sm text-gray-400 mb-4">
                Industries
              </h4>
              <ul className="space-y-3 text-sm flex flex-col">
                {industries.map((item) => (
                  <Link
                    key={item.id}
                    href={`/industries/${item.id}`}
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="font-semibold text-sm text-gray-400 mb-4">
                About Us
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/company/about-us"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/board-members"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    Board of Directors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/executive-members"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    Executive Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/faq"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-sm text-gray-400 mb-4">
                Resources
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/resources/blog"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/case-studies"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/faq"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-sm text-gray-400 mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-brand-400 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 1998 - 2025 Fasylgroup. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Connect With Us:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/fasylgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-400 text-brand-500 flex items-center justify-center hover:bg-secondary-400 transition-colors"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="https://twitter.com/fasylgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-400 text-brand-500 flex items-center justify-center hover:bg-secondary-400 transition-colors"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href="https://www.facebook.com/fasylgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-400 text-brand-500 flex items-center justify-center hover:bg-secondary-400 transition-colors"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@Fasylgroup278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-400 text-brand-500 flex items-center justify-center hover:bg-secondary-400 transition-colors"
                >
                  <FaYoutube size={16} />
                </a>
                <a
                  href="https://www.instagram.com/fasyl_group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-400 text-brand-500 flex items-center justify-center hover:bg-secondary-400 transition-colors"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
