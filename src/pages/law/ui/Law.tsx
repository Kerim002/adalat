import { useLawByIdQuery } from "@/entities/laws";
import { PageAnimationWrapper } from "@/widget/animationwrapper";
import { useParams } from "react-router-dom";

const Law = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>Seçilýän kanun yoxdur.</div>;
  }
  const { data } = useLawByIdQuery(id);
  if (!data) {
    return <div>Kanun yoxdur.</div>;
  }
  return (
    <PageAnimationWrapper>
      <div dangerouslySetInnerHTML={{ __html: data?.title }}></div>
    </PageAnimationWrapper>
  );
};

export default Law;