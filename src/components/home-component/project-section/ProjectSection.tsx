"use client";

import SectionContainer from "@/components/styles-wrappers/SectionContainer";
import CardWithAnimatedBorder from "@/components/ui/card/card";
import { projects } from "@/consts/projects";
import { DecimalsArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ProjectSection() {
  const shortProjectsArray = projects.slice(0, 4);
  const [showAll, setShowAll] = useState(false);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    setShowAll((prev) => {
      const newState = !prev;

      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);

      return newState;
    });
  };

  const showingProject = showAll ? projects : shortProjectsArray;

  useGSAP(() => {
    const arrow = arrowRef.current;
    if (arrow) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(arrow, {
        x: 3,
        duration: 0.5,
        ease: "power1.inOut",
      }).to(arrow, {
        x: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  });

  return (
    <div className="w-full" ref={sectionRef}>

    <SectionContainer
      title={"Unico projects"}
      description={`With 20+ years in Oil & Gas, 
        UNICO has delivered 25+ projects across the Levant region, specializing in storage tanks, pipelines,
        and pumping stations with international standards`}
    >
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {showingProject.map((project) => (
          <div key={project.id}>
            <CardWithAnimatedBorder
              imageUrl={project.image.src}
              title={project.title}
              description={project.shortDesc}
              altText={project.title}
              className="w-full"
              targetPath={`/projects/${project.id}`}
            />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-end mt-2">
        <button
          className="flex outline-0 gap-1 text-secondary cursor-pointer"
          onClick={handleShow}
        >
          {showAll ? "Show less" : "Show more"}
          <span ref={arrowRef}>
            <DecimalsArrowRight />
          </span>
        </button>
      </div>
    </SectionContainer>
    </div>
  );
}

export default ProjectSection;
