import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

import { cn } from '@/lib/utils';

// =============================================================================
// TYPES
// =============================================================================

/** Props untuk satu item accordion (judul, deskripsi, dan nomor urut). */
type PhasesAccordionItemProps = {
  index?: number;
  title: string;
  description: string;
};

/** Satu child yang valid: React element dengan props PhasesAccordionItemProps. */
type PhasesAccordionItemElement = React.ReactElement<PhasesAccordionItemProps>;

/** Props untuk container accordion: menerima satu atau banyak PhasesAccordionItem. */
type PhasesAccordionProps = {
  children: PhasesAccordionItemElement | PhasesAccordionItemElement[];
};

// =============================================================================
// SUB-COMPONENT: Indikator nomor step (kolom kiri)
// =============================================================================

type PhaseStepIndicatorProps = {
  index?: number;
};

/**
 * Menampilkan nomor urut di kolom kiri dengan:
 * - Garis vertikal penghubung antar step
 * - Lingkaran nomor (bg primary)
 * - Efek glow di belakang nomor
 *
 * Class nth-last-child(2) dipakai agar item kedua dari belakang (indikator terakhir)
 * punya margin 0 dan garis setengah tinggi.
 */
function PhaseStepIndicator({ index }: PhaseStepIndicatorProps) {
  const wrapperClasses = cn(
    'group relative mb-4 last:mb-0 md:mb-8 [&:nth-last-child(2)]:mb-0',
    '[&:nth-last-child(2)>.line-decoration]:h-1/2'
  );

  const lineClasses =
    'line-decoration absolute left-1/2 h-[calc(100%+1rem)] w-0.25 -translate-x-1/2 bg-neutral-800 group-first:top-1/2 md:h-[calc(100%+2rem)]';

  const numberCircleClasses =
    'flex-center bg-primary-300 text-neutral-25 text-sm-semibold md:text-md-semibold absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full';

  const glowClasses =
    'flex-center absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full shadow-[0_0_17px_rgba(0,147,221,0.6)] blur-3xl';

  return (
    <div className={wrapperClasses}>
      <div className={lineClasses} />
      <span className={numberCircleClasses}>{index}</span>
      <span className={glowClasses}>{index}</span>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT: PhasesAccordion
// =============================================================================

/**
 * Container accordion untuk daftar phase/step.
 * - Hanya satu item terbuka dalam satu waktu (type="single").
 * - Bisa ditutup lagi (collapsible).
 * - Layout: grid 2 kolom (nomor kiri, konten kanan).
 * - Index (1, 2, 3, ...) di-inject otomatis ke tiap child via cloneElement.
 */
const PhasesAccordion: React.FC<PhasesAccordionProps> = ({ children }) => {
  return (
    <Accordion type='single' collapsible>
      <div className='grid grid-cols-[2.5rem_auto] gap-x-4 md:grid-cols-[3rem_auto] md:gap-x-6'>
        {React.Children.map(children, (child, idx) =>
          React.cloneElement(child, { index: idx + 1 })
        )}
      </div>
    </Accordion>
  );
};

// =============================================================================
// ITEM COMPONENT: PhasesAccordionItem
// =============================================================================

/**
 * Satu item dalam PhasesAccordion.
 * - Kolom kiri: nomor step (PhaseStepIndicator).
 * - Kolom kanan: judul (trigger) + deskripsi (content).
 * Prop `index` biasanya diisi otomatis oleh PhasesAccordion.
 */
export const PhasesAccordionItem: React.FC<PhasesAccordionItemProps> = ({
  index,
  title,
  description,
}) => {
  return (
    <>
      <PhaseStepIndicator index={index} />
      <AccordionItem value={`item-${index}`}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </>
  );
};

export default PhasesAccordion;
