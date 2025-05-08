import { Project } from "@/types/project";
import Image from "next/image";

function ProjectCard({ projectData }: { projectData: Project }) {
  return (
    <div className="bg-main/80 brightness-110 border-2 border-main/40 relative">
      <article>
        <section className="w-full overflow-hidden rounded-t-sm ">
          <Image
            alt={`${projectData.title}logo`}
            src={projectData.image}
            width={600}
            height={600}
            className="w-full h-full"
          />
          <div className="absolute -top-11/12 left-0 w-full bg-fixedComponentBg/60 py-2 backdrop-blur-sm">
            <p className="project-title text-xs md:text-sm lg:text-base text-white text-center font-bold 
              tracking-wide px-2">
              {projectData.title}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

export default ProjectCard;