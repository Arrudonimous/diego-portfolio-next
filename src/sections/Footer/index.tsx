import SocialMedias from '../../components/SocialMedias';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex bg-surface w-full h-20 flex-col items-center py-3 px-6">
      <SocialMedias />
      <p className="text-text-secondary font-normal">Copyright © Diego Arruda · {year}</p>
    </div>
  );
}
