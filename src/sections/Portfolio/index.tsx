'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Card from '../../components/Card'
import { useProjects } from '@/mocks/Projects'
import { useProjectsAngular } from '@/mocks/ProjectsAngular'
import CardWork from '../../components/CardWork'

export default function Portfólio() {
  const Projects = useProjects()
  const ProjectsAngular = useProjectsAngular()
  const [sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 30,
    },
  })

  return (
    <div className="flex mt-24 flex-col md:mt-32" id="Portfolio">
      <Card text="🔗 Portfólio" />
      <h1 className="mt-4 font-extrabold text-white text-2xl md:hidden">Trabalhos </h1>
      <h1 className="font-extrabold text-white text-2xl md:hidden">e Projetos</h1>

      <h1 className="font-extrabold text-white text-5xl mt-6 mb-24 hidden md:flex">Trabalhos e Projetos</h1>

      <h2 className="font-extrabold text-white text-xl flex md:text-3xl mt-8 md:mt-0">React.js/Next.js</h2>

      <div className='w-full md:hidden lg:hidden'>
        <div ref={sliderInstanceRef} className="keen-slider">
          {Projects.map((item, idx) => (
            <div key={idx} className="keen-slider__slide number-slide flex">
              <div className="border-2 rounded-lg border-border py-7 px-6 text-white mt-7 hover:scale-[1.01] w-full">
                <a href={item.link}>
                  <h1 className="font-bold">{item.title}</h1>
                  <span className="font-medium text-sm opacity-50 flex my-2">
                    {item.description}
                  </span>
                  <div className="flex flex-row gap-1 mb-4">
                    {item.cards.map((value, i) => (
                      <Card key={i} text={value.name} />
                    ))}
                  </div>
                  <img src={item.image} alt="" className="w-full rounded-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:grid hidden grid-cols-4 gap-16">
        {Projects.map((item, idx) => (
          <div key={idx} className="border-2 rounded-lg border-border py-6 px-8 text-white mt-7 hover:scale-[1.01] md:w-[18rem] hidden md:flex">
            <a href={item.link} className="flex flex-col justify-between">
              <div>
                <h1 className="font-bold text-xl mb-2">{item.title}</h1>
                <span className="font-medium text-base opacity-50 flex mb-20">
                  {item.description}
                </span>
              </div>
              <div>
                <div className="flex flex-row gap-3 mb-5">
                  {item.cards.map((value, i) => (
                    <CardWork key={i} text={value.name} />
                  ))}
                </div>
                <img src={item.image} alt="" className="w-full rounded-lg" />
              </div>
            </a>
          </div>
        ))}
      </div>


      <h2 className="font-extrabold text-white text-xl flex mt-8 md:text-3xl">Angular.js</h2>

      <div className='w-full md:hidden lg:hidden'>
        <div ref={sliderInstanceRef} className="keen-slider">
          {ProjectsAngular.map((item, idx) => (
            <div key={idx} className="keen-slider__slide number-slide flex">
              <div className="border-2 rounded-lg border-border py-7 px-6 text-white mt-7 hover:scale-[1.01] w-full">
                <a href={item.link}>
                  <h1 className="font-bold">{item.title}</h1>
                  <span className="font-medium text-sm opacity-50 flex my-2">
                    {item.description}
                  </span>
                  <div className="flex flex-row gap-1 mb-4">
                    {item.cards.map((value, i) => (
                      <Card key={i} text={value.name} />
                    ))}
                  </div>
                  <img src={item.image} alt="" className="w-full rounded-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:grid hidden grid-cols-4 gap-16">
        {ProjectsAngular.map((item, idx) => (
          <div key={idx} className="border-2 rounded-lg border-border py-6 px-8 text-white mt-7 hover:scale-[1.01] md:w-[18rem] hidden md:flex">
            <a href={item.link} className="flex flex-col justify-between">
              <div>
                <h1 className="font-bold text-xl mb-2">{item.title}</h1>
                <span className="font-medium text-base opacity-50 flex mb-20">
                  {item.description}
                </span>
              </div>
              <div>
                <div className="flex flex-row gap-3 mb-5">
                  {item.cards.map((value, i) => (
                    <CardWork key={i} text={value.name} />
                  ))}
                </div>
                <img src={item.image} alt="" className="w-full rounded-lg" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
