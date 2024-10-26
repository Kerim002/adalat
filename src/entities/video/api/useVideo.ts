import { useQuery } from "@tanstack/react-query";
import { videoService } from "./video.service";

export const useVideos = () => {
  return useQuery<any, Error>({
    queryKey: ["videos"],
    queryFn: () => videoService.getVideos(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};
