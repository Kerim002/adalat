import { useInfiniteQuery } from "@tanstack/react-query";
import { mediaService } from "./media.service";

export const useMediaListQuery = () => {
  return useInfiniteQuery<MediaListResponse, Error>({
    queryKey: ["media"],
    queryFn: ({ pageParam }: any) =>
      mediaService.getMediaList({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
