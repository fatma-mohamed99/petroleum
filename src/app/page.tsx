
import Specialties from '@/components/home-component/specialties-section/Specialties';
import HeroCarousel from './../components/home-component/hero-section/Hero';
import OurLegacy from '@/components/home-component/our-legacy-secton/OurLegacy';
import ProjectSection from '@/components/home-component/project-section/ProjectSection';
import CertificatesSection from '@/components/home-component/certificate-section/CertificatesSection';
export default function Home() {
  return (
    <div className="grid w-full   ">
      <div className='inset-0 '>

        <HeroCarousel />

      </div>
      {/* ###################################### */}
      <div className='  space-y-10 py-20 '> <OurLegacy /></div>
      <div className='w-full sm:w-11/12 md:w-10/12  mx-auto  '>
        <hr className="w-full sm:w-11/12 md:w-10/12  mx-auto h-1 text-white  bg-main/10  rounded-2xl" />

      </div>
      {/* ###################################### */}

      <div className='w-full   mx-auto pt-20 pb-10 space-y-10 '>


        <div className='w-full sm:w-11/12 md:w-10/12  mx-auto  space-y-15 my-15 '>


          <CertificatesSection />





        </div>
      </div>
      {/* ###################################### */}


      <div className='inset-0  space-y-10 py-0 lg:py-20 bg-main/10 '>    <ProjectSection /> </div>
      <div className='w-full sm:w-11/12 md:w-10/12  mx-auto  '>

      </div>
      {/* ###################################### */}

      <div className='w-full  mx-auto pt-20 pb-10 space-y-10 '>


        <div className='w-full sm:w-11/12 md:w-10/12  mx-auto  space-y-15 my-15 '>


          <Specialties />


        </div>
      </div>
      {/* ###################################### */}


    </div>
  );
}
