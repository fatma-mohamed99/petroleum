import ProjectCard from "@/components/project-components/ProjectCard";
import { projects } from "@/consts/projects";

function Projects() {
  return (
    <div className="w-full py-10">
      <h1 className="text-header-md lg:text-header-lg w-full text-center U-fromUnico flex font-bold pb-2 items-center justify-center">
        UNICO Projects
      </h1>

      {/* الجزء الجديد المضاف */}
      <div className="w-10/12 mx-auto mb-12 text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          With over 20 years of experience in the Oil & Gas industry, UNICO Petroleum has successfully delivered more than 25 projects across the Levant region. Our portfolio includes comprehensive engineering solutions for storage tanks, pipelines, and pumping stations, all executed with the highest international safety and quality standards.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="bg-blue-50 px-6 py-3 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-800">25+</h3>
            <p className="text-sm text-gray-600">Completed Projects</p>
          </div>
          <div className="bg-blue-50 px-6 py-3 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-800">5</h3>
            <p className="text-sm text-gray-600">Countries</p>
          </div>
          <div className="bg-blue-50 px-6 py-3 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-800">20+</h3>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
        </div>
      </div>
      {/* نهاية الجزء الجديد */}

      <div className="min-h-screen w-10/12 mx-auto flex flex-wrap justify-around gap-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} projectData={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
