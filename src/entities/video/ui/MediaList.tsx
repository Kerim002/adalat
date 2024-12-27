import { VideoCard } from "@/widget/cards";
import { useMediaListQuery } from "../api/useMediaListQuery";
import { useAccumulate } from "@/shared/hooks";

const MediaList = () => {
  const { data } = useMediaListQuery();
  if (!data) return null;
  const list = useAccumulate<MediaListResponse>(data);
  return list?.map((item) => <VideoCard key={item.id} item={item} />);
};

export default MediaList;
