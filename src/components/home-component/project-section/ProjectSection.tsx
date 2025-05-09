import { projects } from "@/consts/projects";
import "../../../styles/projectSectionStyle.css"
import ProjectCard from "./ProjectCard";
function ProjectSection() {
  return (
    <div className="w-full  py-10 bg-main/10  sm:rounded-full  overflow-hidden ">
      <p
        className=" 
            text-header-sm md:text-header-md 
           
            w-full
        
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