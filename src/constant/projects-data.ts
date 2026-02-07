import { StaticImageData } from 'next/image';

import project1Src from '../../public/images/project1.jpg';
import project2Src from '../../public/images/project2.jpg';
import project3Src from '../../public/images/project3.jpg';

type Project = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
};

export const projectsData: Project[] = [
  {
    imageSrc: project1Src,
    name: 'Company Profile',
    description: '2025',
  },
  {
    imageSrc: project2Src,
    name: 'Portfolio',
    description: '2025',
  },
  {
    imageSrc: project3Src,
    name: 'Blog Website',
    description: '2025',
  },
];
