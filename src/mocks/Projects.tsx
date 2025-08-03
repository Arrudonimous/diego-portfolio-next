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
}

export const useProjects = () => {
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
    },
  ]
}
