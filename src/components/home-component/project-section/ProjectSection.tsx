import { projects } from "@/consts/projects";
import "../../../styles/projectSectionStyle.css"
import ProjectCard from "./ProjectCard";
function ProjectSection() {
  return (
    <div className="w-full  py-10 bg-main/10  rounded-full">
      <p
        className=" 
            text-header-sm md:text-header-md 
           
            w-full
             text-center ali 
             U-fromUnico  flex
             font-bold
             items-center justify-center  pb-14"


      >
        NICO projects
      </p>
      <div className="w-full  my-10 md:my-25 flex justify-center  ">
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
  );
}

export default ProjectSection;