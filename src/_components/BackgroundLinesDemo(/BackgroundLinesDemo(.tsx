
  "use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";


export function BackgroundLinesDemo() {
  return (

        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    
          <div className="text-4xl text-center flex flex-col items-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <p
           className="flex">    Welcom,  
            It's <img src="Untitled (7).png" alt="img"  className="w-[300px]"/>,
           </p>
           <p>your helpful Enginner in servece.</p>
          </div>
       
        </div>
      );
    }
    