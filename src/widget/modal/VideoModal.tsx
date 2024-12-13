import { useLanguage } from "@/entities/lang";

const VideoModal = ({ item }: { item: MediaItemSchema }) => {
  const { language } = useLanguage();
  return (
    <div className="md:w-[750px] md:h-[750px] md:px-4 md:py-12 md:rounded-2xl h-[100vh] w-full bg-mainblack py-12">
      <video
        className="h-80 w-full object-cover"
        controls
        autoPlay
        src={item.video}
      />
      <h2 className="text-white text-lg p-2">{item[`${language}_title`]}</h2>
    </div>
  );
};

export default VideoModal;
