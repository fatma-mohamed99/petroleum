import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import React from "react";
import type { SpecialtyCard } from "@/types/SpecialtyCard ";


function SpecialtyCard({ cardData }: { cardData: SpecialtyCard }) {
  const { title, imageSrc, shortDescription } = cardData;
  return (
    <div
      className="relative flex  max-w-[340px] min-w-[310px] min-h-[336px] max
       justify-between  lg:w-3/10
       
         flex-col   bg-clip-border text-textColor
         hover:-translate-y-1 transition-all 
         shadow-sm shadow-textColor"
    >
      <div
        className="relative  mx-4 -mt-6 h-40 overflow-hidden 
         bg-blue-gray-500 bg-clip-border text-white  
         "
      >
        <Image
          src={imageSrc}
          alt={title}
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
