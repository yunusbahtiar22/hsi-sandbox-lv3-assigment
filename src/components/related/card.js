import Image from "next/image";

export default function Card({ title, imageUrl, summary, index }) {
  return (
    <article className="w-full grid grid-cols-2 overflow-hidden grid-rows-[350px] rounded-md mb-10 shadow-[0_0_8px_rgba(0,0,0,0.2)]">
      <div className="px-8 py-3">
        <span className="text-[24px] leading-[58px]">
          {String(index).padStart(2, "0")}
        </span>
        <h2 className="font-semibold text-heading-sm mb-4">{title}</h2>
        <p className="text-content-md text-gray-500">{summary}</p>
      </div>
      <div className="w-full relative overflow-hidden">
        <Image src={imageUrl} alt="" fill />
      </div>
    </article>
  );
}
