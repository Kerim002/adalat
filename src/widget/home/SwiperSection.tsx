import { BannerList } from "../../entities/home";

const SwiperSection = () => {
  return (
    <div className={`flex items-center py-4 justify-center w-full gap-4`}>
      <BannerList />
    </div>
  );
};

export default SwiperSection;
