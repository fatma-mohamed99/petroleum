import HeroCarousel from "./../components/home-component/hero-section/Hero";
import OurLegacy from "@/components/home-component/our-legacy-secton/OurLegacy";
import ProjectSection from "@/components/home-component/project-section/ProjectSection";
import WhoAreWeSection from "@/components/home-component/Who-are-we-section/WhoAreWeSection";
import Image from "next/image";
export default function Home() {
  return (
    <div className="grid w-full  bg-main/5 ">
      <div className="inset-0 ">
        <HeroCarousel />
      </div>

      {/* ###################################### */}
      <div className="relative py-12">


        <OurLegacy />
      </div>

      <WhoAreWeSection />
      <div className="relative pt-12 ">
        <ProjectSection />
      </div>

    </div>
  );
}
