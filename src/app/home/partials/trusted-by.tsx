import Marquee from '@/components/marquee';
import { trustedCompaniesData } from '@/constant/trusted-companies-data';
import Image from 'next/image';

const TrustedBy = () => {
  return (
    <div className='mt-6.5 md:mt-20'>
      <h3 className='text-md-semibold md:text-xl-semibold text-neutral-25 text-center'>
        Trusted by Leading Companies Worldwide
      </h3>

      <CompaniesMarquee />
    </div>
  );
};
export default TrustedBy;

const CompaniesMarquee = () => {
  return (
    <div className='custom-container relative flex h-28.5 items-center md:h-50'>
      <div className='w-full overflow-hidden mix-blend-luminosity'>
        <Marquee className='py-4'>
          {trustedCompaniesData.map((data) => (
            <Image
              key={data.alt}
              src={data.src}
              alt={data.alt}
              className='h-full w-auto object-contain select-none'
              style={{
                height: 'clamp(2.13rem, 3.97vw, 3rem)',
              }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
