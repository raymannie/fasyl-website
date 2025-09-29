import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
