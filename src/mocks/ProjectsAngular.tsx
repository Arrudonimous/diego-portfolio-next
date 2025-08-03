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

const projectsAngular: Project[] = [
  {
    title: 'Angular Task App',
    description: 'Um gerenciador de tarefas pessoais desenvolvido todo em AngularJs',
    cards: [
      { name: 'AngularJs' },
      { name: 'SCSS' },
    ],
    image: '/assets/images/AngularTaskApp.png',
    link: 'https://tasks-list-angular.vercel.app',
  }
];

export default projectsAngular;
