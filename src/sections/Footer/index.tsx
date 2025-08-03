import SocialMedias from '../../components/SocialMedias';

export default function Footer() {
  return (
    <div className="flex bg-footer w-full h-20 flex-col items-center py-3 px-6">
      <SocialMedias />
      <h1 className=" text-white font-normal opacity-50">Copyright © Diego Arruda · 2022</h1>
    </div>
  );
}
