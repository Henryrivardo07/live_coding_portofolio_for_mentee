import { StaticImageData } from 'next/image';

import iconFacebook from '../../public/icons/icon-facebook.svg';
import iconInstagram from '../../public/icons/icon-instagram.svg';
import iconLinkedIn from '../../public/icons/icon-linkedin.svg';
import iconTiktok from '../../public/icons/icon-tiktok.svg';

type Icon = {
  href: string;
  src: StaticImageData;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    href: 'https://www.facebook.com/',
    src: iconFacebook,
    alt: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/',
    src: iconInstagram,
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/',
    src: iconLinkedIn,
    alt: 'LinkedIn',
  },
  {
    href: 'https://www.tiktok.com/',
    src: iconTiktok,
    alt: 'Tiktok',
  },
];
