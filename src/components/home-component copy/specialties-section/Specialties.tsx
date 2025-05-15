"use client"
import React from "react";
import SpecialtyCard from "./SpecialtyCard";
import { specialties } from "@/consts/specialties";

function Specialties() {
  return (
    <div className="py-10">
      <p className="text-header-lg w-full text-center font-medium flex items-center justify-center">
        Our Specialties
      </p>

      <p className="text-desc-lg leading-relaxed text-center mb-15 mt-5 max-w-2xl mx-auto font-normal text-textColor">
        We offer a wide range of engineering specialties tailored to meet the needs of the oil and gas industry with precision and innovation.
      </p>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {specialties.map((specialty, index) => (
            <div key={index} className="flex">
              <SpecialtyCard
                cardData={specialty}

              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specialties;