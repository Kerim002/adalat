import { NewsCard } from "@/widget/cards";
import { useNewsListQuery } from "../api/useNewsListQuery";

const NewsList = () => {
  const { data } = useNewsListQuery();
  if (!data) {
    return null;
  }
  return data?.news?.map((item) => <NewsCard key={item.id} item={item} />);
};

export default NewsList;
