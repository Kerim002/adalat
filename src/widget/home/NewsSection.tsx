import NewsList from "../../entities/home/ui/NewsList";
import SectionTitle from "../custom/SectionTitle";

const NewsSection = () => {
  return (
    <div className="w-full">
      <SectionTitle link="news" title="hot_news" />
      <NewsList />
    </div>
  );
};

export default NewsSection;
