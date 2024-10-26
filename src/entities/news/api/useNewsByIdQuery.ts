import { useQuery } from "@tanstack/react-query";
import { newsService } from "./news.service";

export const useNewsByIdQuery = (id: string) =>
  useQuery({
    queryKey: ["news", id],
    queryFn: () => newsService.getNewsById(id),
  });
