'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Card from '@/components/Card'
import CardWork from '@/components/CardWork'

const LIVE_URL = 'https://www.pesqueiroarruda.com.br/'
const CODE_URL = 'https://github.com/PesqueiroArruda/Landing-page'

type Decision = { TITLE: string; DESCRIPTION: string }
type System = { TITLE: string; STACK: string; DESCRIPTION: string }

export default function PesqueiroArrudaCaseStudy() {
  const t = useTranslations('CaseStudies.PesqueiroArruda')

  const decisions = t.raw('DECISIONS') as Decision[]
  const systems = t.raw('SYSTEMS') as Record<'BACKEND' | 'ADMIN' | 'SITE', System>
  const systemKeys = ['BACKEND', 'ADMIN', 'SITE'] as const

  return (
    <div className="my-8 mx-6 md:my-9 md:mx-36">
      <Link href="/#Portfolio" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
        {t('BACK_LABEL')}
      </Link>

      <div className="mt-8 max-w-3xl">
        <Card text={t('TAG')} />
        <h1 className="font-display font-extrabold text-text-primary text-3xl md:text-5xl mt-4">
          {t('TITLE')}
        </h1>
        <p className="text-text-secondary text-base md:text-lg mt-4">{t('SUBTITLE')}</p>

        <div className="flex flex-row flex-wrap gap-4 mt-6">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-text-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
          >
            {t('LIVE_LINK_LABEL')}
          </a>
          <a
            href={CODE_URL}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-primary-soft text-text-primary font-semibold px-5 py-2.5 rounded-lg hover:border-primary transition-colors text-sm"
          >
            {t('CODE_LINK_LABEL')}
          </a>
        </div>
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="font-display font-bold text-text-primary text-xl md:text-2xl">{t('OVERVIEW_TITLE')}</h2>
        <p className="text-text-secondary mt-3">{t('OVERVIEW')}</p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="font-display font-bold text-text-primary text-xl md:text-2xl">{t('PROBLEM_TITLE')}</h2>
        <p className="text-text-secondary mt-3">{t('PROBLEM')}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display font-bold text-text-primary text-xl md:text-2xl">{t('SYSTEMS_TITLE')}</h2>
        <p className="text-text-secondary mt-3 max-w-3xl">{t('SYSTEMS_INTRO')}</p>

        <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-3">
          {systemKeys.map((key) => (
            <div key={key} className="rounded-lg border border-primary-soft bg-surface p-5">
              <h3 className="font-bold text-text-primary">{systems[key].TITLE}</h3>
              <div className="flex flex-row flex-wrap gap-2 mt-3">
                {systems[key].STACK.split(', ').map((tech) => (
                  <CardWork key={tech} text={tech} />
                ))}
              </div>
              <p className="text-text-secondary text-sm mt-4">{systems[key].DESCRIPTION}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="font-display font-bold text-text-primary text-xl md:text-2xl">{t('DECISIONS_TITLE')}</h2>
        <div className="flex flex-col gap-5 mt-6">
          {decisions.map((d) => (
            <div key={d.TITLE} className="border-l-2 border-primary pl-5">
              <h3 className="font-semibold text-text-primary">{d.TITLE}</h3>
              <p className="text-text-secondary text-sm mt-2">{d.DESCRIPTION}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="font-display font-bold text-text-primary text-xl md:text-2xl">{t('RESULT_TITLE')}</h2>
        <p className="text-text-secondary mt-3">{t('RESULT')}</p>
      </section>

      <section className="mt-10 mb-16 max-w-3xl">
        <h2 className="font-display font-bold text-text-primary text-xl md:text-2xl">{t('NEXT_STEPS_TITLE')}</h2>
        <p className="text-text-secondary mt-3">{t('NEXT_STEPS')}</p>
      </section>
    </div>
  )
}
