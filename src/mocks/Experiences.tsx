import { IconType } from 'react-icons';
import { BsLaptop, BsCodeSlash } from 'react-icons/bs';
import { MdOutlineScience } from 'react-icons/md';

interface Experiences {
  icon: IconType;
  text1: string;
  text2: string;
}

const experiences: Experiences[] = [
  {
    icon: BsLaptop,
    text1: '3 anos de',
    text2: 'Dev. de Sistemas',
  },
  {
    icon: BsCodeSlash,
    text1: '3 ano como',
    text2: 'Desenvolvedor',
  },
  {
    icon: MdOutlineScience,
    text1: 'Estudante de',
    text2: 'Ciência da Computação',
  },
];

export default experiences;
