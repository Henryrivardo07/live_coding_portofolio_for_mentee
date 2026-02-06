import { Button } from '@/components/ui/button';
import { navigationData } from '@/constant/navigation-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className='fixed top-0 z-50 w-full text-white'>
      <div className='flex-between custom-container h-16 md:h-21'>
        {/* Image */}
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={158}
          height={36}
          className='max-md:h-8 max-md:w-35.25'
        />
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
        <Button asChild className='hidden lg:flex'>
          <Link href='#contact'>Get Started</Link>
        </Button>

        {/* hamburger menu */}
        <Sheet>
          <SheetTrigger className='cursor-pointer lg:hidden'>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <nav className='mt-16'>
              <ul className='flex flex-col gap-4 text-white'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <Link
                      href={data.href}
                      className='hover:text-primary-200 p-4'
                    >
                      {data.label}
                    </Link>
                    <SheetClose />
                  </li>
                ))}
              </ul>
            </nav>
            <Button asChild className='mt-3 w-full'>
              <SheetClose asChild>
                <Link href='#contact'>Get Started</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
