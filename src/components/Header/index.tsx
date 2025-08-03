import { BiArrowToBottom } from 'react-icons/bi'
import { FiArrowDown } from 'react-icons/fi'
import SocialMedias from '../SocialMedias'
import Card from '../Card'
import LinkInstagram from '../LinkInstagram'

export default function Header() {
  return (
    <div className="flex items-center justify-center flex-col" id="Header">
      <div className="md:hidden">
        <SocialMedias />
      </div>

      <nav className="bg-footer w-full items-center py-3 rounded-2xl justify-center hidden md:flex">
        <ul className="flex flex-row gap-10 text-white opacity-50 text-lg">
          <a href="#Home" className="text-text font-bold hover:cursor-pointer hover:opacity-80">Home</a>
          <a href="#About" className="hover:cursor-pointer hover:opacity-80">Sobre Mim</a>
          <a href="#Portfolio" className="hover:cursor-pointer hover:opacity-80">Portfólio</a>
          <a href="#Skills" className="hover:cursor-pointer hover:opacity-80">Skills</a>
          <a href="#Recomendations" className="hover:cursor-pointer hover:opacity-80">Recomendações</a>
          <a href="#Contacts" className="hover:cursor-pointer hover:opacity-80">Contatos</a>
        </ul>
      </nav>

      <div className="md:flex md:flex-row md:w-full md:justify-between md:mt-16 w-full">
        <div className="hover:scale-[1.01]">
          <div className="flex items-center justify-center m-0">
            <img src="/assets/images/Background.svg" alt="" className="w-[18rem] md:h-[18rem] flex md:hidden absolute" />
            <img src="/assets/images/Icons.png" alt="" className="absolute md:hidden animate-spin-slow opacity-50 w-[24rem]" />
            <img src="/assets/images/Avatar.svg" alt="" className="md:hidden w-[14rem] mt-24 z-50" />
          </div>
        </div>

        <div className="md:flex w-full mt-9 md:w-1/3 md:mt-0 md:flex-col md:justify-center">
          <Card text="👋 Olá" />
          <h1 className="text-white font-extrabold text-5xl md:text-[3.25rem] mt-4">Diego</h1>
          <h1 className="text-white font-extrabold text-5xl mb-1">Arruda</h1>
          <span className="text-white opacity-50 text-lg md:text-xl md:mt-4 md:mb-6">FullStack Developer</span>
          <div className="hidden md:flex">
            <SocialMedias />
          </div>
        </div>

        <div className="-mt-5 ml-5 md:ml-0 hover:scale-[1.01] md:mt-0">
          <div className="flex justify-center">
            <div className="hidden md:flex">
              <img src="/assets/images/Background.svg" alt="" className="w-[24rem] md:h-[24rem] hidden md:flex absolute" />
              <img src="/assets/images/Icons.png" alt="" className="absolute hidden md:flex animate-spin-slow opacity-50" />
            </div>
            <img src="/assets/images/Avatar.svg" alt="" className="hidden md:flex w-[24rem] md:h-[24rem] z-50 mt-14 ml-1" />
          </div>
        </div>

        <div className="flex w-full mt-10 flex-row items-center md:items-end text-text opacity-80 md:mt-0 md:justify-center md:w-1/3 md:flex-col md:gap-2">
          <div className="flex flex-row hover:cursor-pointer">
            <a
              href="https://drive.google.com/file/d/162HDua0i-XvOKIORHcX3fe7G14mIlFXr/view?usp=sharing"
              target="_blank"
              className="font-semibold text-base"
              rel="noreferrer"
            >
              Baixar CV
            </a>
            <BiArrowToBottom size={25} className="flex mr-4" />
          </div>
          <LinkInstagram />
        </div>

        <div className="flex items-center justify-center md:hidden">
          <a href="#About" className="flex bg-footer p-4 rounded-[6rem] border-2 border-border mt-8 text-text animate-bounce hover:cursor-pointer">
            <FiArrowDown size={30} />
          </a>
        </div>
      </div>

      <div className="md:flex items-center justify-center hidden mt-5 md:mb-44">
        <a href="#About" className="flex bg-footer p-4 rounded-[6rem] border-2 border-border mt-8 text-text animate-bounce hover:cursor-pointer">
          <FiArrowDown size={30} />
        </a>
      </div>
    </div>
  )
}
