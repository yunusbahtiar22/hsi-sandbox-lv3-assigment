import Image from "next/image";

export default function Card({
  title,
  author,
  category,
  imageUrl,
  summary,
  type,
  index,
}) {
  if (type === "related") {
    return (
      <article className="w-full grid grid-cols-2 overflow-hidden grid-rows-[300px] rounded-md mb-10 shadow-[0_0_8px_rgba(0,0,0,0.2)]">
        <div className="px-8 pt-3">
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

  if (type === "suggestion") {
    return (
      <article className="px-4 py-4 mb-6 md:mb-20">
        <div className="w-full aspect-video relative rounded-md overflow-hidden">
          <Image src={imageUrl} alt="" fill sizes="1077px" />
        </div>
        <p className="text-gray-300 uppercase p-3 text-line">
          by <span className="text-black">{author}</span> in{" "}
          <span className="text-black">{category}</span>
        </p>
        <h2 className="font-semibold text-heading-sm mb-8">{title}</h2>
        <p className="text-gray-400 text-content-md">{summary}</p>
      </article>
    );
  }
  return (
    <article className="px-4 py-4 mb-6 md:mb-20">
      <div className="w-full aspect-video relative rounded-md overflow-hidden">
        <Image src={imageUrl} alt="" fill sizes="1077px" />
      </div>
      <p className="text-gray-300 uppercase text-line pt-5 pb-2">
        by <span className="text-black">{author}</span> in{" "}
        <span className="text-black">{category}</span>
      </p>
      <h2 className="font-bold text-xl md:text-heading-xl">{title}</h2>
    </article>
  );
}
