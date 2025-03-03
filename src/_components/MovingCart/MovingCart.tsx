"use client";
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export function MovingCart() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
       <h1 className="relative z-20 flex flex-col items-center text-4xl text-center sm:text-7xl font-bold py-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">What our clients says?</h1>
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod voluptates quis recusandae fuga necessitatibus nihil soluta suscipit laborum beatae?"
    
      ,
    name: "Charles Dickens",
    title: "Lorem, ipsum.",
  },
  {
    quote:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod voluptates quis recusandae fuga necessitatibus nihil soluta suscipit laborum beatae?"
,    name: "William Shakespeare",
    title: "Lorem, ipsum.",
  },
  {
    quote:       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod voluptates quis recusandae fuga necessitatibus nihil soluta suscipit laborum beatae?"
    ,
    name: "Edgar Allan Poe",
    title: "Lorem, ipsum.",
  },
  {
    quote:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod voluptates quis recusandae fuga necessitatibus nihil soluta suscipit laborum beatae?"
    ,
    name: "Jane Austen",
    title: "Lorem, ipsum.",
  },
  {
    quote:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod voluptates quis recusandae fuga necessitatibus nihil soluta suscipit laborum beatae?"
,    name: "Herman Melville",
    title: "Lorem, ipsum.",
  },
];
