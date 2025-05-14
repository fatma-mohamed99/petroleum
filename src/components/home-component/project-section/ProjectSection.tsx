"use client";

import SectionContainer from "@/components/styles-wrappers/SectionContainer";
import CardWithAnimatedBorder from "@/components/ui/card/card";
import { projects } from "@/consts/projects";

function ProjectSection() {
  return (
    <SectionContainer
      title={"Unico projects"}
      description={`  With 20+ years in Oil & Gas, UNICO has delivered 25+ projects across the Levant region, specializing in storage tanks, pipelines,
        and pumping stations with international standards
`} >
  <div className="grid grid-cols-4 gap-5   w-full">
{  projects.map((project)=>(<CardWithAnimatedBorder key={project.id} imageUrl={project.image.src}title={project.title}description={project.shortDesc} altText={project.title} className="w-full"/>))
}
  </div>
      
       
    </SectionContainer>
  );
}

export default ProjectSection;
