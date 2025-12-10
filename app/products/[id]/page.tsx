"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import { HiChevronRight, HiOutlineChip } from "react-icons/hi";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Icons } from "@/icons/icons";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ShineBorder } from "@/components/ui/shine-border";

// Type definitions
interface Feature {
  title: string;
  description: string;
  image?: string;
}

interface Benefit {
  title: string;
  description: string;
  image?: string;
}

interface SuccessStory {
  name: string;
  logo: string;
}

interface Product {
  id: string | number;
  name: string;
  title?: string;
  description?: string;
  introImage?: string;
  heroImage?: string;
  introHeading?: string;
  introContent?: string;
  introLists?: string[];
  features?: Feature[];
  benefits?: Benefit[];
  successStories?: SuccessStory[];
}

interface PageProps {
  params: {
    id: string;
  };
}

// Generate static params for all products (replaces getStaticPaths)
// export async function generateStaticParams() {
//   return (products as Product[]).map((product) => ({
//     id: product.id.toString(),
//   }));
// }

// Generate metadata for SEO (optional)
// export function generateMetadata({ params }: PageProps) {
//   const resolvedParams = params;
//   const product = (products as Product[]).find(
//     (item) => item.id.toString() === resolvedParams.id
//   );

//   if (!product) {
//     return {
//       title: "Product Not Found",
//     };
//   }

//   return {
//     title: `${product.name} Solutions | Fasyl`,
//     description: product.description || `Digital solutions for ${product.name}`,
//   };
// }

export default function ProductPage({ params }: PageProps) {
  const resolvedParams = params;

  // Find the product with the matching ID
  const product = (products as Product[]).find(
    (item) => item.id.toString() === resolvedParams.id
  );

  // If product not found, trigger 404
  if (!product) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Fallback Image (shown if video fails to load) */}
          <Image
            src={product.heroImage || "/images/industries/industry-hero.jpg"}
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
            <span>{product.title}</span>
          </h1>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            {product.description}
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
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-semibold mb-6"
              >
                {product.introHeading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-gray-700 mb-6 leading-relaxed"
              >
                {product.introContent}
              </motion.p>
              <ul className=" space-y-3">
                {product.introLists?.map((list, index) => {
                  return (
                    <li className="flex gap-2 items-center " key={index}>
                      <CheckCircle2 className="text-green-700" size={20} />
                      <p>{list}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="p-10">
              <div className="relative rounded-2xl z-10  overflow-hidden h-[550px] ">
                <Image
                  src={product.introImage || "/images/about-sub.png"}
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

      {/* Features Section */}
      <section className="px-5 py-12">
        <div className="max-w-7xl mx-auto px-4 ">
          <p>FEATURES</p>
          <h3 className="text-5xl font-semibold mb-12">
            Solutions for {product.name}
          </h3>

          <div className="grid md:grid-cols-3 gap-5">
            {product.features?.map((feature: Feature, index: number) => (
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
                <h4 className=" text-lg font-semibold">{feature.title}</h4>
                <p className="text-base leading-[150%]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
