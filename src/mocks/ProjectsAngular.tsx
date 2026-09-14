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

export const useProjectsAngular = (): Project[] => {
  const t = useTranslations('Default.ProjectsAngular')

  return [
    {
      title: t('Project_1.TITLE'),
      description: t('Project_1.DESCRIPTION'),
      cards: [
        { name: 'AngularJs' },
        { name: 'SCSS' },
      ],
      image: '/assets/images/AngularTaskApp.png',
      link: 'https://tasks-list-angular.vercel.app',
    }
  ]
}
