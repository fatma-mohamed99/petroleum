
import Specialties from '@/components/home-component/specialties-section/Specialties';
import HeroCarousel from './../components/home-component/hero-section/Hero';
export default function Home() {
  return (
    <div className="grid w-full   ">
      <HeroCarousel />
      <div className='w-full sm:w-11/12 md:w-10/12  mx-auto pt-20 pb-10 space-y-10 '>
      <Specialties/>
      <hr className="w-full h-1 text-main bg-main  rounded-2xl" />

      </div>

    </div>
  );
}
