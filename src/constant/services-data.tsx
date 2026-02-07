import { Icon } from '@iconify/react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const serviceData: Service[] = [
  {
    icon: <Icon icon='fluent:desktop-20-filled' />,
    title: 'Web Development',
    description:
      'We build fast, secure, and user-friendly websites to boost your online presence.',
  },
  {
    icon: <Icon icon='bxs:mobile' />,
    title: 'Mobile App Development',
    description:
      'We create smooth, feature-rich mobile apps optimized for user experience.',
  },
  {
    icon: <Icon icon='fluent:paint-brush-20-filled' />,
    title: 'UI/UX Design',
    description:
      'We craft beautiful and user-friendly interfaces to enhance customer experience.',
  },
  {
    icon: <Icon icon='material-symbols-light:cloud' />,
    title: 'Cloud Services',
    description:
      'We help you migrate, manage, and optimize cloud infrastructure for scalability and efficiency.',
  },
  {
    icon: <Icon icon='fluent:desktop-cursor-28-filled' />,
    title: 'Cyber Security',
    description:
      'We protect your business from cyber threats by implementing robust security measures.',
  },
  {
    icon: <Icon icon='mdi:git' />,
    title: 'DevOps',
    description:
      'We automate and optimize your development lifecycle with our DevOps services.',
  },
  {
    icon: <Icon icon='material-symbols:security' />,
    title: 'IT Consulting',
    description:
      'We help you make informed decisions about your IT infrastructure and strategy.',
  },
  {
    icon: <Icon icon='mingcute:ai-fill' />,
    title: 'Artificial Intelligence',
    description:
      'We use AI and machine learning to improve your business efficiency and competitiveness.',
  },
  {
    icon: <Icon icon='fluent:person-support-28-filled' />,
    title: 'IT Support',
    description:
      'We provide timely and efficient IT support to ensure your business runs smoothly.',
  },
];
