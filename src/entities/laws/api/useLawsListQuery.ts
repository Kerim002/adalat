import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { lawsService } from "./laws.service";

export const useLawsListQuery = (params?: PaginationRequest) =>
  useQuery({
    queryKey: ["laws", params],
    queryFn: () => lawsService.getAll(params),
    placeholderData: keepPreviousData,
  });
