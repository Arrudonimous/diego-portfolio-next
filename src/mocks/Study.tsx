interface Study {
  title: string;
  description: string;
  time: string;
  date: string;
}

const studies: Study[] = [
  {
    title: 'Bacharelado CC',
    description: 'Bacharelado em Ciência da Computação na Unip de Alphaville',
    time: '---',
    date: 'Janeiro/2023 · Atualmente',
  },
  {
    title: 'JStack',
    description: 'Curso de ReactJs, StyledComponents e NodeJs ministrado por Mateus Silva',
    time: '---',
    date: 'Janeiro/2022 · Atualmente',
  },
  {
    title: 'Desenvolvimento de Sistemas - ETEC',
    description: 'Curso técnico de Desenvolvimento de Sistemas, juntamente com o ensino médio',
    time: '3 anos',
    date: 'Janeiro/2020 · Dezembro/2022',
  },
  {
    title: 'DankiCode',
    description: 'Curso de NodeJs ministrado por Guilherme Grillo',
    time: '6 Meses',
    date: 'Junho/2021 · Dezembro/2022',
  },
  {
    title: 'EF SET 76/100',
    description: 'Certificado de teste de inglês online',
    time: '2 Meses',
    date: 'Agosto/2022',
  },
];

export default studies;
