import { fetcher } from "@/api/queries";
import Layout from "@/components/layout";
import PostDetail from "@/components/post-detail";

export default function DetailPage({ post }) {
  return (
    <Layout>
      <PostDetail post={post} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await fetcher("/articles?perPage=12");
  const paths = data.map((path) => ({ params: { slug: path.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data: post } = await fetcher(`/articles/${slug}`);
  return {
    props: {
      post,
    },
  };
}
