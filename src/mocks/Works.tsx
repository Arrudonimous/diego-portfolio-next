import { useTranslations } from 'next-intl'

export const useWorks = () => {
  const t = useTranslations('Default.Works')

  return [
    {
      title: t('Work_1.TITLE'),
      description: t('Work_1.DESCRIPTION'),
      time: t('Work_1.TIME'),
      date: t('Work_1.DATE'),
    },
    {
      title: t('Work_2.TITLE'),
      description: t('Work_2.DESCRIPTION'),
      time: t('Work_2.TIME'),
      date: t('Work_2.DATE'),
    },
    {
      title: t('Work_3.TITLE'),
      description: t('Work_3.DESCRIPTION'),
      time: t('Work_3.TIME'),
      date: t('Work_3.DATE'),
    },
    {
      title: t('Work_4.TITLE'),
      description: t('Work_4.DESCRIPTION'),
      time: t('Work_4.TIME'),
      date: t('Work_4.DATE'),
    },
    {
      title: t('Work_5.TITLE'),
      description: t('Work_5.DESCRIPTION'),
      time: t('Work_5.TIME'),
      date: t('Work_5.DATE'),
    },
  ]
}
