import { StaticImageData } from 'next/image';

import profile1Src from '../../public/images/profile1.jpg';
import profile2Src from '../../public/images/profile2.jpg';
import profile3Src from '../../public/images/profile3.jpg';

type Testimonial = {
  rating: number;
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

export const testimonialsData: Testimonial[] = [
  {
    rating: 4,
    description:
      'Working with Syntax has been a game-changer for our business. Their IT solutions streamlined our operations and helped us scale faster than we expected. Highly recommended!',
    profileSrc: profile1Src,
    profileName: 'Michael Anderson',
    profileOccupation: 'CEO of FinTech Solutions',
  },
  {
    rating: 5,
    description:
      'The UI/UX design provided by Syntax completely transformed our platform. Our users love the new interface, and engagement rates have significantly increased',
    profileSrc: profile2Src,
    profileName: 'Sarah Thompson',
    profileOccupation: 'Head of Product at E-Hub',
  },
  {
    rating: 4,
    description:
      'Cybersecurity was a major concern for us, but Syntax delivered a secure and scalable solution that gave us peace of mind. Their team is truly professional and reliable.',
    profileSrc: profile3Src,
    profileName: 'David Collins',
    profileOccupation: 'CTO of MedTech Innovations',
  },
  {
    rating: 5,
    description:
      'Working with Syntax has been a game-changer for our business. Their IT solutions streamlined our operations and helped us scale faster than we expected. Highly recommended!',
    profileSrc: profile1Src,
    profileName: 'Michael Anderson',
    profileOccupation: 'CEO of FinTech Solutions',
  },
  {
    rating: 4,
    description:
      'The UI/UX design provided by Syntax completely transformed our platform. Our users love the new interface, and engagement rates have significantly increased',
    profileSrc: profile2Src,
    profileName: 'Sarah Thompson',
    profileOccupation: 'Head of Product at E-Hub',
  },
  {
    rating: 5,
    description:
      'Cybersecurity was a major concern for us, but Syntax delivered a secure and scalable solution that gave us peace of mind. Their team is truly professional and reliable.',
    profileSrc: profile3Src,
    profileName: 'David Collins',
    profileOccupation: 'CTO of MedTech Innovations',
  },
  {
    rating: 4,
    description:
      'Working with Syntax has been a game-changer for our business. Their IT solutions streamlined our operations and helped us scale faster than we expected. Highly recommended!',
    profileSrc: profile1Src,
    profileName: 'Michael Anderson',
    profileOccupation: 'CEO of FinTech Solutions',
  },
  {
    rating: 5,
    description:
      'The UI/UX design provided by Syntax completely transformed our platform. Our users love the new interface, and engagement rates have significantly increased',
    profileSrc: profile2Src,
    profileName: 'Sarah Thompson',
    profileOccupation: 'Head of Product at E-Hub',
  },
  {
    rating: 4,
    description:
      'Cybersecurity was a major concern for us, but Syntax delivered a secure and scalable solution that gave us peace of mind. Their team is truly professional and reliable.',
    profileSrc: profile3Src,
    profileName: 'David Collins',
    profileOccupation: 'CTO of MedTech Innovations',
  },
];
