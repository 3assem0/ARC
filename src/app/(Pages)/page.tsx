import Contact from "@/app/(Pages)/Contact/page";
import FAQs from "@/_components/FAQs/FAQs";
import { HeroScrollDemo } from "@/_components/FirstProject/FirstProject";
import { Projects } from "@/_components/Projects/Projects";
import { BackgroundLinesDemo } from "@/_components/BackgroundLinesDemo(/BackgroundLinesDemo(";
import About from "@/_components/About/About";

export default function Home() {
  return (
    <div>
      <BackgroundLinesDemo />
      <div className="min-h-screen flex items-center justify-center dark:bg-black bg-white">
        <About />
      </div>
      <div className="dark:bg-black bg-white">
        <HeroScrollDemo />
        <Projects />
        <FAQs />
        <Contact />
      </div>
    </div>
  );
}
