import { NewsCard } from "@/widget/cards";
import { useNewsListQuery } from "../api/useNewsListQuery";
import { useAccumulate } from "@/shared/hooks";

const NewsList = () => {
  const { data } = useNewsListQuery();
  if (!data) {
    return null;
  }
  const newsList = useAccumulate<NewsListResponse>(data);
  return newsList.map((item) => <NewsCard key={item.id} item={item} />);
};

export default NewsList;
