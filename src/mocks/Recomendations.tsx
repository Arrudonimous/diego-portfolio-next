interface Recomendation {
  description: string;
  image: string;
  name: string;
  role: string;
}

const recomendations: Recomendation[] = [
  {
    description: `...Ademais, ele foi um 
    excelente aluno, sempre agindo com respeito e sendo
    uma pessoa participativa nas aulas, além disso ele era um aluno
    pontual e assíduo nas aulas, obtendo um excelente aproveitamento em 
    todas as avaliações referentes a matéria em que lecionei...!`,
    image: './assets/images/Mario.jpg',
    name: 'Mario de Jesus',
    role: 'Analista de sistemas',
  },
];

export default recomendations;
