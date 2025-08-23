'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { useWorks } from '@/mocks/Works'
import { useStudy } from '@/mocks/Study'
import CardWork from '@/components/CardWork'
import { useTranslations } from 'next-intl'

export default function Career() {
  const Study = useStudy()
  const Works = useWorks()
  const t = useTranslations('Default.Career')
  const [workSliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 30 },
  })

  const [studySliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 30 },
  })

  return (
    <div className="flex mt-16 flex-col">
      <div className="md:flex md:items-center md:justify-center md:flex-col  md:mb-16">
        <CardWork text={t('CAREER')} />
        <h1 className="mt-4 font-extrabold text-white text-2xl md:text-5xl w-[8rem] md:w-auto">{t('CARRER_PATH')}</h1>
      </div>

      <div className="md:flex md:flex-row md:justify-between">
        <div className="md:flex md:items-center md:justify-center md:flex-col md:gap-2">
          <h1 className="mt-6 font-extrabold text-white text-base md:text-3xl w-[8rem] break-words mb-2 md:w-auto">
            {t('PROFESSIONAL_AREA')}
          </h1>
          <span className="text-white opacity-50 font-normal flex mt-2 md:text-2xl md:mb-16">{t('PROFESSIONAL_SINCE')}</span>

          <div className='w-full mt-6 md:hidden'>
            <div ref={workSliderRef} className="keen-slider">
              {Works.map((item, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <div className="text-white border-2 rounded-lg border-border p-4">
                    <h1 className="font-bold">{item.title}</h1>
                    <span className="font-medium text-sm opacity-50 flex my-2">
                      {item.description}
                    </span>
                    <div className="flex flex-row justify-between text-text">
                      <h1 className="font-bold">{item.time}</h1>
                      <h1>{item.date}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          

          {Works.map((item, idx) => (
            <div key={idx} className="text-white border-2 rounded-lg border-border p-4 hidden md:flex md:flex-col md:w-full">
              <h1 className="font-bold">{item.title}</h1>
              <span className="font-medium text-sm opacity-50 flex my-2">
                {item.description}
              </span>
              <div className="flex flex-row justify-between text-text">
                <h1 className="font-bold">{item.time}</h1>
                <h1>{item.date}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* ACADÊMICA */}
        <div className="md:flex md:items-center md:justify-center md:flex-col md:gap-2">
          <h1 className="mt-6 font-extrabold text-white text-base md:text-3xl w-[8rem] break-words mb-2 md:w-auto">
            {t('ACADEMIC_AREA')}
          </h1>
          <span className="text-white opacity-50 font-normal flex mt-2 md:text-2xl md:mb-16">{t('ACADEMIC_SINCE')}</span>

          {/* Mobile Slider ACADÊMICA */}
          <div className='w-full mt-6 md:hidden'>
            <div ref={studySliderRef} className="keen-slider">
              {Study.map((item, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <div className="text-white border-2 rounded-lg border-border p-4">
                    <h1 className="font-bold">{item.title}</h1>
                    <span className="font-medium text-sm opacity-50 flex my-2">
                      {item.description}
                    </span>
                    <div className="flex flex-row justify-between text-text">
                      <h1 className="font-bold">{item.time}</h1>
                      <h1>{item.date}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop ACADÊMICA */}
          {Study.map((item, idx) => (
            <div key={idx} className="text-white border-2 rounded-lg border-border p-4 hidden md:flex md:flex-col md:w-full">
              <h1 className="font-bold">{item.title}</h1>
              <span className="font-medium text-sm opacity-50 flex my-2">
                {item.description}
              </span>
              <div className="flex flex-row justify-between text-text">
                <h1 className="font-bold">{item.time}</h1>
                <h1>{item.date}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
