"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    // image:"/pic",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    // image:
    //   "tse2.mm.bing.net/th?id=OIP.BCkpODXjwF-xvWchOxI8gQHaE8&pid=Api&P=0&h=220",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    // image:
    //   "tse2.mm.bing.net/th?id=OIP.BCkpODXjwF-xvWchOxI8gQHaE8&pid=Api&P=0&h=220",
  }
];

export function Workers() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
