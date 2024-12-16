import { dateFormatter, numberShorter } from "@/shared/lib";
import { useLanguage } from "@/entities/lang";
import { useModal } from "@/shared/hooks/useModal";
import { VideoModal } from "../modal";
import { IoPlayOutline } from "react-icons/io5";

const VideoCard = ({ item }: { item: MediaItemSchema }) => {
  const { language } = useLanguage();
  const { changeModal } = useModal();
  return (
    // <Link to={`${item.id}`} className="">
    <div className=" rounded-md flex flex-col md:gap-3 gap-1">
      <div
        onClick={() => changeModal(<VideoModal item={item} />)}
        className="relative flex items-center justify-center"
      >
        <span className="absolute bg-black bg-opacity-30 rounded-full md:w-16 md:h-16 w-14 h-14 flex items-center justify-center">
          <IoPlayOutline className="text-3xl text-white" />
        </span>
        <img
          // src="/test/test1.jpg"
          src={item.cover}
          className=" w-full object-cover rounded-2xl aspect-[4/3] md:border-4 border-[3px] border-bronze"
          alt=""
          onError={(i: any) => (i.target.src = "/test/test3.jpg")}
        />
      </div>
      <div>
        <h3 className="truncate-lines truncate-3-lines px-3 md:text-xl  md:h-24 h-20  mb-2">
          {item[`${language}_title`]}
        </h3>
        <hr className="border-t-2 border-bronze " />
        <div className="flex px-3 items-center mt-1.5 gap-1 font-semibold md:text-sm text-xs text-bronze">
          <span className="">{dateFormatter(item.date, true)}</span>|
          <span>{numberShorter(item.view)} okaldy</span>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default VideoCard;
