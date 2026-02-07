import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import Section from '@/components/layout/section';

import { projectsData } from '@/constant/projects-data';

const Projects = () => {
  return (
    <Section
      title='Transforming Ideas into Digital Excellence'
      subtitle='Explore our past projects and see how we’ve helped businesses grow with innovative IT solutions'
      id='projects'
    >
      <Cards>
        {projectsData.map((project) => (
          <Card
            key={project.name}
            imageSrc={project.imageSrc}
            name={project.name}
            description={project.description}
          />
        ))}
      </Cards>
    </Section>
  );
};

export default Projects;

type CardsProps = {
  children: React.ReactNode;
};

const Cards: React.FC<CardsProps> = ({ children }) => {
  return <div className='flex flex-wrap gap-6 md:gap-5'>{children}</div>;
};

type CardProps = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ imageSrc, name, description }) => {
  return (
    <div className='flex-1 basis-70'>
      <Image
        src={imageSrc}
        alt={name}
        className='aspect-square rounded-2xl object-cover md:rounded-4xl'
      />
      <h4 className='text-lg-semibold text-neutral-25 mt-4'>{name}</h4>
      <p className='text-md-regular mt-2 text-neutral-400'>{description}</p>
    </div>
  );
};
