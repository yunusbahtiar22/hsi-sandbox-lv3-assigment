import Layout from "@/components/layout";
import Image from "next/image";
import { fetcher } from "@/api/queries";
import { SWRConfig } from "swr";
import { unstable_serialize } from "swr/infinite";
import RelatedPostList from "@/components/related-post-list";

export default function RelatedPostPage({ currentPost, fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <section className="py-12">
          <h2 className="text-heading-md font-bold mb-8">Related Post List</h2>
          <article className="grid grid-cols-[200px_minmax(0,_1fr)] grid-rows-[227px] gap-x-12">
            <div className="w-[197px] relative rounded-md overflow-hidden">
              <Image src={currentPost.thumbnail} alt="" fill />
            </div>
            <section>
              <h2 className="text-gray-700 text-heading-md mb-3 font-bold">
                {currentPost.title}
              </h2>
              <p className="text-content-md">{currentPost.summary}</p>
            </section>
          </article>
        </section>
        <RelatedPostList
          categoryId={currentPost.category.id}
          postId={currentPost.id}
        />
      </Layout>
    </SWRConfig>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { data: currentPost } = await fetcher(`/articles/${slug}`);
  const relatedPosts = await fetcher(
    `/articles?categoryId=${currentPost.category.id}&page=1&excludedArticleId=${currentPost.id}`
  );
  console.log(relatedPosts);
  return {
    props: {
      currentPost,
      fallback: {
        [unstable_serialize(
          () =>
            `/articles?categoryId=${currentPost.category.id}&page=1&excludedArticleId=${currentPost.id}`
        )]: [relatedPosts],
      },
    },
  };
}
