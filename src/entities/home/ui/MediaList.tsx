import { VideoCard } from "@/widget/cards";
import { useHome } from "../api/useHome";

const MediaList = () => {
  const { data } = useHome();
  if (!data) {
    return null;
  }
  return data?.media?.map((item) => <VideoCard item={item} key={item.id} />);
};

export default MediaList;
