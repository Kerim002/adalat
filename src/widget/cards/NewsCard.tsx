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
    <Link to="/news" className="">
      <div className=" rounded-md flex flex-col xl:gap-2 gap-1">
        <img
          src={item.image}
          className="lg:h-64 md:h-64 sm:h-56 h-40 w-full object-cover rounded-2xl"
          alt=""
        />
        <h3 className="lg:text-2xl md:text-xl text-lg font-semibold font-serif xl:leading-8">
          {item[`${language}_title`]}
        </h3>

        <Paragraph title={item[`${language}_description`]} />
        <div className="flex items-center gap-1 lg:text-base md:text-xs text-[10px] font-semibold  text-red-500">
          <span className="">{dateFormatter(item.date, true)}</span>•
          <span>{numberShorter(item.view)} okaldy</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
