interface Card {
  name: string;
}

interface Project {
  title: string;
  description: string;
  cards: Card[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Github Finder',
    description: 'Aplicação que busca o perfil de alguém no github utilizando seu username com tema dark e light.',
    cards: [
      { name: 'ReactJs' },
      { name: 'JavaScript' },
    ],
    image: '/assets/images/GithubFinder.png',
    link: 'https://github-finder-gamma-five.vercel.app',
  },
  {
    title: 'Acqua building',
    description: 'Aplicação desenvolvida com um timer funcional para uma inauguração de um prédio fictício',
    cards: [
      { name: 'ReactJs' },
      { name: 'JavaScript' },
    ],
    image: '/assets/images/AcquaBuilding.png',
    link: 'https://acqua-building.vercel.app',
  },
  {
    title: 'Weather App',
    description: 'Aplicação que busca a temperatura em qualquer lugar do mundo',
    cards: [
      { name: 'ReactJs' },
      { name: 'JavaScript' },
    ],
    image: '/assets/images/Weather App.png',
    link: 'https://weather-app-two-liart.vercel.app',
  },
  {
    title: 'DevTech',
    description: 'LandingPage para uma empresa fictícia',
    cards: [
      { name: 'ReactJs' },
      { name: 'JavaScript' },
    ],
    image: '/assets/images/DevTech.png',
    link: 'https://devtech.vercel.app',
  },
];

export default projects;
