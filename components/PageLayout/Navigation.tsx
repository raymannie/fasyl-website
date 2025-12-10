"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { usePathname } from "next/navigation";
import products from "@/data/products.json";
import industries from "@/data/industries.json";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if a path is active
  const isActive = (path: string) => pathname === path;
  const isActiveSection = (section: string) => pathname.startsWith(section);

  return (
    <>
      <div className="bg-secondary-400 py-1">
        <div className=" px-10 text-right">
          <p className="text-xs underline">Contact Us - support@fasyl.com</p>
        </div>
      </div>
      <nav className="bg-brand-500 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={"/images/logo.png"}
                  alt="Fasyl Logo"
                  height={50}
                  width={140}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`${
                  isActive("/")
                    ? "text-secondary-500"
                    : "text-white hover:text-secondary-500"
                } transition-colors duration-200 text-base font-medium`}
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <button
                  className={`${
                    isActiveSection("/products")
                      ? "text-secondary-500"
                      : "text-white hover:text-secondary-500"
                  } transition-colors duration-200 flex items-center gap-1 text-base font-medium`}
                >
                  Products
                  <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                  <div className="py-2">
                    {products.map((item) => (
                      <Link
                        key={item.id}
                        href={`/products/${item.id}`}
                        className={`block px-4 py-3 transition-colors duration-150 text-sm ${
                          isActive(`/products/${item.id}`)
                            ? "bg-secondary-500 text-brand-500"
                            : "text-gray-700 hover:bg-secondary-500 hover:text-brand-500"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group">
                <button
                  className={`${
                    isActiveSection("/industries")
                      ? "text-secondary-500"
                      : "text-white hover:text-secondary-500"
                  } transition-colors duration-200 flex items-center gap-1 text-base font-medium`}
                >
                  Industries
                  <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                  <div className="py-2">
                    {industries.map((item) => (
                      <Link
                        key={item.id}
                        href={`/industries/${item.id}`}
                        className={`block px-4 py-3 transition-colors duration-150 text-sm ${
                          isActive(`/industries/${item.id}`)
                            ? "bg-secondary-500 text-brand-500"
                            : "text-gray-700 hover:bg-secondary-500 hover:text-brand-500"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button
                  className={`${
                    isActiveSection("/company")
                      ? "text-secondary-500"
                      : "text-white hover:text-secondary-500"
                  } transition-colors duration-200 flex items-center gap-1 text-base font-medium`}
                >
                  Company
                  <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                  <div className="py-2">
                    <Link
                      href="/company/about-us"
                      className={`block px-4 py-3 transition-colors duration-150 text-sm ${
                        isActive("/company/about-us")
                          ? "bg-secondary-500 text-brand-500"
                          : "text-gray-700 hover:bg-secondary-500 hover:text-brand-500"
                      }`}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/company/board-members"
                      className={`block px-4 py-3 transition-colors duration-150 text-sm ${
                        isActive("/company/board-members")
                          ? "bg-secondary-500 text-brand-500"
                          : "text-gray-700 hover:bg-secondary-500 hover:text-brand-500"
                      }`}
                    >
                      Board of Directors
                    </Link>
                    <Link
                      href="/company/executive-members"
                      className={`block px-4 py-3 transition-colors duration-150 text-sm ${
                        isActive("/company/executive-members")
                          ? "bg-secondary-500 text-brand-500"
                          : "text-gray-700 hover:bg-secondary-500 hover:text-brand-500"
                      }`}
                    >
                      Executive Team
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  className={`${
                    isActiveSection("/resources")
                      ? "text-secondary-500"
                      : "text-white hover:text-secondary-500"
                  } transition-colors duration-200 flex items-center gap-1 text-base font-medium`}
                >
                  Resources
                  <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                  <div className="py-2">
                    <Link
                      href="/resources/case-studies"
                      className={`block px-4 py-3 transition-colors duration-150 text-sm ${
                        isActive("/resources/case-studies")
                          ? "bg-secondary-500 text-brand-500"
                          : "text-gray-700 hover:bg-secondary-500 hover:text-brand-500"
                      }`}
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/resources/blog"
                      className={`block px-4 py-3 transition-colors duration-150 text-sm ${
                        isActive("/resources/blog")
                          ? "bg-secondary-500 text-brand-500"
                          : "text-gray-700 hover:bg-secondary-500 hover:text-brand-500"
                      }`}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/resources/faq"
                      className={`block px-4 py-3 transition-colors duration-150 text-sm ${
                        isActive("/resources/faq")
                          ? "bg-secondary-500 text-brand-500"
                          : "text-gray-700 hover:bg-secondary-500 hover:text-brand-500"
                      }`}
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/careers"
                className={`${
                  isActive("/careers")
                    ? "text-secondary-500"
                    : "text-white hover:text-secondary-500"
                } transition-colors duration-200 text-base font-medium`}
              >
                Career
              </Link>
            </div>

            {/* Contact Button */}
            {/* <div className="hidden lg:block">
              <Link
                href="/contact-us"
                className="bg-secondary-500 text-brand-500 px-6 py-2.5 rounded-md font-semibold hover:bg-secondary-400 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div> */}
            <div></div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 rounded-md hover:bg-brand-600 transition-colors"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-600 border-t border-brand-400">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/")
                    ? "bg-brand-700 text-secondary-500"
                    : "text-white hover:bg-brand-700"
                }`}
              >
                Home
              </Link>
              <Link
                href="/careers"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/careers")
                    ? "bg-brand-700 text-secondary-500"
                    : "text-white hover:bg-brand-700"
                }`}
              >
                Career
              </Link>
              <Link
                href="/contact-us"
                className={`block px-3 py-2 rounded-md font-semibold mt-4 ${
                  isActive("/contact-us")
                    ? "bg-secondary-600 text-brand-500"
                    : "bg-secondary-500 text-brand-500"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
