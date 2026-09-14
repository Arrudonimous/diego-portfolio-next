import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export default function SocialMedias() {
  return (
    <div className="flex flex-row gap-4 text-text-secondary mb-2">
      <a href="https://github.com/Arrudonimous" aria-label="GitHub" className="hover:text-text-primary transition-colors">
        <AiOutlineGithub size={30} />
      </a>
      <a href="https://www.instagram.com/_arruda.js/" aria-label="Instagram" className="hover:text-text-primary transition-colors">
        <AiOutlineInstagram size={30} />
      </a>

      <a href="https://www.linkedin.com/in/diego-arruda-9586791bb/" aria-label="LinkedIn" className="hover:text-text-primary transition-colors">
        <AiOutlineLinkedin size={30} />
      </a>
    </div>
  );
}
