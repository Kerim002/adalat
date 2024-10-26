import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { NewsCard } from "@/widget/cards";
import { useHome } from "../api/useHome";
const NewsList = () => {
  const { data } = useHome();

  if (!data) {
    return null;
  }
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={data.news?.length > 1}
      slidesPerView={1}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        825: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1124: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1250: {
          slidesPerView: 4,
          spaceBetween: 13,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
      className="homeSwiper w-full"
    >
      {data?.news?.map((news) => {
        return (
          <SwiperSlide key={news.id}>
            <NewsCard item={news} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewsList;
