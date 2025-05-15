import CertificatesSection from "@/components/home-component copy/certificate-section/CertificatesSection";
import "../../../styles/projectSectionStyle.css"
import Hero from "@/components/home-component copy/hero-section/Hero";
import OurLegacy from "@/components/home-component copy/our-legacy-secton/OurLegacy";
import ProjectSection from "@/components/home-component copy/project-section/ProjectSection";
import Specialties from "@/components/home-component copy/specialties-section/Specialties";
import React from "react";
import { projects } from "@/consts/projects";
import ProjectCard from "@/components/home-component copy/project-section/ProjectCard";

function Suppliers() {
  return (
    <>
      <h4 className="text-main  pt-10 text-center text-6xl">UNICO Sections</h4>
      <div className="min-h-screen flex flex-col items-center  space-y-32 py-40">
        <div className="bg-main/10 px-10 py-5">

        <CertificatesSection />
        </div>
        <hr  className="bg-main  h-2 w-full  text-main"/>

        <Hero />
        <hr  className="bg-main text-main h-2 w-full "/>
        <div className="bg-main/10 px-10 py-5">
        <OurLegacy />
        </div>
        <hr  className="bg-main text-main h-2 w-full "/>
 <div className="bg-white shadow-2xl px-20 py-10 ">
      <Specialties/>
        </div>
        <ProjectSection/>
<div className="w-full  py-10
   overflow-hidden  rounded-sm">
  <p
    className="
        text-header-sm md:text-header-md

        w-full
         text-center
        flex
         font-medium
         items-center justify-center
          "

  >
    Unico projects
  </p>
  <div className="w-full  mb-10 mt-5 md:mt-14 md:mb-14  mx-auto  ">
    <div className=" card-3d">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          projectData={project}
        />
      ))}
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default Suppliers;