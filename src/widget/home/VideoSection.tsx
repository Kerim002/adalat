import { MediaList } from "@/entities/home";
import SectionTitle from "../custom/SectionTitle";

const VideosSection = () => {
  return (
    <div className="mt-2">
      <SectionTitle link="/videos" title="hot_media" />
      <div className="w-full mt-1 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4">
        <MediaList />
      </div>
    </div>
  );
};

export default VideosSection;
