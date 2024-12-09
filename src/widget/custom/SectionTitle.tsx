import { useTranslation } from "react-i18next";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
type Props = {
  title: string;
  link?: string;
};
const SectionTitle = ({ title, link }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-between items-center mb-3">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold">
        {t(title)}
      </h1>
      {link ? (
        <div className="flex items-center md:text-xl text-lg gap-2">
          <Link to={link} className="flex items-center gap-2 font-light">
            <p className="mb-1">Ahlisini gor</p>
            <VscArrowRight />
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default SectionTitle;
