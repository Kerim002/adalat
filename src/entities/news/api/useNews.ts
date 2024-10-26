import { useQuery } from "@tanstack/react-query";
import { newsService } from "./news.service";

export const useNews = () => {
  return useQuery<any, Error>({
    queryKey: ["news"],
    queryFn: () => newsService.getNews(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};
