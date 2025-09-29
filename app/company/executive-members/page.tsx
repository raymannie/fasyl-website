"use client";
import Image from "next/image";
import React, { useState } from "react";
import people from "@/data/people.json";
import { ProfileProps } from "@/utils/interface";
import Modal from "@/components/Modal";

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<ProfileProps | null>(
    null
  );
  return (
    <>
      <div>
        <section className="bg-brand-500 text-white">
          <div className="px-5 md:px-10 py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center ">
              <div>
                <p className="title-tip text-md text-secondary-500 mb-4">
                  Executive Team
                </p>
                <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                  Meet Our Executive Team
                </h1>
              </div>

              <div>
                <p>
                  About Fasyl Technology We&apos;re Your Partner In Innovating
                  Tomorrow&apos;s Financial Solutions Today. At Fasyl,
                  we&apos;ve dedicated the last 26 years to providing top-notch
                  technology solutions for clients across various industries
                  including banking, telecommunications, insurance, government,
                  and more.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="py-20">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 gap-y-20">
              {people
                .filter((itm) => itm.category === "executives")
                .map((item, index) => (
                  <div
                    key={index}
                    className=" cursor-pointer"
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedProfile(item);
                    }}
                  >
                    <div className="w-full aspect-1/1.5 mb-5 clip-Card clip-Card-left-white">
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
            <div className="w-full aspect-1/1.5">
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
