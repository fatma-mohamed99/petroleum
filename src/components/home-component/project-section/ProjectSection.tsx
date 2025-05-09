import { projects } from "@/consts/projects";
import "../../../styles/projectSectionStyle.css"
import ProjectCard from "./ProjectCard";
function ProjectSection() {
  return (
    <div className="w-full  py-10 bg-main/10
       overflow-hidden  rounded-sm">
      <p
        className=" 
            text-header-sm md:text-header-md 
           
            w-full
             text-center  
            flex
             font-semibold
             items-center justify-center 
              "



      >
        Unico projects
      </p>
      <div className="w-full  my-14 mx-auto  ">
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