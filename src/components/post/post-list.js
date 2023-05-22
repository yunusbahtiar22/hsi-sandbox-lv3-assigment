import { fetcher } from "@/api/queries";
import Link from "next/link";
import { useInfiniteQuery } from "@/api/queries";
import Card from "./card";
import { useRouter } from "next/router";
import CardSkeleton from "../base/card-skeleton";

export default function PostList(props) {
  const {
    query: { sort },
  } = useRouter();

  const getPostListKey = (index) => {
    if (index === 0) return `/articles?page=1&sort=${sort ? sort : "new"}`;
    return `/articles?page=${index + 1}&sort=${sort ? sort : "new"}`;
  };

  const { data, size, isLoadingMore, isEmpty, isLoading, fetchNextPage } =
    useInfiniteQuery({ getQueryKey: getPostListKey, queryFn: fetcher });

  const posts = (data ? [].concat(data) : []).flatMap((item) => {
    if (item) return item.data;
  });

  const prevDataPage = data?.[size - 1]?.meta.pagination.page;
  const prevDataTotalPage = data?.[size - 1]?.meta.pagination.totalPages;
  isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isReachingEnd = isEmpty || (data && prevDataPage === prevDataTotalPage);

  return (
    <>
      <section>
        {posts.map(({ title, thumbnail, category, author, slug }) => (
          <Link key={slug} href={`/${slug}`}>
            <Card
              type="base"
              title={title}
              imageUrl={thumbnail}
              category={category.name}
              author={[
                author.firstName,
                author.middleName,
                author.lastName,
              ].join(" ")}
            />
          </Link>
        ))}
        {isLoadingMore && [1, 2, 3, 4].map((val) => <CardSkeleton key={val} />)}
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
