import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/api/queries";
import Card from "./card";
import CardSkeleton from "../base/card-skeleton";

export default function SuggestionsList(props) {
  // const suggestionPage = Math.floor(Math.random() * 3) + 1;
  const { data: posts, isLoading } = useSWR(
    `/articles?categoryId=${props.category}&page=1&perPage=2&excludedArticleId=${props.id}`,
    fetcher
  );

  return (
    <section>
      <div className="flex items-center justify-between px-4">
        <h3 className="text-heading-md leading-[46px]">You might also like</h3>
        <Link href={`/${props.slug}/relates`}>
          <span className="text-gray-400">More</span>
        </Link>
      </div>
      <div className="grid grid-cols-2">
        {posts &&
          posts.data.map(
            ({ title, summary, thumbnail, author, category, slug }) => (
              <Link key={slug} href={`/${slug}`}>
                <Card
                  title={title}
                  summary={summary}
                  category={category.name}
                  imageUrl={thumbnail}
                  author={[
                    author.firstName,
                    author.middleName,
                    author.lastName,
                  ].join(" ")}
                />
              </Link>
            )
          )}
        {isLoading &&
          [1, 2].map((val) => <CardSkeleton type="suggestion" key={val} />)}
      </div>
    </section>
  );
}
