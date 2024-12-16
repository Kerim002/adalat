import { MediaList, useMediaListQuery } from "@/entities/video";
import { Intersection } from "@/shared/ui";

import { PageAnimationWrapper } from "@/widget/animationwrapper";
const Videos = () => {
  const { fetchNextPage, hasNextPage, isFetching } = useMediaListQuery();
  return (
    <PageAnimationWrapper className="px-2 pt-5 min-h-screen">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4">
        <MediaList />
      </div>
      <Intersection
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
      />
    </PageAnimationWrapper>
  );
};

export default Videos;
