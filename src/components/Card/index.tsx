export default function Card({ text }: { text: string }) {
  return (
    <div className="flex bg-footer rounded-lg text-text font-bold text-sm items-center justify-center h-auto max-w-[8.5rem] md:max-w-[13rem] w-auto py-1 md:py-2 md:text-xl">
      <h1>{text}</h1>
    </div>
  );
}
