import { useVideos } from "@/entities/video";
import { PageAnimationWrapper } from "@/widget/animationwrapper";
import { VideoCard } from "@/widget/cards";

const Videos = () => {
  const { isLoading, data } = useVideos();
  if (isLoading) {
    return <>Loading</>;
  }
  console.log(data);
  return (
    <PageAnimationWrapper className="px-2 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4 min-h-screen">
      ff
    </PageAnimationWrapper>
  );
};

export default Videos;
