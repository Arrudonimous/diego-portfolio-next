'use client'

import Card from '../../components/Card'
import CardWork from '../../components/CardWork'
import { useSkills } from '@/mocks/Skills'
import { useTranslations } from 'next-intl'

export default function Skills() {
  const skills = useSkills()
  const t = useTranslations('Default')
  const T_PREFIX = "Skills."

  const daily = skills.filter((s) => s.category === 'daily')
  const tools = skills.filter((s) => s.category === 'tools')
  const learning = skills.filter((s) => s.category === 'learning')

  return (
    <div className="mt-16 md:mt-36 md:flex md:flex-col md:justify-center md:items-center md:w-full" id="Skills">
      <div className="md:hidden">
        <Card text={t(T_PREFIX + "TAG_TITLE")} />
      </div>

      <div className="hidden md:flex">
        <CardWork text={t(T_PREFIX + "TAG_TITLE")} />
      </div>

      <h2 className="mt-4 font-display font-extrabold text-text-primary text-2xl md:text-5xl w-[8rem] md:w-auto">{t(T_PREFIX + "TITLE")}</h2>

      <div className="w-full mt-8 flex flex-col items-center gap-10 md:mt-10">
        <div className="w-full flex flex-col items-center">
          <h3 className="flex text-sm md:text-2xl text-text-secondary mb-6 self-start md:self-center">{t(T_PREFIX + "DAY_TECHS")}</h3>
          <div className="flex flex-wrap justify-center gap-6 text-primary">
            {daily.map((skill) => (
              <skill.icon key={skill.name} size={50} title={skill.name} className="hover:scale-[1.1] opacity-70 hover:opacity-100 transition-all duration-200 md:w-[70px] md:h-[70px]" />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <h3 className="flex text-sm md:text-2xl text-text-secondary mb-6 self-start md:self-center">{t(T_PREFIX + "TOOLS_TECHS")}</h3>
          <div className="flex flex-wrap justify-center gap-6 text-primary">
            {tools.map((skill) => (
              <skill.icon key={skill.name} size={50} title={skill.name} className="hover:scale-[1.1] opacity-70 hover:opacity-100 transition-all duration-200 md:w-[70px] md:h-[70px]" />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <h3 className="flex text-sm md:text-2xl text-text-secondary mb-6 self-start md:self-center">{t(T_PREFIX + "LEARNING_TECHS")}</h3>
          <div className="flex flex-wrap justify-center gap-6 text-accent">
            {learning.map((skill) => (
              <skill.icon key={skill.name} size={50} title={skill.name} className="hover:scale-[1.1] transition-all duration-200 md:w-[70px] md:h-[70px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
