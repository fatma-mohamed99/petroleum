import HeroCarousel from "./../components/home-component/hero-section/Hero";
import OurLegacy from "@/components/home-component/our-legacy-secton/OurLegacy";
import ProjectSection from "@/components/home-component/project-section/ProjectSection";
import WhoAreWeSection from "@/components/home-component/Who-are-we-section/WhoAreWeSection";
export default function Home() {
  return (
    <div className="grid w-full   ">
      <div className="inset-0 ">
        <HeroCarousel />
      </div>

      {/* ###################################### */}
      <div className=" py-12 my-5 ">
        <OurLegacy />
      </div>

      <WhoAreWeSection />
      <ProjectSection />

    </div>
  );
}
