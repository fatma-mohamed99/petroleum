"use client"
import React from 'react';
import Image from 'next/image';
// import { ProjectCardStyledWrapper } from '../styles-wrappers/ProjectCardStyledWrapper';
import { Project } from '@/types/project';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ProjectCard = ({projectData}:{projectData:Project}) => {
  return (
    // <ProjectCardStyledWrapper>
      <div className="card">
        <div className="card__body">
          <Image 
            src={projectData.image} 
            alt={projectData.title}
            className="w-full h-48 object-cover"
          />
          <h3 className="card__title">{projectData.title}</h3>
          <p className="card__paragraph">
            {projectData.shortDesc}
          </p>
        </div>
        <div className="card__ribbon">
          <Link   className="card__ribbon-label" href={`/projects/${projectData.id}`}>
            <ChevronRight size={25} className='
            bg-textColor
             p-1 text-white
              rounded-full '/>
            Discover More
          </Link>
        </div>
      </div>
    // </ProjectCardStyledWrapper>
  );
}

export default ProjectCard;

