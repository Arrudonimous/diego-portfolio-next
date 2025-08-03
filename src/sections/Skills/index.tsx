'use client'

import {
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiCss3, SiHtml5, SiGithub,
  SiInsomnia, SiFigma, SiDocker, SiMongodb,
} from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io5'
import { GrMysql } from 'react-icons/gr'

import Card from '../../components/Card'
import CardWork from '../../components/CardWork'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useRef } from 'react'

export default function Skills() {
  const [sliderRef1] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 5,
      spacing: 50,
    },
  })

  const [sliderRef2] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 5,
      spacing: 50,
    },
  })

  return (
    <div className="mt-16 text-white md:mt-36 md:flex md:flex-col md:justify-center md:items-center md:w-full" id="Skills">
      <div className="md:hidden">
        <Card text="🧑‍💻 Skills " />
      </div>

      <div className="hidden md:flex">
        <CardWork text="🧑‍💻 Skills · Experiências" />
      </div>

      <h1 className="font-extrabold text-2xl mt-4 md:hidden">Teclogias</h1>
      <h1 className="font-extrabold text-2xl md:hidden">e habilidades</h1>
      <h1 className="font-extrabold text-5xl mt-6 hidden md:flex md:mb-24">Tecnologias e habilidades</h1>

      <span className="flex text-sm md:text-2xl md:mb-10 opacity-50 mt-8 mb-6">Techs que uso no dia a dia</span>

      {/* Mobile Slider 1 */}
      <div className=' w-full text-border md:hidden'>
        <div ref={sliderRef1} className="keen-slider">
          <div className="keen-slider__slide flex justify-center items-center"><SiReact size={50} /></div>
          <div className="keen-slider__slide flex justify-center items-center"><SiJavascript size={50} className="rounded-lg" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><SiTypescript size={50} className="rounded-lg" /></div>
          <div className="keen-slider__slide flex justify-center items-center"><IoLogoNodejs size={55} /></div>
          <div className="keen-slider__slide flex justify-center items-center"><SiTailwindcss size={50} /></div>
          <div className="keen-slider__slide flex justify-center items-center"><SiCss3 size={50} /></div>
          <div className="keen-slider__slide flex justify-center items-center"><SiHtml5 size={50} /></div>
          <div className="keen-slider__slide flex justify-center items-center"><SiGithub size={50} /></div>
          <div className="keen-slider__slide flex justify-center items-center"><SiInsomnia size={50} /></div>
        </div>
      </div>
      
      <div className="hidden md:flex text-text gap-4">
        <SiReact size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <SiJavascript size={70} className="rounded-lg hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <SiTypescript size={70} className="rounded-lg hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <IoLogoNodejs size={75} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <SiTailwindcss size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 " />
        <SiCss3 size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <SiHtml5 size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <SiGithub size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <SiInsomnia size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
      </div>

      <span className="flex text-sm md:text-2xl opacity-50 mt-8 mb-6 md:mb-10">Outras techs com que já realizei projetos</span>

      {/* Mobile Slider 2 */}
      <div className=' w-full text-border md:hidden'>
        <div ref={sliderRef2} className="keen-slider">
          <div className="keen-slider__slide flex justify-center items-center"><SiFigma size={50} /></div>
          <div className="keen-slider__slide flex justify-center items-center"><SiDocker size={50} /></div>
          <div className="keen-slider__slide flex justify-center items-center"><GrMysql size={50} /></div>
          <div className="keen-slider__slide flex justify-center items-center"><SiMongodb size={50} /></div>
        </div>
      </div>

      {/* Desktop Icons 2 */}
      <div className="hidden md:flex text-text gap-4">
        <SiFigma size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <SiDocker size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <GrMysql size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
        <SiMongodb size={70} className="hover:scale-[1.1] opacity-50 hover:opacity-100 transition-all duration-200" />
      </div>
    </div>
  )
}
