import { useHome } from "@/entities/home";
import { PageAnimationWrapper } from "@/widget/animationwrapper";
import {
  BestReadSection,
  NewsSection,
  SwiperSection,
  VideosSection,
  WorkersSection,
} from "@/widget/home";

const Home = () => {
  const { isLoading } = useHome();
  if (isLoading) {
    return <div className="min-h-screen">Loading</div>;
  }
  return (
    <PageAnimationWrapper className="min-h-screen flex flex-col md:gap-8 gap-5 2xl:p-0  sm:px-4 px-3">
      {/* <TopSlogan /> */}
      <SwiperSection />
      <BestReadSection />

      <VideosSection />
      <WorkersSection />
      <NewsSection />
      {/* Slider section */}

      {/* <ButtomSlogan /> */}
    </PageAnimationWrapper>
  );
};

export default Home;
