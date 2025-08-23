import { useTranslations } from "next-intl";

export const useStudy = () => {
  const t = useTranslations('Default.Studies')

  return [
    {
      title: t('Study_1.TITLE'),
      description: t('Study_1.DESCRIPTION'),
      time: t('Study_1.TIME'),
      date: t('Study_1.DATE'),
    },
    {
      title: t('Study_2.TITLE'),
      description: t('Study_2.DESCRIPTION'),
      time: t('Study_2.TIME'),
      date: t('Study_2.DATE'),
    },
    {
      title: t('Study_3.TITLE'),
      description: t('Study_3.DESCRIPTION'),
      time: t('Study_3.TIME'),
      date: t('Study_3.DATE'),
    },
    {
      title: t('Study_4.TITLE'),
      description: t('Study_4.DESCRIPTION'),
      time: t('Study_4.TIME'),
      date: t('Study_4.DATE'),
    },
    {
      title: t('Study_5.TITLE'),
      description: t('Study_5.DESCRIPTION'),
      time: t('Study_5.TIME'),
      date: t('Study_5.DATE'),
    },
  ]
}
