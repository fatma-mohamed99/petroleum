import { Project } from "@/types/project";
import Image from "next/image";

function ProjectCard({ projectData }: { projectData: Project }) {
  return (
    <div className="bg-main/80 brightness-110 rounded-b-sm
      relative min-h-24 ">
      <article>
        <section className="w-full overflow-hidden rounded-t-sm    ">
          <Image
            alt={`${projectData.title}logo`}
            src={projectData.image}
            width={800}
            height={800}
            className="w-full min-h-24 sm:h-9/10"
          />
          <article className="absolute bottom-0
           hidden sm:block
            left-0 w-full bg-black/10  backdrop-blur-sm h-4 pt-1 md:h-6
           
            ">
            <p
              title={projectData.title}

              className=" project-title text-[8px] 
            text-nowrap truncate
              text-white text-center font-bold 
              px-1
               lg:text-xs
              tracking-wide ">
              {projectData.title}
            </p>
          </article>
        </section>
      </article>
    </div>
  );
}

export default ProjectCard;