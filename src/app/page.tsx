import Specialties from "@/components/home-component/specialties-section/Specialties";
import HeroCarousel from "./../components/home-component/hero-section/Hero";
import OurLegacy from "@/components/home-component/our-legacy-secton/OurLegacy";
import ProjectSection from "@/components/home-component/project-section/ProjectSection";
import CertificatesSection from "@/components/home-component/certificate-section/CertificatesSection";
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
      
      <hr className="w-full sm:w-11/12 md:w-10/12  mx-auto h-1 text-white  bg-main/10 mb-10 " />

      {/* ###################################### */}

      <div className="w-full  sm:w-11/12 md:w-10/12   mx-auto py-12 my-7">
          <CertificatesSection />
      </div>
      {/* ###################################### */}

      <hr className="w-full sm:w-11/12 md:w-10/12  mx-auto h-1 text-white  bg-main/10  " />

      <div className="py-12 my-5   ">
        <ProjectSection />
      </div>

      {/* ###################################### */}
      <hr className="w-full sm:w-11/12 md:w-10/12  mx-auto h-1 text-white  bg-main/10  mt-8" />

      <div className="w-full sm:w-11/12 md:w-10/12  mx-auto py-12  ">
          <Specialties />
      </div>
      {/* ###################################### */}
    </div>
  );
}
