import { useTranslations } from "next-intl";

interface Card {
  name: string;
}

interface Project {
  title: string;
  description: string;
  cards: Card[];
  image: string;
  link: string;
  featured: boolean;
}

export const useProjects = (): Project[] => {
  const t = useTranslations('Default.Projects')

  return [
    {
      title: t('Project_1.TITLE'),
      description: t('Project_1.DESCRIPTION'),
      cards: [
        { name: 'ReactJs' },
        { name: 'JavaScript' },
      ],
      image: '/assets/images/GithubFinder.png',
      link: 'https://github-finder-gamma-five.vercel.app',
      featured: true,
    },
    {
      title: t('Project_2.TITLE'),
      description: t('Project_2.DESCRIPTION'),
      cards: [
        { name: 'ReactJs' },
        { name: 'JavaScript' },
      ],
      image: '/assets/images/AcquaBuilding.png',
      link: 'https://acqua-building.vercel.app',
      featured: true,
    },
    {
      title: t('Project_3.TITLE'),
      description: t('Project_3.DESCRIPTION'),
      cards: [
        { name: 'ReactJs' },
        { name: 'JavaScript' },
      ],
      image: '/assets/images/Weather App.png',
      link: 'https://weather-app-two-liart.vercel.app',
      featured: false,
    },
    {
      title: t('Project_4.TITLE'),
      description: t('Project_4.DESCRIPTION'),
      cards: [
        { name: 'ReactJs' },
        { name: 'JavaScript' },
      ],
      image: '/assets/images/DevTech.png',
      link: 'https://devtech.vercel.app',
      featured: false,
    },
  ]
}
