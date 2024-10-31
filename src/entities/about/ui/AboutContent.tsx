import { useAboutQuery } from "../api/useAboutQuery";

const AboutContent = () => {
  const { data } = useAboutQuery();
  if (!data) return <>Maglumat yok</>;
  return <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>;
};

export default AboutContent;
