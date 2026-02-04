import { Button } from '@/components/ui/button';
import { navigationData } from '@/constant/navigation-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <header className='fixed top-0 z-50 w-full text-white'>
      <div className='flex-between custom-container h-16 md:h-21'>
        {/* Image */}
        <Image src='/images/logo.svg' alt='logo' width={158} height={36} />
        {/* nav */}
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-3'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='hover:text-primary-200 p-4'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* button */}

        <Button>
          <Link href='#contact'>Get Started</Link>
        </Button>
      </div>
    </header>
  );
};
