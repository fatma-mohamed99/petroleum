import Specialties from "@/components/home-component/specialties-section/Specialties";
import HeroCarousel from "./../components/home-component/hero-section/Hero";
import OurLegacy from "@/components/home-component/our-legacy-secton/OurLegacy";
import ProjectSection from "@/components/home-component/project-section/ProjectSection";
import CertificatesSection from "@/components/home-component/certificate-section/CertificatesSection";
import WhoAreWeSection from "@/components/home-component/Who-are-we-section/WhoAreWeSection";
import { Button } from "@/components/ui/Button";
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




      {/* ###################################### */}
      <div className="flex justify-around items-center">

      <Button fullRounded={true} >
        
        hello
      </Button>
      <Button size="sm">
        
        size=sm
      </Button>
      <Button size="md">
        
        size=md
      </Button>
      <Button size="lg">
        
        size=lg
      </Button>
      </div>
      <div className="w-full bg-main/5">
      <div className="flex justify-center w-full ">


      </div>

      </div>
          <CertificatesSection />
      {/* ###################################### */}


      <div className="pt-24 pb-32 my-5   ">
        <ProjectSection />
      </div>

      {/* ###################################### */}
      <div className="w-full bg-main/5">

        <div className="w-full sm:w-11/12 md:w-10/12  mx-auto py-12  ">
          <Specialties />
        </div>
        {/* ###################################### */}
      </div>
    </div>
  );
}
