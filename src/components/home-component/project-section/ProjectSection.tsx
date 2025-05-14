"use client";

import SectionContainer from "@/components/styles-wrappers/SectionContainer";

function ProjectSection() {
  return (
    <SectionContainer
      title={"Unico projects"}
      description={`  With 20+ years in Oil & Gas, UNICO has delivered 25+ projects across the Levant region, specializing in storage tanks, pipelines,
        and pumping stations with international standards
`}
    >
      
       
    </SectionContainer>
  );
}

export default ProjectSection;
// import "../../../styles/projectSectionStyle.css"
// import ProjectCard from "./ProjectCard";
// <div className="w-full  py-10
//    overflow-hidden  rounded-sm">
//   <p
//     className="
//         text-header-sm md:text-header-md

//         w-full
//          text-center
//         flex
//          font-medium
//          items-center justify-center
//           "

//   >
//     Unico projects
//   </p>
//   <div className="w-full  mb-10 mt-5 md:mt-14 md:mb-14  mx-auto  ">
//     <div className=" card-3d">
//       {projects.map((project) => (
//         <ProjectCard
//           key={project.title}
//           projectData={project}
//         />
//       ))}
//     </div>
//   </div>
// </div>
