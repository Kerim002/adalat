import { MediaList } from "@/entities/home";
import SectionTitle from "../custom/SectionTitle";

const VideosSection = () => {
  return (
    <div>
      <SectionTitle title="Sonky Wideolar" />
      <div className="w-full grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4">
        <MediaList />
      </div>
    </div>
  );
};

export default VideosSection;
