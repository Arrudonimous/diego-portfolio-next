'use client'
import { FiArrowDown } from 'react-icons/fi'
import SocialMedias from '../SocialMedias'
import Card from '../Card'
import LinkInstagram from '../LinkInstagram'
import CodeEditorPanel from './CodeEditorPanel'
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl'
import { motion, useReducedMotion, Variants } from 'framer-motion'

export default function Header() {
  const t = useTranslations('Default')
  const T_PREFIX_NAVBAR = 'Header.Nav.'
  const router = useRouter();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion()

  const segments = pathname.split('/')
  const locale: 'pt' | 'en' = segments[1] === 'en' ? 'en' : 'pt'

  const switchLocale = (newLocale: 'pt' | 'en') => {
    const nextSegments = pathname.split('/')

    const isValidLocale = ['pt', 'en'].includes(nextSegments[1])
    if (isValidLocale) {
      nextSegments[1] = newLocale
    } else {
      nextSegments.splice(1, 0, newLocale)
    }

    const newPath = nextSegments.join('/') || '/'
    router.replace(newPath)
    router.refresh()
  }

  const toggleLocale = () => {
    const newLocale: 'pt' | 'en' = locale === 'pt' ? 'en' : 'pt'
    switchLocale(newLocale)
  }

  const container: Variants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion ? {} : { staggerChildren: 0.12 },
    },
  }

  const item: Variants = {
    hidden: shouldReduceMotion ? {} : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <div className='flex items-center justify-center flex-col' id='Header'>
      <div className='md:hidden'>
        <SocialMedias toggleLocale={toggleLocale} locale={locale} />
      </div>

      <nav className="bg-surface w-full items-center py-3 rounded-2xl justify-center hidden md:flex gap-24">
        <ul className="flex flex-row gap-10 text-text-secondary text-lg">
          <li><a href="#Home" className="text-primary font-bold hover:cursor-pointer hover:text-text-primary transition-colors">{t(T_PREFIX_NAVBAR + 'HOME')}</a></li>
          <li><a href="#About" className="hover:cursor-pointer hover:text-text-primary transition-colors">{t(T_PREFIX_NAVBAR + 'ABOUT')}</a></li>
          <li><a href="#Portfolio" className="hover:cursor-pointer hover:text-text-primary transition-colors">{t(T_PREFIX_NAVBAR + 'PORTFOLIO')}</a></li>
          <li><a href="#Skills" className="hover:cursor-pointer hover:text-text-primary transition-colors">{t(T_PREFIX_NAVBAR + 'SKILLS')}</a></li>
          <li><a href="#Recomendations" className="hover:cursor-pointer hover:text-text-primary transition-colors">{t(T_PREFIX_NAVBAR + 'RECOMENDATIONS')}</a></li>
          <li><a href="#Contacts" className="hover:cursor-pointer hover:text-text-primary transition-colors">{t(T_PREFIX_NAVBAR + 'CONTACTS')}</a></li>
        </ul>

        <button
          onClick={toggleLocale}
          className="flex items-center gap-2 px-4 py-2 bg-primary-soft hover:bg-primary/20 rounded-full border border-primary-soft transition-all"
        >
          {locale === 'pt' ? (
            <>
              <img src="/assets/flags/BrasilFlag.svg" alt="Português" width={24} height={24} />
              <span className="text-text-primary text-sm font-medium">Português</span>
            </>
          ) : (
            <>
              <img src="/assets/flags/UsaFlag.svg" alt="English" width={24} height={24} />
              <span className="text-text-primary text-sm font-medium">English</span>
            </>
          )}
        </button>
      </nav>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full mt-10 md:mt-20 md:flex md:flex-row md:items-center md:justify-between md:gap-16"
      >
        <div className="md:w-1/2 flex flex-col">
          <motion.div variants={item}>
            <Card text={`👋 ${t('Header.HELLO')}`} />
          </motion.div>

          <motion.h1 variants={item} className="font-display text-text-primary font-extrabold text-5xl md:text-[3.5rem] mt-4 leading-none">
            Diego Arruda
          </motion.h1>

          <motion.span variants={item} className="text-primary font-semibold text-lg md:text-xl mt-3 block">
            {t('Header.ROLE')}
          </motion.span>

          <motion.p variants={item} className="text-text-secondary text-base md:text-lg mt-3 max-w-md">
            {t('Header.PITCH')}
          </motion.p>

          <motion.div variants={item} className="flex flex-row flex-wrap items-center gap-4 mt-8">
            <a
              href="#Portfolio"
              className="bg-primary text-text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('Header.VIEW_WORK')}
            </a>
            <a
              href="https://drive.google.com/file/d/162HDua0i-XvOKIORHcX3fe7G14mIlFXr/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-primary-soft text-text-primary font-semibold px-6 py-3 rounded-lg hover:border-primary transition-colors"
            >
              {t('Header.DOWNLOAD_CV')}
            </a>
          </motion.div>

          <motion.div variants={item} className="hidden md:flex items-center gap-4 mt-8">
            <SocialMedias />
            <LinkInstagram />
          </motion.div>
        </div>

        <motion.div variants={item} className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <CodeEditorPanel />
        </motion.div>
      </motion.div>

      <div className="flex items-center justify-center mt-10 md:mt-16 md:mb-24">
        <a href="#About" className="flex bg-primary-soft p-4 rounded-[6rem] border-2 border-primary-soft text-primary animate-bounce hover:cursor-pointer">
          <FiArrowDown size={30} />
        </a>
      </div>
    </div>
  );
}
