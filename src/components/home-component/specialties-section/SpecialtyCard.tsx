import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import React from "react";
import type { SpecialtyCard } from "@/types/SpecialtyCard ";


function SpecialtyCard({ cardData }: { cardData: SpecialtyCard }) {
  const { title, imageSrc, shortDescription } = cardData;
  return (
    <div
      className="relative flex w-full sm:w-6/13 max-w-[380px] min-h-fit sm:min-h-[362px] lg:min-h-[390px] xl:min-h-fit justify-between  lg:w-3/10
         flex-col rounded-xl bg-main/10 bg-clip-border text-gray-700
         hover:-translate-y-1 transition-all 
         shadow-md"
    >
      <div
        className="relative  mx-4 -mt-6 h-40 overflow-hidden rounded-xl
         bg-blue-gray-500 bg-clip-border text-white shadow-lg 
         shadow-main "
      >
        <Image
          src={imageSrc}
          alt={""}
          width={400}
          height={200}
          className="w-full h-full"
        />
      </div>
      <div className="p-6 flex-1">
        <h5
          className="mb-2 break-words block font-sans text-xl
          
          font-semibold leading-snug tracking-normal 
          text-blue-gray-900 antialiased"
        >
          {title}
        </h5>
        <p
          className="block font-sans text-base
          
          font-light leading-relaxed text-inherit antialiased"
        >
          {shortDescription}
        </p>
      </div>
      <div className="p-6 pt-0 text-center sm:text-start  ">
        <CustomButton>More Detail </CustomButton>
      </div>
    </div>
  );
}

export default SpecialtyCard;
