"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { useContactModal } from "@/contexts/ContactModalContext";
import Image from "next/image";
// import PhoneInput from "react-phone-number-input";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [value, setValue] = useState<string>();

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      // title="Example Modal"
      size="xl"
      showCloseButton={true}
      closeOnOverlayClick={true}
      closeOnEscape={true}
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div className=" space-y-3 text-white">
          <h3 className=" font-medium text-white text-3xl">Contact Us</h3>
          <p className="text-white text-sm pb-4">
            Our friendly team would love to hear from you.
          </p>
          <div className="grid md:grid-cols-2 gap-4 gap-y-5">
            <div>
              <p className="text-xs font-medium mb-1">First name</p>
              <input
                className="input-secondary w-full"
                placeholder="First name"
              />
            </div>
            <div>
              <p className="text-xs font-medium mb-1">Last name</p>
              <input
                className="input-secondary w-full"
                placeholder="Enter lastname"
              />
            </div>
            <div>
              <p className="text-xs font-medium mb-1">Email</p>
              <input
                className="input-secondary w-full"
                placeholder="Enter email"
              />
            </div>
            <div>
              <p className="text-xs font-medium mb-1">Phone</p>
              <input
                className="input-secondary w-full"
                placeholder="Enter phone"
              />
              {/* <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              /> */}
            </div>
            <div className="col-span-2">
              <p className="text-xs font-medium mb-1">Company name</p>
              <input
                className="input-secondary w-full"
                placeholder="Enter company name"
              />
            </div>
            <div className="col-span-2">
              <p className="text-xs font-medium mb-1">Messaage</p>
              <textarea
                className="input-secondary w-full h-30"
                placeholder="Start typing..."
              />
            </div>
          </div>
        </div>
        <div className="relative min-h-40 z-[1] -mt-8 -mb-8 -mr-6 rounded-r-2xl overflow-hidden">
          <Image
            src="/images/awward.jpg"
            alt="Hero Background"
            fill
            className="object-cover -z-10 w-full h-full"
            priority
          />
        </div>
      </div>
    </Modal>
  );
}
