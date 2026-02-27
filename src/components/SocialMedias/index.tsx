import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export default function SocialMedias({toggleLocale, locale}) {
  return (
    <div className='flex flex-row gap-4 opacity-50 mb-2 items-center'>
      <a href='https://github.com/Arrudonimous'>
        <AiOutlineGithub size={30} color='#FFFFFF' />
      </a>
      <a href='https://www.instagram.com/_arruda.js/'>
        <AiOutlineInstagram size={30} color='#FFFFFF' />
      </a>

      <a href='https://www.linkedin.com/in/diego-arruda-9586791bb/'>
        <AiOutlineLinkedin size={30} color='#FFFFFF' />
      </a>

      <button
        onClick={toggleLocale}
        className='flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all'
      >
        {locale === 'pt' ? (
          <>
            <img
              src='/assets/flags/BrasilFlag.svg'
              alt='Português'
              width={24}
              height={24}
            />
          </>
        ) : (
          <>
            <img
              src='/assets/flags/UsaFlag.svg'
              alt='English'
              width={24}
              height={24}
            />
          </>
        )}
      </button>
    </div>
  );
}
