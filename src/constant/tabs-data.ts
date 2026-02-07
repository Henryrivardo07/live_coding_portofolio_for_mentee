import { StaticImageData } from 'next/image';

import tab1Src from '../../public/images/tab1.jpg';
import tab2Src from '../../public/images/tab2.jpg';
import tab3Src from '../../public/images/tab3.jpg';

type TabData = {
  key: string;
  label: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
};

export const tabsData: TabData[] = [
  {
    key: 'finance-fintech',
    label: 'Finance & FinTech',
    title: 'Secure & Scalable Financial Solutions',
    description:
      'We help financial institutions with secure, data-driven, and compliant technology solutions to enhance transactions and customer experiences',
    imageSrc: tab1Src,
  },
  {
    key: 'healthcare',
    label: 'Healthcare',
    title: 'Innovative Tech for Better Healthcare',
    description:
      'We build HIPAA-compliant, AI-powered healthcare solutions for better patient care, data management, and operational efficiency',
    imageSrc: tab2Src,
  },
  {
    key: 'e-commerce',
    label: 'E-commerce',
    title: 'Seamless Shopping & Smart Retail Tech',
    description:
      'Enhance customer experience and streamline operations with AI-powered e-commerce platforms, smart inventory systems, and payment solutions',
    imageSrc: tab3Src,
  },
];
