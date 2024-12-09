import { useLanguage } from "@/entities/lang";

const VideoModal = ({ item }: { item: MediaItemSchema }) => {
  const { language } = useLanguage();
  return (
    <div className="md:w-[600px] md:h-[600px] md:p-2 md:py-12 rounded-lg h-[100vh] w-full bg-bgprimary py-12">
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
