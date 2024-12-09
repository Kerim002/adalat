import { useLanguage } from "@/entities/lang";
import { Paragraph } from "@/features";
import { dateFormatter, numberShorter } from "@/shared/lib";
import { Link } from "react-router-dom";
type Props = {
  item: NewsItemSchema;
};
const NewsCard = ({ item }: Props) => {
  const { language } = useLanguage();

  return (
    <Link to={`/news/${item.id}`} className="">
      <div className=" rounded-md flex flex-col xl:gap-2 gap-1">
        <img
          src={item.image}
          // src="/test/test2.jpg"
          className="aspect-[5/4] w-full border-2 border-bronze object-cover rounded-2xl"
          alt=""
        />
        <h3 className="truncate-lines px-3 font-sans truncate-2-lines lg:text-2xl md:text-xl text-lg font-semibold  xl:leading-8">
          {item[`${language}_title`]}
        </h3>
        <span className="px-3">
          <Paragraph title={item[`${language}_description`]} />
        </span>
        <hr className="border-t-2 border-bronze " />

        <div className="flex items-center px-3 gap-1 lg:text-base md:text-xs text-[10px] font-semibold  text-bronze">
          <span className="">{dateFormatter(item.date, true)}</span>•
          <span>{numberShorter(item.view)} okaldy</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
