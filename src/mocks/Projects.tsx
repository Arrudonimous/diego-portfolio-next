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
  caseStudyLink?: string;
}

export const useProjects = (): Project[] => {
  const t = useTranslations('Default.Projects')

  return [
    {
      title: t('Project_1.TITLE'),
      description: t('Project_1.DESCRIPTION'),
      cards: [
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'InfinitePay' },
        { name: 'Tailwind CSS' },
      ],
      image: '/assets/images/PesqueiroArruda.png',
      link: 'https://www.pesqueiroarruda.com.br/',
      featured: true,
      caseStudyLink: '/projects/pesqueiro-arruda',
    },
    {
      title: t('Project_2.TITLE'),
      description: t('Project_2.DESCRIPTION'),
      cards: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
      ],
      image: '/assets/images/PontoDoSabor.png',
      link: 'https://ponto-do-sabor-six.vercel.app/',
      featured: false,
    },
    {
      title: t('Project_3.TITLE'),
      description: t('Project_3.DESCRIPTION'),
      cards: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
      ],
      image: '/assets/images/BarbeariaNovaEra.png',
      link: 'https://barbearia-nova-era.vercel.app/',
      featured: false,
    },
    {
      title: t('Project_4.TITLE'),
      description: t('Project_4.DESCRIPTION'),
      cards: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
      ],
      image: '/assets/images/LojaEncanto.png',
      link: 'https://loja-encanto.vercel.app/',
      featured: false,
    },
    {
      title: t('Project_5.TITLE'),
      description: t('Project_5.DESCRIPTION'),
      cards: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
      ],
      image: '/assets/images/ContabilidadeRocha.png',
      link: 'https://contabilidade-rocha-rouge.vercel.app/',
      featured: false,
    },
    {
      title: t('Project_6.TITLE'),
      description: t('Project_6.DESCRIPTION'),
      cards: [
        { name: 'Node.js' },
        { name: 'Prisma' },
        { name: 'React Native' },
      ],
      image: '/assets/images/Trainya.png',
      link: 'https://github.com/trainya-app',
      featured: false,
    },
    {
      title: t('Project_7.TITLE'),
      description: t('Project_7.DESCRIPTION'),
      cards: [
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
      ],
      image: '/assets/images/Snugglify.png',
      link: 'https://snugglify.vercel.app/',
      featured: false,
    },
  ]
}
