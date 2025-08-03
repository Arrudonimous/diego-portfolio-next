import { useTranslations } from 'next-intl';
import Card from '../../components/Card';

export default function AboutMe() {
  const t = useTranslations('Default.About')
  return (
    <div
      className="flex flex-col mt-20 items-center justify-center md:flex-row md:gap-52 md:mt-36"
      id="About"
    >
      <img
        src="./assets/images/ProfilePic.svg"
        alt=""
        className="w-80 mb-8 hover:scale-[1.01] md:w-[50rem]"
      />
      <div className="w-full">
        <Card text={t('ABOUT_ME')} />
        <h1 className="text-white font-extrabold text-2xl mt-16 mb-3 md:hidden">
          Diego Arruda
        </h1>
        <h1 className="text-white font-extrabold text-5xl mt-16 mb-3 hidden md:flex">
          Diego de Veras Arruda 👨🏻‍💻
        </h1>
        <div className="flex flex-col font-medium text-lg text-white opacity-50 gap-3 md:mt-5">
          <span className="block">
            {t('PARAGRAPH_1')}
          </span>
          <span className="block">
            {t('PARAGRAPH_2')}
          </span>
          <span className="block">
            {t('PARAGRAPH_3')}
          </span>
          <span className="block mt-8">
            {t('PARAGRAPH_4')}
          </span>
        </div>
      </div>
    </div>
  );
}
