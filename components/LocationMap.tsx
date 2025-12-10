"use client";
import React, { useState, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Globe } from "./ui/globe";
import { COBEOptions } from "cobe";
import { DottedMap } from "./ui/dotted-map";

interface Location {
  id: number;
  name: string;
  country: string;
  lat: number; // latitude
  lng: number; // longitude
}

const locations: Location[] = [
  { id: 1, name: "Lagos", country: "Nigeria", lat: 6.5244, lng: 3.3792 },
  { id: 2, name: "New Delhi", country: "India", lat: 28.6139, lng: 77.209 },
  {
    id: 3,
    name: "Johannesburg",
    country: "South Africa",
    lat: -26.2041,
    lng: 28.0473,
  },
  { id: 4, name: "Tripoli", country: "Libya", lat: 32.8872, lng: 13.1913 },
  { id: 5, name: "Accra", country: "Ghana", lat: 5.6037, lng: -0.187 },
  { id: 6, name: "Nairobi", country: "Kenya", lat: -1.2921, lng: 36.8219 },
  {
    id: 7,
    name: "Port Louis",
    country: "Mauritius",
    lat: -20.1609,
    lng: 57.5012,
  },
  {
    id: 8,
    name: "Dar es Salaam",
    country: "Tanzania",
    lat: -6.7924,
    lng: 39.2083,
  },
];

export default function LocationMap() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  // Convert lat/lng to angles (phi, theta)
  const locationToAngles = (lat: number, lng: number): [number, number] => {
    return [
      Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ];
  };

  // Focus ref for smooth rotation - initialized to center view
  const focusRef = useRef<[number, number]>([0, 0]);

  // Handle location click
  const handleLocationClick = (lat: number, lng: number, id: number) => {
    setSelectedLocation(id);
    focusRef.current = locationToAngles(lat, lng);
  };

  // Globe configuration with brand colors
  const globeConfig: COBEOptions = {
    width: 1200,
    height: 1200,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    scale: 1,
    mapBrightness: 1.7,
    baseColor: [1, 1, 1], // Transparent/white (makes globe invisible)
    markerColor: [254 / 255, 217 / 255, 102 / 255], // #FED966 secondary color
    glowColor: [1, 1, 1], // Transparent glow
    markers: locations.map((loc) => ({
      location: [loc.lat, loc.lng],
      size: loc.id === selectedLocation ? 0.12 : 0.08,
    })),
  };

  return (
    <section className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mx-auto max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-medium text-brand-500 mb-4">
            You Can Find Us At These Locations Around The World
          </h2>
        </div>
      </div>

      <div className="text-center relative z-10">
        <div className="inline-flex gap-4 items-center">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => handleLocationClick(loc.lat, loc.lng, loc.id)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 text-left  ${
                selectedLocation === loc.id
                  ? "border-secondary-500 bg-secondary-50 shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:border-brand-500 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt
                  className={`text-xl  transition-colors ${
                    selectedLocation === loc.id
                      ? "text-secondary-500"
                      : "text-brand-500"
                  }`}
                />
                <div>
                  {/* <h3 className="text-lg font-semibold text-brand-500 mb-1">
                    {loc.name}
                  </h3> */}
                  <p className="text-sm text-gray-600">{loc.country}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Globe */}
      <div className="h-[600px] -mt-14 max-w-5xl mx-auto relative overflow-hidden">
        <Globe
          config={globeConfig}
          className="!max-w-[60vw]"
          autoRotate={false}
          focusRef={focusRef}
        />
      </div>

      {/* Location Buttons */}
    </section>
  );
}
