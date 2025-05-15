import HeroCarousel from "./../components/home-component/hero-section/Hero";
import OurLegacy from "@/components/home-component/our-legacy-secton/OurLegacy";
import ProjectSection from "@/components/home-component/project-section/ProjectSection";
import WhoAreWeSection from "@/components/home-component/Who-are-we-section/WhoAreWeSection";
import Image from "next/image";
export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <HeroCarousel />

      <div className="relative z-10">
        <OurLegacy />
        <div className="absolute right-20 top-0 h-full w-1 bg-gradient-to-b from-secondary to-secondary/95 animate-pulse z-0 " />
      </div>
      <div className="relative z-10">
<div className="absolute right-20 top-0 w-[calc(100%-160px)] h-1 bg-gradient-to-b from-secondary to-secondary/95 animate-pulse z-0" />
        <div className="absolute left-20 top-0 h-full w-1 bg-gradient-to-b from-secondary to-secondary/95 animate-pulse z-0 " />

        <WhoAreWeSection />
      </div>
      <div className="relative z-10">
                <div className="absolute left-20 top-0 h-full w-1 bg-gradient-to-b from-secondary to-secondary/95 animate-pulse z-0 " />
        <ProjectSection />
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="grid w-full  bg-main/5 ">
//       <div className="inset-0 ">
//         <HeroCarousel />
//       </div>

//       {/* ###################################### */}

//         <OurLegacy />

//       <WhoAreWeSection />
//         <ProjectSection />

//     </div>
//   );
// }
