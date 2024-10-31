import { useHome } from "@/entities/home";
import { PageAnimationWrapper } from "@/widget/animationwrapper";
import { Footer } from "@/widget/footer";
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
    return <>Loading</>;
  }
  return (
    <PageAnimationWrapper className="min-h-screen flex flex-col md:gap-8 gap-5 px-3">
      {/* <TopSlogan /> */}

      <BestReadSection />
      {/* News section */}

      <NewsSection />
      {/* worker section */}
      <WorkersSection />
      {/* Slider section */}
      <SwiperSection />

      {/* Video section */}
      <VideosSection />
      {/* <ButtomSlogan /> */}
      <Footer />
    </PageAnimationWrapper>
  );
};

export default Home;
