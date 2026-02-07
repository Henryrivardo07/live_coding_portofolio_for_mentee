import Section from '@/components/layout/section';
import PhasesAccordion, {
  PhasesAccordionItem,
} from '@/components/phases-accordion';
import { serviceProcessData } from '@/constant/services-process-data';

const ServicesProcess = () => {
  return (
    <Section
      id='services-process'
      title='How We Work'
      subtitle='A structured process to bring your ideas to life—seamless, efficient, and tailored to your needs'
    >
      <PhasesAccordion>
        {serviceProcessData.map((item, index) => (
          <PhasesAccordionItem key={index} {...item} />
        ))}
      </PhasesAccordion>
    </Section>
  );
};

export default ServicesProcess;
