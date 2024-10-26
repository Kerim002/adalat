import { useQuery } from "@tanstack/react-query";
import { homeService } from "./home.service";

export const useHome = () => {
  return useQuery<HomeSchema, Error>({
    queryKey: ["home"],
    queryFn: () => homeService.getHome(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};
