import { useTranslations } from 'next-intl';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function LinkInstagram() {  
  const t = useTranslations('Default')

  return (
    <a href="https://www.instagram.com/_arruda.js/" className=" border-text border-2 rounded-lg py-3 px-2 font-semibold text-base text-text flex flex-row gap-2">
      <AiOutlineInstagram size={25} />
      <h1>{t('Header.LETS_TALK')}</h1>
    </a>
  );
}
