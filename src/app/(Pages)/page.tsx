import  About  from "@/_components/About/About";
import { BackgroundLinesDemo } from "@/_components/BackgroundLinesDemo(/BackgroundLinesDemo(";
import Contact from "@/app/(Pages)/Contact/page";
import FAQs from "@/_components/FAQs/FAQs";
import { HeroScrollDemo } from "@/_components/FirstProject/FirstProject";
import { Projects } from "@/_components/Projects/Projects";
// import { Workers } from "@/_components/Workers/Workers";
// import { WobbleCardDemo } from "@/_components/WobbleCardDemo/WobbleCardDemo";

export default function Home() {
  return (
    <div>
      <BackgroundLinesDemo/>
      {/* <WobbleCardDemo/> */}
     <div className="min-h-screen flex items-center justify-center dark:bg-black bg-white">
     <About/>
     </div>
     <div className="dark:bg-black bg-white">
     <HeroScrollDemo/>
      <Projects/>
      {/* <Workers/> */}
      <FAQs/>
      <Contact/>
     </div>
    
    </div>
  )
}
