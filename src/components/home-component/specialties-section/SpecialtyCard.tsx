import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import React from "react";
import type { SpecialtyCard as SpecialtyCardType } from "@/types/SpecialtyCard ";

function SpecialtyCard({ cardData, isMiddle = true }: { cardData: SpecialtyCardType, isMiddle?: boolean }) {
  const { title, imageSrc, shortDescription } = cardData;
  return (
    <div
      className={`relative 
        flex 
        min-h-[340px]
        justify-between
        flex-col
        bg-clip-border 
        ${isMiddle ? 'bg-main/5 text-textColor' : 'text-textColor'}
        hover:-translate-y-1 transition-all
        shadow-sm shadow-textColor`}
    >
      <div
        className="relative mx-4
        -mt-6 h-40
        overflow-hidden
         bg-clip-border text-white
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
          className={`mb-2 break-words block font-sans text-xl
          text-nowrap
          font-semibold leading-snug tracking-normal
          antialiased`}
        >
          {title}
        </h5>
        <p
          className={`block font-sans text-base
          font-light leading-relaxed  antialiased`}
        >
          {shortDescription}
        </p>
      </div>
      <div className="p-6 pt-0 text-center sm:text-start">
        <CustomButton className="text-white">
          More Detail
        </CustomButton>
      </div>
    </div>
  );
}

export default SpecialtyCard;