import { projects } from "@/consts/projects";
import "../../../styles/projectSectionStyle.css"
import ProjectCard from "./ProjectCard";
function ProjectSection() {
  return (
    <div className="w-full  py-10
       overflow-hidden ">
      <p
        className=" 
          text-header-lg
           
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
  );
}

export default ProjectSection;