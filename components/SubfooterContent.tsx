import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

export default function SubfooterContent() {
  return (
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
              Join Global Companies Transforming Their Businesses With Fasyl
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-gray-700 mb-6 leading-relaxed"
            >
              Leading organizations worldwide trust Fasyl to drive their digital
              transformation. Our proven solutions and expert team deliver
              measurable results that accelerate growth, optimize operations,
              and create competitive advantage across diverse industries.
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
            <div className="relative rounded-2xl z-10  overflow-hidden h-[550px] ">
              <Image
                src="/images/office-women.png"
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
  );
}
