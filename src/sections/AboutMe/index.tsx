import Card from '../../components/Card';

export default function AboutMe() {
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
        <Card text="🧐 Sobre mim" />
        <h1 className="text-white font-extrabold text-2xl mt-16 mb-3 md:hidden">
          Diego Arruda
        </h1>
        <h1 className="text-white font-extrabold text-5xl mt-16 mb-3 hidden md:flex">
          Diego de Veras Arruda 👨🏻‍💻
        </h1>
        <div className="flex flex-col font-medium text-lg text-white opacity-50 gap-3 md:mt-5">
          <span className="block">
            Pode me chamar de Diego! Sou apaixonado por tecnologia e seu poder
            transformador 🌍. Em 2020, comecei minha trajetória no curso Técnico
            em Desenvolvimento de Sistemas pela Etec de Santana de Parnaíba,
            onde tive meu primeiro contato com programação 💻.
          </span>
          <span className="block">
            No início de 2022, aprofundei meus estudos em NodeJS, JavaScript e
            TypeScript para o desenvolvimento do meu TCC ✍🏼, que finalizei com
            sucesso no mesmo ano. Atualmente, curso Bacharelado em Ciência da
            Computação na UNIP Alphaville 🎓.
          </span>
          <span className="block">
            Desde meados de 2022, meu foco passou a ser o desenvolvimento
            Front-End, estudando ReactJS com profundidade ⚛️ e React Native de
            forma introdutória 📱, o que me tornou um desenvolvedor Full Stack
            júnior 🚀. Tenho experiência prática atuando em projetos com NextJS,
            ReactJS e NodeJS, utilizando tecnologias modernas como TypeScript,
            CSS puro, Styled Components, Ant Design e TailwindCSS 🎨.
          </span>
          <span className="block mt-8">
            Busco crescer profissionalmente e agregar valor a equipes dinâmicas,
            sempre aprendendo e evoluindo dia após dia 📈🔥.
          </span>
        </div>
      </div>
    </div>
  );
}
