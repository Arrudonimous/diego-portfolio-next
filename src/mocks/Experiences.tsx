import { useTranslations } from 'next-intl';
import { IconType } from 'react-icons';
import { BsLaptop, BsCodeSlash } from 'react-icons/bs';
import { MdOutlineScience } from 'react-icons/md';

interface Experience {
  icon: IconType;
  text1: string;
  text2: string;
}

export function useExperiences(): Experience[] {
  const t = useTranslations('Default');

  return [
    {
      icon: BsLaptop,
      text1: t('Experiences.Exp_1.TEXT_1'),
      text2: t('Experiences.Exp_1.TEXT_2'),
    },
    {
      icon: BsCodeSlash,
      text1: t('Experiences.Exp_2.TEXT_1'),
      text2: t('Experiences.Exp_2.TEXT_2'),
    },
    {
      icon: MdOutlineScience,
      text1: t('Experiences.Exp_3.TEXT_1'),
      text2: t('Experiences.Exp_3.TEXT_2'),
    },
  ];
}
