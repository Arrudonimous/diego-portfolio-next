'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { MdFormatQuote } from 'react-icons/md'
import Card from '../../components/Card'
import RecomendationsMock from '@/mocks/Recomendations'

export default function Recomendations() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
  })

  return (
    <div className="mt-16" id="Recomendations">
      <Card text="💬 Recomendações" />
      <h1 className="mt-4 font-extrabold text-white text-2xl md:hidden">Em</h1>
      <h1 className="font-extrabold text-white text-2xl md:hidden">depoimento</h1>
      <h1 className="font-extrabold text-white text-2xl hidden md:flex md:text-5xl md:mt-6">
        Em depoimento
      </h1>

      <div className='w-full mt-6 md:hidden'>
        <div ref={sliderRef} className="keen-slider">
          {RecomendationsMock.map((item, idx) => (
            <div key={idx} className="keen-slider__slide">
              <div className="border-2 rounded-lg border-border p-4 flex flex-col">
                <MdFormatQuote size={30} color="#7B4AE2" />
                <span className="text-white opacity-50 text-sm">{item.description}</span>
                <div className="flex flex-row font-bold mt-6 gap-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-12 h-12 rounded-[6.25rem]"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-white">{item.name}</h1>
                    <span className="text-text opacity-50">{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="hidden md:flex flex-row gap-10 flex-wrap justify-center">
        {RecomendationsMock.map((item, idx) => (
          <div key={idx} className="border-2 rounded-lg border-border p-4 flex flex-col md:w-[30rem] md:mt-16">
            <MdFormatQuote size={30} color="#7B4AE2" />
            <span className="text-white opacity-50 text-sm">{item.description}</span>
            <div className="flex flex-row font-bold mt-6 gap-2">
              <img
                src={item.image}
                alt=""
                className="w-12 h-12 rounded-[6.25rem]"
              />
              <div className="flex flex-col">
                <h1 className="text-white">{item.name}</h1>
                <span className="text-text opacity-50">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
