import { InfiniteData } from "@tanstack/react-query";

export const useAccumulate = <T>(
  data: InfiniteData<T, unknown> | undefined
) => {
  if (!data) {
    return [];
  }
  return data?.pages.reduce((acc: MediaItemSchema[], page: any) => {
    const uniqueIds = new Set(acc.map((item) => item.id));

    const newItems = page.data.filter((item: any) => !uniqueIds.has(item.id));

    newItems.forEach((item: any) => uniqueIds.add(item.id));
    return [...acc, ...newItems];
  }, []);
};
