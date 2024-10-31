import { MediaList } from "@/entities/video";

import { PageAnimationWrapper } from "@/widget/animationwrapper";
const Videos = () => {
  return (
    <PageAnimationWrapper className="px-2  min-h-screen">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4">
        <MediaList />
      </div>
    </PageAnimationWrapper>
  );
};

export default Videos;
