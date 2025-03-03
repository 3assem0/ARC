import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 dark:bg-black bg-white">
      <h1 className="relative z-20 flex flex-col items-center text-4xl text-center sm:text-7xl font-bold py-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Some of our Projects
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    id: 1,
    title: "Skyline Towers",
    description:
      "A state-of-the-art commercial skyscraper featuring sustainable design elements, advanced energy systems, and cutting-edge architectural aesthetics.",
    link: "",
  },
  {
    id: 2,
    title: "Eden Gardens Community",
    description:
      "An eco-friendly residential complex designed to blend seamlessly with nature, featuring solar power integration and rainwater harvesting systems.",
    link: "",
  },
  {
    id: 3,
    title: "Aurora Museum",
    description:
      "A cultural landmark with an iconic façade and expansive interior spaces, designed to house art collections and immersive exhibitions.",
    link: "",
  },
  {
    id: 4,
    title: "Horizon Business Park",
    description:
      "A modern office complex offering flexible workspaces, green rooftops, and a smart building management system for improved efficiency.",
    link: "",
  },
  {
    id: 5,
    title: "Summit Plaza Mall",
    description:
      "A contemporary shopping and entertainment hub with innovative use of natural light, pedestrian-friendly design, and vibrant public spaces.",
    link: "",
  },
  {
    id: 6,
    title: "Pacific Wellness Resort",
    description:
      "A luxury wellness retreat featuring sustainable architecture, serene landscapes, and world-class spa facilities inspired by nature.",
    link: "",
  },
  {
    id: 7,
    title: "City Central Transit Hub",
    description:
      "An urban transit center combining functionality with artistic design, offering seamless connections between trains, buses, and public spaces.",
    link: "",
  },
  {
    id: 8,
    title: "Aspire Education Campus",
    description:
      "A modern educational institution designed with open, collaborative spaces and innovative use of eco-friendly materials.",
    link: "",
  },
  {
    id: 9,
    title: "The Haven Hotel",
    description:
      "A luxury hotel featuring a blend of traditional and contemporary architectural styles, offering a unique experience for travelers.",
    link: "",
  },
  {
    id: 10,
    title: "Legacy Heritage Center",
    description:
      "A cultural preservation project that revitalizes historic architecture while incorporating modern amenities and technologies.",
    link: "",
  },
  {
    id: 11,
    title: "Lakeside Pavilion",
    description:
      "A picturesque event space situated by the lake, designed with sweeping glass panels and natural wood finishes to harmonize with its surroundings.",
    link: "",
  },
  {
    id: 12,
    title: "SolarTech Innovation Center",
    description:
      "A cutting-edge research facility designed for renewable energy advancements, featuring solar panel façades and energy-efficient systems.",
    link: "",
  },
];
