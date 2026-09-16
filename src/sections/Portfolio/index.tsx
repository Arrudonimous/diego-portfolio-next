'use client'

import Card from '../../components/Card'
import ProjectCard from '../../components/ProjectCard'
import { useProjects } from '@/mocks/Projects'
import { useProjectsAngular } from '@/mocks/ProjectsAngular'
import { useTranslations } from 'next-intl'

export default function Portfolio() {
  const Projects = useProjects()
  const ProjectsAngular = useProjectsAngular()

  const t = useTranslations("Default")
  const T_PREFIX = "Projects."
  const tCaseStudy = useTranslations("CaseStudies.PesqueiroArruda")

  const featured = Projects.filter((item) => item.featured)
  const compact = [
    ...Projects.filter((item) => !item.featured),
    ...ProjectsAngular,
  ]

  return (
    <div className="flex mt-24 flex-col md:mt-32" id="Portfolio">
      <Card text={t(T_PREFIX + "TAG_TITLE")} />

      <h2 className="mt-4 font-display font-extrabold text-text-primary text-2xl md:text-5xl w-[8rem] md:w-auto">{t(T_PREFIX + "TITLE")}</h2>

      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 md:gap-8">
        {featured.map((item, idx) => (
          <ProjectCard
            key={idx}
            variant="featured"
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            cards={item.cards}
            caseStudyLink={item.caseStudyLink}
            visitLiveSiteLabel={item.caseStudyLink ? tCaseStudy('LIVE_LINK_LABEL') : undefined}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {compact.map((item, idx) => (
          <ProjectCard
            key={idx}
            variant="compact"
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            cards={item.cards}
          />
        ))}
      </div>
    </div>
  )
}
