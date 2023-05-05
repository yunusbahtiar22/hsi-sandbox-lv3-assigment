import Image from "next/image";

export default function Posts(props) {
  return (
    <article className="px-4 py-4 mb-6 md:mb-20">
      <div className="w-full aspect-video relative rounded-md overflow-hidden">
        <Image src={props.imageUrl} alt="" fill sizes="1077px" />
      </div>
      <p className="text-gray-300 uppercase text-xs md:text-base pt-5 pb-2">
        by <span className="text-black">{props.author}</span> in{" "}
        <span className="text-black">{props.category}</span>
      </p>
      <h2 className="font-bold text-xl md:text-5xl">{props.title}</h2>
    </article>
  );
}
