import { useQuery } from "@tanstack/react-query";
import { mediaService } from "./media.service";

export const useMediaListQuery = (params?: PaginationRequest) =>
  useQuery({
    queryKey: ["media", params],
    queryFn: () => mediaService.getMediaList(params),
  });
