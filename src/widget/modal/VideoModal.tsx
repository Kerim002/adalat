import { useLanguage } from "@/entities/lang";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VideoModal = ({ item }: { item: MediaItemSchema }) => {
  const { language } = useLanguage();
  useEffect(() => {
    if (item) {
      document.title = item[`${language}_title`] || "Adalat";
    }
    return () => {
      document.title = "Adalat";
    };
  }, [, language]);
  return (
    <>
      <Helmet>
        <title>{item[`${language}_title`]}</title>
        <meta name="description" content={item[`${language}_title`]} />
        <meta name="keywords" content={item[`${language}_title`]} />
      </Helmet>
      <div className="md:w-[750px] md:h-[750px] md:px-4 md:py-12 md:rounded-2xl h-[100vh] w-full bg-mainblack py-12">
        <video
          className="h-80 w-full object-cover"
          controls
          autoPlay
          src={item.video}
        />
        <h2 className="text-white text-lg p-2">{item[`${language}_title`]}</h2>
      </div>
    </>
  );
};

export default VideoModal;
