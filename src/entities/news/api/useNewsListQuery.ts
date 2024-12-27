import { useInfiniteQuery } from "@tanstack/react-query";
import { newsService } from "./news.service";

export const useNewsListQuery = () => {
  return useInfiniteQuery<NewsListResponse, Error>({
    queryKey: ["news"],
    queryFn: async ({ pageParam = 1 }: any) => {
      return newsService.getNewsAll({ page: pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
