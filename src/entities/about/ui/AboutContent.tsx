import { useAboutQuery } from "../api/useAboutQuery";

const AboutContent = () => {
  const { data } = useAboutQuery();
  if (!data) return <>Maglumat yok</>;
  return (
    <div
      className="leading-8 md:text-xl p-2"
      dangerouslySetInnerHTML={{ __html: data?.content }}
    ></div>
  );
};

export default AboutContent;
