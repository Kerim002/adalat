import { NewsContent } from "@/entities/news";
import { PageAnimationWrapper } from "@/widget/animationwrapper";

const SingleNews = () => {
  return (
    <PageAnimationWrapper className="px-2 gap-4  min-h-screen">
      <NewsContent />
    </PageAnimationWrapper>
  );
};

export default SingleNews;
