import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/ContactModal";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        {children}
        <Footer />
      </div>
      <ContactModal />
    </ContactModalProvider>
  );
}
