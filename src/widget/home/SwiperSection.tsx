import { BannerList } from "../../entities/home";

const SwiperSection = () => {
  return (
    <div
      className={`flex items-center py-4 justify-center 2xl:h-[550px]  lg:h-[400px] md:h-[350px] sm:h-[300px] h-[250px] w-full gap-4`}
    >
      <BannerList />
    </div>
  );
};

export default SwiperSection;
