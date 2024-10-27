import { useQuery } from "@tanstack/react-query";
import { lawsService } from "./laws.service";

export const useLawByIdQuery = (id: string) =>
  useQuery({
    queryKey: ["laws", id],
    queryFn: () => lawsService.getById(id),
  });
