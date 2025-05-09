"use client"
import React from 'react';
import Image from 'next/image';
import { ProjectCardStyledWrapper } from '../styles-wrappers/ProjectCardStyledWrapper';
import { Project } from '@/types/project';
import CustomButton from '../ui/CustomButton';

const ProjectCard = ({projectData}:{projectData:Project}) => {
  return (
    <ProjectCardStyledWrapper>
      <div className="card">
        <div className="card__body">
          <Image src={projectData.image} alt={projectData.title}  />
     
          <p className="card__title">{projectData.title}</p>
          <p className="card__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            perferendis eaque dolore repellat numquam. Dolores.
          </p>
        </div>
        <div className="card__ribbon">
          <CustomButton  variant='outline' className="card__ribbon-label" >
            Details
          </CustomButton>
        </div>
      </div>
    </ProjectCardStyledWrapper>
  );
}



export default ProjectCard;
