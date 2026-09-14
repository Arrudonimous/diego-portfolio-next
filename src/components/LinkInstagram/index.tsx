import { useTranslations } from 'next-intl';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function LinkInstagram() {
  const t = useTranslations('Default')

  return (
    <a
      href='https://wa.me/5511950260410?text=Olá,%20gostaria%20de%20mais%20informações'
      className='border-primary border-2 rounded-lg py-3 px-2 font-semibold text-base text-primary flex flex-row gap-2'
      target="_blank"
      rel="noreferrer"
    >
      <AiOutlineWhatsApp size={25} />
      <span>{t('Header.LETS_TALK')}</span>
    </a>
  );
}
