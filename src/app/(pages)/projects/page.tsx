import ProjectCard from "@/components/project-components/ProjectCard";
import { projects } from "@/consts/projects";

function Projects() {
  return (
    <div className="w-full py-12">
      <h1 className="text-header-md lg:text-header-lg w-full text-center font-bold pb-4 items-center justify-center">
        UNICO Projects
      </h1>
      
      <div className="w-11/12 lg:w-10/12 mx-auto mb-16 text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          With over 20 years of experience in the Oil & Gas industry,
          UNICO Petroleum has successfully delivered more than 25 projects across the Levant region.
          Our portfolio includes comprehensive engineering solutions for storage tanks, pipelines,
          and pumping stations, all executed with the highest international safety and quality standards.
        </p>
       
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-main px-8 py-4 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-2xl text-white">25+</h3>
            <p className="text-sm text-gray-100">Completed Projects</p>
          </div>
          <div className="bg-main px-8 py-4 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-2xl text-white">5</h3>
            <p className="text-sm text-gray-100">Countries</p>
          </div>
          <div className="bg-main px-8 py-4 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-2xl text-white">20+</h3>
            <p className="text-sm text-gray-100">Years of Experience</p>
          </div>
        </div>
      </div>
      
      <div className="min-h-screen w-11/12  mx-auto 
                      flex flex-wrap justify-center gap-13">
        {projects.map((project) => (
          <ProjectCard key={project.title} projectData={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
