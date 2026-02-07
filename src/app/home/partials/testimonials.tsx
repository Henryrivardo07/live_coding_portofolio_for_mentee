import { Icon } from '@iconify/react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import Section from '@/components/layout/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';

import { testimonialsData } from '@/constant/testimonials-data';

const Testimonials = () => {
  return (
    <Section
      title='What Our Clients Say'
      subtitle='Real stories from businesses that have transformed with our IT solutions.'
      id='testimonial'
    >
      <Carousel>
        <CarouselContent>
          {testimonialsData.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialCard
                key={index}
                rating={testimonial.rating}
                description={testimonial.description}
                profileSrc={testimonial.profileSrc}
                profileName={testimonial.profileName}
                profileOccupation={testimonial.profileOccupation}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};

export default Testimonials;

type TestimonialCardProps = {
  rating: number;
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  description,
  profileSrc,
  profileName,
  profileOccupation,
}) => {
  return (
    <div className='bg-base-background rounded-2xl border border-neutral-900 p-4 md:rounded-3xl md:p-6'>
      {/* stars */}
      <div className='flex gap-1'>
        {new Array(rating).fill(null).map((_, index) => (
          <Icon
            key={index}
            icon='line-md:star-filled'
            className='text-2xl text-yellow-500'
          />
        ))}
      </div>

      <p className='text-sm-regular md:text-md-regular text-neutral-25 mt-4 line-clamp-5 h-35 md:h-37.5'>
        {description}
      </p>

      {/* profile */}
      <div className='flex-start mt-4 gap-4 md:mt-6'>
        <Image
          src={profileSrc}
          alt={profileName}
          className='size-12 rounded-full'
        />
        <div>
          <p className='text-sm-bold md:text-md-semibold text-neutral-200'>
            {profileName}
          </p>
          <p className='text-sm-regular md:text-md-regular text-neutral-400'>
            {profileOccupation}
          </p>
        </div>
      </div>
    </div>
  );
};
