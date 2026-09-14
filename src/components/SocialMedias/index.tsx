import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export default function SocialMedias({ toggleLocale, locale }: { toggleLocale?: () => void, locale?: string}) {
  return (
    <div className="flex flex-row gap-4 text-text-secondary mb-2 items-center">
      <a href="https://github.com/Arrudonimous" aria-label="GitHub" className="hover:text-text-primary transition-colors">
        <AiOutlineGithub size={30} />
      </a>
      <a href="https://www.instagram.com/_arruda.js/" aria-label="Instagram" className="hover:text-text-primary transition-colors">
        <AiOutlineInstagram size={30} />
      </a>

      <a href="https://www.linkedin.com/in/diego-arruda-9586791bb/" aria-label="LinkedIn" className="hover:text-text-primary transition-colors">
        <AiOutlineLinkedin size={30} />
      </a>

      {toggleLocale && (
        <button
          onClick={toggleLocale}
          className='flex items-center gap-2 px-4 py-2 bg-primary-soft hover:bg-primary/20 rounded-full border border-primary-soft transition-all'
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
      )}
    </div>
  );
}
