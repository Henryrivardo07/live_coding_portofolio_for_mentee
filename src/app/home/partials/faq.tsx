import React from 'react';

import Section from '@/components/layout/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQData } from '@/constant/faq-data';

const FAQ = () => {
  return (
    <Section
      title="Got Questions? We've Got Answers"
      subtitle="We've compiled answers to the most common questions to help you understand our services better"
      id='faq'
    >
      <Accordion type='single' collapsible className='mx-auto max-w-180'>
        {FAQData.map((item, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
