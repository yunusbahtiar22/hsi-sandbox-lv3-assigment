import Link from "next/link";
import { useInfiniteQuery } from "@/api/queries";
import { fetcher } from "@/api/queries";
import Card from "./card";
import CardSkeleton from "./card-skeleton";

export default function RelatedPostList({ categoryId, postId }) {
  const getRelatedKey = (index) =>
    index === 0
      ? `/articles?categoryId=${categoryId}&page=1&excludedArticleId=${postId}`
      : `/articles?categoryId=${categoryId}&page=${
          index + 1
        }&excludedArticleId=${postId}`;

  const { data, size, isLoadingMore, isEmpty, isLoading, fetchNextPage } =
    useInfiniteQuery({
      getQueryKey: getRelatedKey,
      queryFn: fetcher,
    });

  // make sure data is server rendered
  console.log("data -> :", data);

  const posts = (data ? [].concat(data) : []).flatMap((item) => {
    if (item) return item.data;
  });

  const prevDataPage = data[size - 1]?.meta?.pagination.page;
  const prevDataTotalPage = data[size - 1]?.meta?.pagination.totalPages;
  isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = isEmpty || (data && prevDataPage === prevDataTotalPage);

  return (
    <>
      <section className="my-16">
        {posts &&
          posts.map(({ title, summary, thumbnail, slug }, index) => (
            <Link key={slug} href={`/${slug}`}>
              <Card
                type="related"
                title={title}
                imageUrl={thumbnail}
                summary={summary}
                index={index + 1}
              />
            </Link>
          ))}
        {isLoadingMore &&
          [1, 2, 3, 4].map((val) => <CardSkeleton key={val} type="related" />)}
      </section>
      <section>
        {!isReachingEnd && (
          <button
            disabled={isLoading || isLoadingMore}
            onClick={fetchNextPage}
            className="block border border-[#FF5480] rounded-full w-52 h-16 text-[#FF5480] font-semibold mx-auto active:bg-[#FF5480] active:text-white"
          >
            {isLoading || isLoadingMore ? "Loading..." : "Load More"}
          </button>
        )}
      </section>
    </>
  );
}
