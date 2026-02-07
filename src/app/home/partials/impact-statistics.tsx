import Image from 'next/image';
import React from 'react';

const ImpactStatistics = () => {
  return (
    <div
      className='custom-container flex flex-wrap items-center gap-6 py-5 md:gap-12 md:py-20'
      id='about'
    >
      <Image
        src='/images/impact-image.jpg'
        alt='impact image'
        width={442}
        height={432}
        className='flex-[2.3] basis-85 rounded-2xl object-cover'
      />
      <div className='flex-[7.7] basis-85'>
        <h2 className='display-sm-bold md:display-lg-bold text-neutral-25'>
          Proven Results, Measurable Impact
        </h2>
        <p className='text-sm-regular md:text-md-regular mt-4 text-neutral-400'>
          We are a team of tech enthusiasts dedicated to building innovative and
          scalable IT solutions. From software development to cloud integration,
          we help businesses thrive in the digital era.
        </p>
        <Statistics />
      </div>
    </div>
  );
};

export default ImpactStatistics;

type Statistic = {
  data: string;
  info: string;
};

const statistics: Statistic[] = [
  {
    data: '50+',
    info: 'Happy Customer',
  },
  {
    data: '100+',
    info: 'Project Delivered',
  },
  {
    data: '98%',
    info: 'Customer Satisfaction',
  },
];

const Statistics = () => {
  return (
    <div className='mt-6 flex flex-col items-center divide-neutral-900 max-md:divide-y md:mt-12 md:flex-row md:divide-x'>
      {statistics.map((statistic) => (
        <div
          key={statistic.data}
          className='w-45 flex-1 text-center max-md:w-full max-md:py-5 max-md:first:pt-0 max-md:last:pb-0 md:px-8 md:first:pl-0 md:last:pr-0'
        >
          <p className='display-md-bold md:display-lg-bold text-neutral-25'>
            {statistic.data}
          </p>
          <p className='text-sm-regular md:text-md-regular mt-1.5 text-neutral-400'>
            {statistic.info}
          </p>
        </div>
      ))}
    </div>
  );
};
