"use client";
import { projects } from "@/consts/projects";
import { useProjectCarousel } from "@/Hooks/useProjectCarousel";
import { getPaginationRange } from "@/utils/getPaginationRange";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
function ProjectSection() {
  const {
    activeProjectIndex,
    handleNextProject,
    handlePrevProject,
    handleActiveProject,
  } = useProjectCarousel(projects.length);

  const activeProject = projects[activeProjectIndex];
  const { image, title, longDesc } = activeProject;

  const paginationItems = getPaginationRange(
    activeProjectIndex,
    projects.length
  );

  return (
    <div className="">
      <p className="text-header-lg w-full text-center
       flex font-medium items-center justify-center ">
        Unico projects
      </p>
      <p className="max-w-3xl mx-auto mb-10 my-5    text-desc-lg leading-relaxed text-center  font-normal text-textColor">
   With 20+ years in Oil & Gas, UNICO has delivered 25+ projects across the Levant region, specializing in storage tanks, pipelines,
    and pumping stations with international standards
      </p>
      <div className="w-10/12 sm:w-8/12 md:w-full lg:w-10/12 xl:w-9/12   mx-auto text-textColor bg-main/5 md:max-h-[400px]">
        <div className="flex justify-between flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 py-4 md:py-8 space-y-10 bg-white/20 md:bg-transparent">
            <div className="space-y-2 md:space-y-4 w-full md:px-6 flex flex-col justify-center md:justify-start text-center md:text-start">
              <h3 className="text-header-sm lg:text-header-md text-nowrap">
                {title}
              </h3>
              <p
                className="text-desc-sm lg:text-desc-lg  md:text-desc-md 
               text-textColor/90 md:text-textColor/80 mx-auto md:mx-0 
               w-3/4 md:5/6 lg:w-3/4 min-h-[84px]  md:min-h-30  lg:min-h-28"
              >
                {longDesc}
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  className="bg-white py-2 px-4 lg:text-desc-lg hover:tracking-wide
                 transition-all duration-300 cursor-pointer w-[140px] md:w-[155px]"
                >
                  Discover More
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center 
            px-2 md:py-5 sm:px-10 md:px-6">
              <div className="flex gap-0.5 items-center">
                {paginationItems.map((item, idx) =>
                  item.type === "ellipsis" ? (
                    <span
                      key={`ellipsis-${idx}`}
                      className="w-6 text-center font-bold"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      onClick={() => handleActiveProject(item.index)}
                      key={`pagination-${item.index}`}
                      className={`p-1 cursor-pointer rounded-full w-6 h-6  sm:w-9 sm:h-9 border-2
                        flex justify-center items-center transition-all duration-500
                        text-xs sm:text-base
                        ${
                          item.index === activeProjectIndex
                            ? "bg-main  text-white scale-105 border-white"
                            : "bg-white border-main"
                        }`}
                    >
                      {item.index + 1}
                    </button>
                  )
                )}
              </div>
              <div className="flex  gap-2 sm:gap-4">
                <button
                  onClick={handlePrevProject}
                  className="w-7 h-7 sm:w-10 sm:h-10 cursor-pointer flex justify-center items-center rounded-full border-2 border-main"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={handleNextProject}
                  className="w-7 h-7 sm:w-10 sm:h-10 cursor-pointer flex justify-center items-center rounded-full border-2 border-main"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2  md:max-h-[400px]">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
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
