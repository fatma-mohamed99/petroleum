import ProjectCard from "@/components/project-components/ProjectCard";
import { projects } from "@/consts/projects";

function Projects() {
  return (
    <div className="w-full pb-10">
      <h1
        className=" 
            text-header-sm md:text-header-md 
            lg:text-header-lg
           
            w-full
             text-center  
             U-fromUnico  flex
             font-bold
             pb-2
             items-center justify-center 
              "
      >
        NICO projects
      </h1>

      <div className="min-h-screen w-10/12 mx-auto flex flex-wrap 
       justify-around gap-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} projectData={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
