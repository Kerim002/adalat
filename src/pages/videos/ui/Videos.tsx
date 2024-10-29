import { MediaList } from "@/entities/video";

import { PageAnimationWrapper } from "@/widget/animationwrapper";
const Videos = () => {
  return (
    <PageAnimationWrapper className="px-2  min-h-screen">
      {/* <ReactPlayer
        url="https://dev.tmbiz.info/data/videos/videos/0275e7c1-ecb5-4182-a55a-0b1c8ce66673.mp4"
        controls
        width="100%"
        // height="100%"
      /> */}

      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4">
        <MediaList />
      </div>
    </PageAnimationWrapper>
  );
};

export default Videos;
