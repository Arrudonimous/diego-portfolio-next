import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export default function SocialMedias() {
  return (
    <div className="flex flex-row gap-4 opacity-50 mb-2">
      <a href="https://github.com/Arrudonimous">
        <AiOutlineGithub size={30} color="#FFFFFF" />
      </a>
      <a href="https://www.instagram.com/_arruda.js/">
        <AiOutlineInstagram size={30} color="#FFFFFF" />
      </a>

      <a href="https://www.linkedin.com/in/diego-arruda-9586791bb/">
        <AiOutlineLinkedin size={30} color="#FFFFFF" />
      </a>
    </div>
  );
}
