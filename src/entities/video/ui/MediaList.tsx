import { VideoCard } from "@/widget/cards";
import { useMediaListQuery } from "../api/useMediaListQuery";

const MediaList = () => {
  const { data } = useMediaListQuery();
  if (!data) return null;
  return data?.media?.map((item) => <VideoCard key={item.id} item={item} />);
};

export default MediaList;
