import { BASE_URL } from "@/constants";

export { useInfiniteQuery } from "./use-inifinite-query";

export const fetcher = (url) =>
  fetch(`${BASE_URL}${url}`).then((r) => r.json());

// export const getPostListKey = (index) => {
//   if (index === 0) return `/articles?page=1&sort=new`;
//   return `/articles?page=${index + 1}&sort=new`;
// };

