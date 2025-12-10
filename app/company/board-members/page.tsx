"use client";
import Image from "next/image";
import React, { useState } from "react";
import people from "@/data/people.json";
import Modal from "@/components/Modal";
import { ProfileProps } from "@/utils/interface";
import { ShineBorder } from "@/components/ui/shine-border";
import { motion } from "motion/react";
import Link from "next/link";
import SubfooterContent from "@/components/SubfooterContent";

export default function BoardMemberPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<ProfileProps | null>(
    null
  );
  return (
    <>
      <div>
        <section className="px-5 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className=" col-span-1 md:col-span-2 lg:col-span-3">
              <p className="text-gray-400">BOARD OF DIRECTORS</p>
              <h3 className="text-5xl font-semibold mb-4">
                Meet Our Board Of Directors
              </h3>
              <p>
                Meet the visionary leaders guiding Fasyl&apos;s strategic
                direction. Our board brings decades of combined experience in
                technology, finance, and global business, driving our mission to
                transform enterprises worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="py-20 max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 gap-y-20">
              {people
                .filter((itm) => itm.category === "board")
                .map((item, index) => (
                  <div
                    key={index}
                    className=" cursor-pointer rounded-4xl overflow-hidden relative aspect-1/1.5 shadow-lg hover:shadow-2xl transition-shadow group"
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedProfile(item);
                    }}
                  >
                    <ShineBorder
                      shineColor="#FEDC71"
                      borderWidth={5}
                      className="group-hover:opacity-100  transition-opacity duration-300 opacity-0 z-20"
                    />
                    <Image
                      src={item.image}
                      height={688}
                      width={555}
                      alt="Picture"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-[#00162D] text-white p-5 pt-44 text-center">
                      <p className=" font-semibold mb-2 text-lg uppercase">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-400 uppercase">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <SubfooterContent />
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        // title="Example Modal"
        size="xl"
        showCloseButton={true}
        closeOnOverlayClick={true}
        closeOnEscape={true}
      >
        <div className="grid grid-cols-5 gap-10">
          <div className=" col-span-2">
            <div className="w-full aspect-1/1.5 rounded-4xl overflow-hidden">
              <Image
                src={selectedProfile?.image || ""}
                height={688}
                width={555}
                alt="banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-3 flex flex-col">
            <div
              className="text-gray-300 text-sm mb-8 content flex-1"
              dangerouslySetInnerHTML={{
                __html: selectedProfile?.about || "No Bio available",
              }}
            />
            <p className="title-tip-secondary text-secondary-500 font-semibold mb-1 text-md uppercase">
              {selectedProfile?.name}
            </p>
            <p className="text-xs text-gray-400 uppercase">
              {selectedProfile?.description}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
