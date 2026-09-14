'use client'

import { MdFormatQuote } from 'react-icons/md'
import Card from '../../components/Card'
import { useRecomendations } from '@/mocks/Recomendations'
import { useTranslations } from 'next-intl'

export default function Recomendations() {
  const RecomendationsMock = useRecomendations()

  const t = useTranslations('Default')
  const T_PREFIX = "Recomendations."

  return (
    <div className="mt-16" id="Recomendations">
      <Card text={t(T_PREFIX + "TAG_TITLE")} />
      <h2 className="mt-4 font-display font-extrabold text-text-primary text-2xl md:text-5xl w-[8rem] md:w-auto">
        {t(T_PREFIX + "TITLE")}
      </h2>

      <div className="mt-10 flex flex-col gap-10 md:flex-row md:flex-wrap">
        {RecomendationsMock.map((item, idx) => (
          <div key={idx} className="relative md:w-[28rem]">
            <MdFormatQuote size={56} className="text-primary/20" />
            <p className="text-text-secondary text-base leading-relaxed -mt-4">{item.description}</p>
            <div className="mt-4 flex flex-row items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="font-semibold text-text-primary">
                {item.name}
                <span className="text-text-secondary font-normal"> · {item.role}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
