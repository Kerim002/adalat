import { LawsList } from "@/entities/laws";
import { PageAnimationWrapper } from "@/widget/animationwrapper";

const Laws = () => {
  return (
    <PageAnimationWrapper>
      <ol className="px-4 flex flex-col gap-4">
        <LawsList />
      </ol>
    </PageAnimationWrapper>
  );
};

export default Laws;
