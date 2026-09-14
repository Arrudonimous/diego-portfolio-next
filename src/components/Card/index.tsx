export default function Card({ text }: { text: string }) {
  return (
    <div className="flex bg-primary-soft rounded-lg text-primary font-bold text-sm items-center justify-center h-auto max-w-[8.5rem] md:max-w-[13rem] w-auto py-1 md:py-2 md:text-xl">
      <span>{text}</span>
    </div>
  );
}
