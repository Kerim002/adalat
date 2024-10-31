import { useParams } from "react-router-dom";
import { useNewsByIdQuery } from "../api/useNewsByIdQuery";
import { useLanguage } from "@/entities/lang";

const NewsContent = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  if (!id) {
    return <div>Seçilýän haber yoxdur.</div>;
  }
  const { data } = useNewsByIdQuery(id);
  if (!data) {
    return <div>Haber yoxdur.</div>;
  }
  return (
    <div>
      <h1 className="md:text-3xl text-2xl font-semibold my-6">
        {data[`${language}_title`]}
      </h1>
      <div className="">
        <img
          className="md:h-96 h-64 w-[600px] object-cover m-auto md:mb-0 mb-3 rounded-lg md:float-left mr-4"
          src={data?.image}
          alt="Descriptive text"
        />
        <p className="text-justify text-sm md:text-lg">
          {data[`${language}_description`]}
        </p>
      </div>
    </div>
  );
};

export default NewsContent;
