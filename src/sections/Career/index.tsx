'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Works from '@/mocks/Works'
import Study from '@/mocks/Study'
import CardWork from '@/components/CardWork'

export default function Career() {
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
        <CardWork text="💼 Carreira" />
        <h1 className="mt-4 font-extrabold text-white text-2xl md:hidden">Trajetória </h1>
        <h1 className="font-extrabold text-white text-2xl md:hidden">até aqui</h1>
        <h1 className="mt-4 font-extrabold text-white text-2xl hidden md:flex">Trajetória até aqui</h1>
      </div>

      <div className="md:flex md:flex-row md:justify-between">
        <div className="md:flex md:items-center md:justify-center md:flex-col md:gap-2">
          <h1 className="mt-6 font-extrabold text-white text-base md:hidden">Área</h1>
          <h1 className="font-extrabold text-white text-base md:hidden">Profissional</h1>
          <h1 className="font-extrabold text-white text-3xl hidden md:flex mb-2">Área Profissional</h1>
          <span className="text-white opacity-50 font-normal flex mt-2 md:text-2xl md:mb-16">2021 · Atualmente</span>

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
          <h1 className="mt-6 font-extrabold text-white text-base md:hidden">Área</h1>
          <h1 className="font-extrabold text-white text-base md:hidden">Acadêmica</h1>
          <h1 className="font-extrabold text-white text-3xl hidden md:flex mb-2">Área Acadêmica</h1>
          <span className="text-white opacity-50 font-normal flex mt-2 md:text-2xl md:mb-16">2021 · Atualmente</span>

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
