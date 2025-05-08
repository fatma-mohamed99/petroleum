import { projects } from "@/consts/projects";
import "../../../styles/projectSectionStyle.css"
import ProjectCard from "./ProjectCard";
function ProjectSection() {
    return (
        <div className="w-full  pb-10">
         <p
        className=" 
            text-header-sm md:text-header-md 
            mb-10 w-full
             text-center ali 
             U-fromUnico  flex
             font-bold
             items-center justify-center"
      >
        NICO projects
      </p>
      <div className="w-full  my-10 flex justify-center  ">
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