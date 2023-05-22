import Layout from "@/components/layout";
import { fetcher } from "@/api/queries";
import { SWRConfig } from "swr";
import PostList from "@/components/post/post-list";
import { unstable_serialize } from "swr/infinite";

export default function Home({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <PostList />
      </Layout>
    </SWRConfig>
  );
}

export async function getServerSideProps(context) {
  const { sort } = context.query;
  const sortString = sort ? sort : "new";
  const data = await fetcher(`/articles?page=1&sort=${sortString}`);
  return {
    props: {
      fallback: {
        [unstable_serialize(() => `/articles?page=1&sort=${sortString}`)]: [
          data,
        ],
      },
    },
  };
}
