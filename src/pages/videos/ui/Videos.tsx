import { MediaList } from "@/entities/video";
import { PageAnimationWrapper } from "@/widget/animationwrapper";

const Videos = () => {
<<<<<<< HEAD
  const { isLoading, data } = useVideos();
  if (isLoading) {
    return <>Loading</>;
  }
  console.log(data);
  return (
    <PageAnimationWrapper className="px-2 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4 min-h-screen">
      ff
=======
  return (
    <PageAnimationWrapper className="px-2 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-x-6 gap-x-3 xl:gap-y-8 gap-y-4 min-h-screen">
      <MediaList />
>>>>>>> 51594165e8aed7e5c15cdd71ed1c82100786b270
    </PageAnimationWrapper>
  );
};

export default Videos;
