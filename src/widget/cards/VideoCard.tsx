import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { dateFormatter, numberShorter } from "@/shared/lib";
import { useLanguage } from "@/entities/lang";

const VideoCard = ({ item }: { item: MediaSchema }) => {
  const { language } = useLanguage();
  return (
    <Link to={`/news/${item.id}`} className="">
      <div className=" rounded-md flex flex-col md:gap-3 gap-1">
        <div className="relative flex items-center justify-center">
          <span className="absolute bg-black bg-opacity-30 rounded-full md:w-16 md:h-16 w-14 h-14 flex items-center justify-center">
            <FaPlay className="md:text-xl text-lg text-white" />
          </span>
          <img
            src={item.video}
            className="xl:h-64 lg:h-60 md:h-56 sm:h-48 h-40 w-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <h3 className="md:text-2xl text-lg font-semibold font-serif ">
          {item[`${language}_title`]}
        </h3>
        <div className="flex items-center gap-1 font-semibold md:text-sm text-xs text-red-500">
          <span className="">{dateFormatter(item.date, true)}</span>•
          <span>{numberShorter(item.view)} okaldy</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
