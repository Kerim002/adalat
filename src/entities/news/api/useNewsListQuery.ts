import { useQuery } from "@tanstack/react-query";
import { newsService } from "./news.service";

export const useNewsListQuery = (params?: PaginationRequest) => {
  return useQuery({
    queryKey: ["news", params],
    queryFn: () => newsService.getNewsAll(params),
  });
};
