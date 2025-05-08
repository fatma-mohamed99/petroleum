import { Project } from "@/types/project";
import Image from "next/image";

function ProjectCard({projectData}:{projectData:Project}) {
    return (
        <div className="">
        <article className=" ">
          <section className="  w-full overflow-hidden  rounded-t-sm">
            <Image
              alt={`${projectData.title}logo`}
              src={projectData.image}
              width={600}
              height={600}
              className=" w-full "
            />
            <p className="text-[10px]  md:text-desc-sm  text-center pt-4 ">
              {projectData.title}
            </p>
          </section>
        </article>
      </div>
    );
}

export default ProjectCard;