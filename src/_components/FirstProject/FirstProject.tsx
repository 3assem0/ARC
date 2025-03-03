"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="flex mb-10 items-center  text-4xl text-center sm:text-6xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              Unleash the power of your imagination <br />
              {/* <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none"> */}
                With US
               {/* <br/> */}
              {/* </span> */}
            </h1>
          </>
        }
      >
        <Image
          src={`/test1.JPG`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl  h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
