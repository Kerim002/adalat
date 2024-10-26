import NewsList from "../../entities/home/ui/NewsList";
import SectionTitle from "../custom/SectionTitle";

const NewsSection = () => {
  return (
    <div className="w-full">
      <SectionTitle title="Sonky habarlar" />
      <NewsList />
    </div>
  );
};

export default NewsSection;
