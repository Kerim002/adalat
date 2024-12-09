import { AboutContent } from "@/entities/about";
import { PageAnimationWrapper } from "@/widget/animationwrapper";

const About = () => {
  return (
    <PageAnimationWrapper className="min-h-screen">
      <h1 className="pl-3 text-2xl md:text-3xl font-semibold">About us</h1>
      <div className="flex flex-col gap-2">
        <AboutContent />
      </div>
    </PageAnimationWrapper>
  );
};

export default About;
