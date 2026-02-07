import React from 'react';

import Section from '@/components/layout/section';

import { serviceData } from '@/constant/services-data';

const Services = () => {
  return (
    <Section
      title='Innovative IT Solutions for Your Business Growth'
      subtitle='We provide tailored, high-performance technology solutions to streamline operations, enhance security, and drive success.'
    >
      <ServiceCards>
        {serviceData.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </ServiceCards>
    </Section>
  );
};

export default Services;

type ServiceCardsProps = {
  children: React.ReactNode;
};

const ServiceCards: React.FC<ServiceCardsProps> = ({ children }) => {
  return <div className='flex flex-wrap gap-4 md:gap-5'>{children}</div>;
};

type ServiceCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCard> = ({ icon, title, description }) => {
  return (
    <div className='bg-base-background flex-1 basis-80 rounded-2xl border border-neutral-900 p-5 md:p-6'>
      {/* image wrapper */}
      <div className='bg-primary-300 flex-center relative mx-auto size-12 rounded-full p-3 md:size-14 [&>*]:h-auto [&>*]:w-full'>
        {icon}
        <div className='absolute inset-0 rounded-full shadow-[0_0_17px_rgba(0,147,221,0.6)] blur-3xl' />
      </div>
      <h3 className='text-md-semibold md:text-xl-semibold text-neutral-25 mt-4 text-center md:mt-6'>
        {title}
      </h3>
      <p className='text-sm-regular md:text-md-regular mt-1 text-center text-neutral-400'>
        {description}
      </p>
    </div>
  );
};
