import { useExperiences } from '@/mocks/Experiences';

export default function Experience() {
  const experiences = useExperiences()
  
  return (
    <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-20">
      {experiences.map((item) => (
        <div
          key={item.text1}
          className="flex flex-col mt-16 border-2 border-primary-soft rounded-lg px-5 pb-8 pt-14 text-text-primary items-center justify-center md:w-1/4 md:h-[20rem] md:hover:bg-surface md:hover:border-0 transition-all duration-200 ease-in"
        >
          <item.icon size={100} className="text-primary" />
          <span className="font-medium mt-2 text-text-secondary">{item.text1}</span>
          <p className="font-bold text-2xl md:text-3xl text-center font-display">{item.text2}</p>
        </div>
      ))}
    </div>
  );
}
