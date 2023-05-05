import useSWRInfinite from "swr/infinite";

export const useInfiniteQuery = ({ getQueryKey, queryFn, options }) => {
  const { data, isLoading, size, setSize, isValidating, error } =
    useSWRInfinite(getQueryKey, queryFn, options);
  const isEmpty = data?.[0].length === 0;
  const isRefreshing = isValidating && data && data.length === size;
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  const fetchNextPage = () => {
    setSize(size + 1);
  };

  return {
    data,
    isLoading,
    size,
    setSize,
    fetchNextPage,
    error,
    isEmpty,
    isRefreshing,
    isLoadingMore,
  };
};
