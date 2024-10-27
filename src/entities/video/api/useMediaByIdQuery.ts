import { useQuery } from "@tanstack/react-query";
import { mediaService } from "./media.service";

export const useMediaByIdQuery = (id: string) =>
  useQuery({
    queryKey: ["media", id],
    queryFn: () => mediaService.getMediaById(id),
  });
