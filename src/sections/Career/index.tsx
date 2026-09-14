'use client'

import { useWorks } from '@/mocks/Works'
import { useStudy } from '@/mocks/Study'
import CardWork from '@/components/CardWork'
import { useTranslations } from 'next-intl'
import { motion, useReducedMotion } from 'framer-motion'

interface TimelineItem {
  title: string;
  description: string;
  time: string;
  date: string;
}

function TimelineColumn({ items }: { items: TimelineItem[] }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative mt-6 w-full pl-6 md:w-[22rem]">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-soft" />
      <div className="flex flex-col gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative"
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <span className="absolute -left-[1.72rem] top-1.5 h-2 w-2 rounded-full bg-primary" />
            <div className="text-text-primary bg-surface rounded-lg p-4">
              <h3 className="font-bold">{item.title}</h3>
              <p className="font-medium text-sm text-text-secondary my-2">
                {item.description}
              </p>
              <div className="flex flex-row justify-between font-mono text-xs text-primary">
                <span className="font-bold">{item.time}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Career() {
  const Study = useStudy()
  const Works = useWorks()
  const t = useTranslations('Default.Career')

  return (
    <div className="flex mt-16 flex-col">
      <div className="md:flex md:items-center md:justify-center md:flex-col md:mb-16">
        <CardWork text={t('CAREER')} />
        <h2 className="mt-4 font-display font-extrabold text-text-primary text-2xl md:text-5xl w-[8rem] md:w-auto">{t('CARRER_PATH')}</h2>
      </div>

      <div className="md:flex md:flex-row md:justify-between md:gap-16">
        <div className="md:flex md:flex-col md:items-start">
          <h3 className="mt-6 font-display font-extrabold text-text-primary text-base md:text-3xl w-[8rem] break-words mb-2 md:w-auto">
            {t('PROFESSIONAL_AREA')}
          </h3>
          <span className="text-text-secondary font-normal flex mt-2 md:text-lg">{t('PROFESSIONAL_SINCE')}</span>
          <TimelineColumn items={Works} />
        </div>

        <div className="md:flex md:flex-col md:items-start">
          <h3 className="mt-6 font-display font-extrabold text-text-primary text-base md:text-3xl w-[8rem] break-words mb-2 md:w-auto">
            {t('ACADEMIC_AREA')}
          </h3>
          <span className="text-text-secondary font-normal flex mt-2 md:text-lg">{t('ACADEMIC_SINCE')}</span>
          <TimelineColumn items={Study} />
        </div>
      </div>
    </div>
  )
}
