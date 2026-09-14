import { IconType } from 'react-icons';
import {
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiCss3, SiHtml5, SiGithub,
  SiInsomnia, SiFigma, SiDocker, SiMongodb, SiAngular,
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io5';
import { GrMysql } from 'react-icons/gr';

export type SkillCategory = 'daily' | 'tools' | 'learning';

export interface Skill {
  icon: IconType;
  name: string;
  category: SkillCategory;
}

export const useSkills = (): Skill[] => [
  { icon: SiReact, name: 'React', category: 'daily' },
  { icon: SiJavascript, name: 'JavaScript', category: 'daily' },
  { icon: SiTypescript, name: 'TypeScript', category: 'daily' },
  { icon: IoLogoNodejs, name: 'Node.js', category: 'daily' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', category: 'daily' },
  { icon: SiCss3, name: 'CSS3', category: 'daily' },
  { icon: SiHtml5, name: 'HTML5', category: 'daily' },
  { icon: SiGithub, name: 'GitHub', category: 'daily' },
  { icon: SiInsomnia, name: 'Insomnia', category: 'daily' },
  { icon: SiFigma, name: 'Figma', category: 'tools' },
  { icon: SiDocker, name: 'Docker', category: 'tools' },
  { icon: GrMysql, name: 'MySQL', category: 'tools' },
  { icon: SiMongodb, name: 'MongoDB', category: 'tools' },
  { icon: SiAngular, name: 'Angular', category: 'learning' },
];
