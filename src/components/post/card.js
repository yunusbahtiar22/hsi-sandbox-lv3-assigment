import Image from "next/image";

export default function Card({ title, author, category, imageUrl }) {
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
