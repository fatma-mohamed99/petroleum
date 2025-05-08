import { Project } from "@/types/project";
import Image from "next/image";

function ProjectCard({ projectData }: { projectData: Project }) {
  return (
    <div className="bg-main/80 brightness-110  border-2 border-main/40  ">
      <article className=" ">
        <section className=" w-full overflow-hidden  
        rounded-t-sm">
          <Image
            alt={`${projectData.title}logo`}
            src={projectData.image}
            width={600}
            height={600}
            className=" w-full "
          />
          <p className="text-[8px] md:text-[9px]
           text-white 
           text-center
            w-full  flex justify-center items-center
            pt-1           lg:text-nowrap
             ">
            {projectData.title}
          </p>
        </section>
      </article>
    </div>
  );
}

export default ProjectCard;
