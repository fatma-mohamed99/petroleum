import React from "react";
import SpecialtyCard from "./SpecialtyCard";
import { specialties } from "@/consts/specialties";

function Specialties() {
  return (
    <div className="py-10">
      <p
        className=" 
        text-header-sm md:text-header-md pb-14 w-full
             text-center ali 
             font-medium
      flex
             items-center justify-center"
      >
        Our Specialties
      </p>
      <div className="w-full flex flex-wrap gap-x-6 gap-y-12  lg::gap-12 justify-center items-center px-3 sm:px-0">
        {specialties.map((specialty) => (
          <SpecialtyCard key={specialty.title} cardData={specialty} />
        ))}
      </div>
    </div>
  );
}

export default Specialties;
