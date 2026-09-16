import { Link } from '@/i18n/navigation'
import Card from '../Card'
import CardWork from '../CardWork'

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  cards: { name: string }[];
  variant?: 'featured' | 'compact';
  caseStudyLink?: string;
  visitLiveSiteLabel?: string;
}

export default function ProjectCard({ title, description, image, link, cards, variant = 'compact', caseStudyLink, visitLiveSiteLabel = 'Visit live site ↗' }: ProjectCardProps) {
  if (variant === 'featured') {
    const cardBody = (
      <>
        <img src={image} alt={`${title} project screenshot`} className="w-full aspect-video object-cover" />
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-xl text-text-primary">{title}</h3>
          <p className="text-text-secondary text-sm mt-2 flex-1">{description}</p>
          <div className="flex flex-row flex-wrap gap-2 mt-4">
            {cards.map((c) => (
              <CardWork key={c.name} text={c.name} />
            ))}
          </div>
          {caseStudyLink && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-primary text-sm font-semibold mt-4 hover:underline w-fit"
            >
              {visitLiveSiteLabel}
            </a>
          )}
        </div>
      </>
    )

    if (caseStudyLink) {
      return (
        <Link
          href={caseStudyLink}
          className="group flex flex-col rounded-xl border border-primary-soft bg-surface overflow-hidden hover:border-primary transition-colors"
        >
          {cardBody}
        </Link>
      )
    }

    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col rounded-xl border border-primary-soft bg-surface overflow-hidden hover:border-primary transition-colors"
      >
        {cardBody}
      </a>
    )
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col justify-between rounded-lg border border-primary-soft bg-surface p-5 hover:border-primary transition-colors"
    >
      <div>
        <h3 className="font-bold text-text-primary">{title}</h3>
        <p className="text-text-secondary text-sm mt-2">{description}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-2 mt-4">
        {cards.map((c) => (
          <Card key={c.name} text={c.name} />
        ))}
      </div>
    </a>
  )
}
