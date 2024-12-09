import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { useHome } from "../api/useHome";

const BannerList = () => {
  const { data } = useHome();
  if (!data) {
    return null;
  }
  return (
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="h-full lg:rounded-3xl rounded-2xl flex-[8] w-full"
    >
      {data?.banners?.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <img
              className="w-full h-full object-cover object-center cursor-pointer"
              // src={item.image}
              src="/test/test1.jpg"
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BannerList;
