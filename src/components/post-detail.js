import Image from "next/image";
import SuggestionsList from "./suggestion-list";
import CardSkeleton from "./card-skeleton";

export default function PostDetail({ post }) {
  return (
    <article className="px-4">
      <section className="mb-8 md:mb-16 py-4">
        <h1 className="mb-7 font-bold text-gray-600 text-heading-md">
          {post.title}
        </h1>
        <p className="text-content-lg font-semibold mb-4 md:mb-12">
          {post.summary}
        </p>
        <p className="text-gray-300 uppercase text-line">
          by{" "}
          <span className="text-black">
            {[
              post.author.firstName,
              post.author.middleName,
              post.author.lastName,
            ].join(" ")}
          </span>{" "}
          in <span className="text-black">{post.category.name}</span>
        </p>
      </section>
      <section className="py-4 mb-2 md:mb-14">
        <div className="w-full aspect-video relative mb-12 rounded-md overflow-hidden">
          <Image src={post.thumbnail} alt="" fill />
        </div>
        <p className="text-content-md text-gray-500">{post.content}</p>
      </section>
      <SuggestionsList
        category={post.category.id}
        slug={post.slug}
        id={post.id}
      />
    </article>
  );
}
