"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiCaretDownLight } from "react-icons/pi";
import products from "@/data/products.json";
import industries from "@/data/industries.json";
import { useNavigation } from "@/hooks/useNavigation";

export default function Navigation() {
  const { getLinkClasses, getDropdownLinkClasses } = useNavigation();
  return (
    <nav className="sm:flex items-center justify-between px-5 md:px-10 py-4 bg-brand-500 shadow-sm">
      <div className="flex items-center">
        <Image
          src={"/images/logo.png"}
          alt="Company Logo"
          height={56}
          width={150}
        />
      </div>
      <nav className="">
        <ul className="sm:flex space-x-6 px-6 text-sm">
          <li className="relative group">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
          </li>

          <li className="relative group">
            <button
              className={getLinkClasses(
                "/products",
                "flex items-center py-1 hover:text-gray-300"
              )}
            >
              Products
              <PiCaretDownLight className="ml-2" size={16} />
            </button>
            <ul className="absolute p-4 left-0 mt-0 hidden w-[250px] rounded-md bg-secondary-500 shadow-lg group-hover:block z-20 overflow-hidden">
              {products.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/products/${item.id}`}
                    className={getDropdownLinkClasses(`/products/${item.id}`)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="relative group">
            <button
              className={getLinkClasses(
                "/industries",
                "flex items-center py-1 hover:text-gray-300"
              )}
            >
              Industries
              <PiCaretDownLight className="ml-2" size={16} />
            </button>
            <ul className="absolute p-4 left-0 mt-0 hidden w-[250px] rounded-md bg-secondary-500 shadow-lg group-hover:block z-20 overflow-hidden">
              {industries.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/industries/${item.id}`}
                    className={getDropdownLinkClasses(`/industries/${item.id}`)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="relative group">
            <button
              className={getLinkClasses(
                "/company",
                "flex items-center py-1 hover:text-gray-300"
              )}
            >
              Company
              <PiCaretDownLight className="ml-2" size={16} />
            </button>
            <ul className="absolute p-4 left-0 mt-0 hidden w-[250px] rounded-md bg-secondary-500 shadow-lg group-hover:block z-20 overflow-hidden">
              <li>
                <Link
                  href={`/company/about-us`}
                  className={getDropdownLinkClasses(`/company/about-us`)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={`/company/board-members`}
                  className={getDropdownLinkClasses(`/company/board-members`)}
                >
                  Board of direrctors
                </Link>
              </li>
              <li>
                <Link
                  href={`/company/executive-members`}
                  className={getDropdownLinkClasses(
                    `/company/executive-members`
                  )}
                >
                  Executive Team
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button
              className={getLinkClasses(
                "/resources",
                "flex items-center py-1 text-white hover:text-gray-300"
              )}
            >
              Resources
              <PiCaretDownLight className="ml-2" size={16} />
            </button>
            <ul className="absolute p-4 left-0 mt-0 hidden w-[250px] rounded-md bg-secondary-500 shadow-lg group-hover:block z-20 overflow-hidden">
              <li>
                <Link
                  href={`/resources/case-studies`}
                  className={getDropdownLinkClasses(`/resources/case-studies`)}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href={`/resources/blog`}
                  className={getDropdownLinkClasses(`/resources/blog`)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={`/resources/faq`}
                  className={getDropdownLinkClasses(`/resources/faq`)}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link href="/careers" className={getLinkClasses(`/careers`)}>
              Career
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/contact-us" className="btn btn-secondary">
        Contact Us
      </Link>
    </nav>
  );
}
