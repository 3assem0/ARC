import Contact from "@/app/(Pages)/Contact/page";
import FAQs from "@/_components/FAQs/FAQs";
// import { HeroScrollDemo } from "@/_components/FAQs/FirstProject/FirstProject";
// import About from "@/_components/About/About";
import { BackgroundLinesDemo } from "@/_components/BackgroundLinesDemo/BackgroundLinesDemo";
import { MovingCart } from "@/_components/MovingCart/MovingCart";
import { AnimatedPinDemo } from "@/_components/AnimatedPinDemo/AnimatedPinDemo";
import { GlobeDemo } from "@/_components/GlobeDemo/GlobeDemo";
import { HeroScrollDemo } from "@/_components/FirstProject/FirstProject";

export default function Home() {
  return (
    <div>
      <BackgroundLinesDemo/>
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-black bg-white">

        {/* <About /> */}
        {/* ABDO */}
        <AnimatedPinDemo />
      </div>

      <div className="dark:bg-black bg-white">
        {/* assem */}
        <GlobeDemo />
        {/* abdo */}
        <HeroScrollDemo />
        {/* ali */}
        <FAQs />
        {/* BEXO */}
        <MovingCart />
        {/* assem */}
        <Contact />
      </div>
    </div>
  );
}
