import { NewsList, useNewsListQuery } from "@/entities/news";
import { Intersection } from "@/shared/ui";
import { PageAnimationWrapper } from "@/widget/animationwrapper";

const News = () => {
  const { fetchNextPage, hasNextPage, isFetching } = useNewsListQuery();
  return (
    <PageAnimationWrapper className="px-2 pt-5  min-h-screen">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4">
        <NewsList />
      </div>
      <Intersection
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
      />
    </PageAnimationWrapper>
  );
};

export default News;
