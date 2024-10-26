import { FaArrowRight } from "react-icons/fa";
type Props = {
  title: string;
};
const SectionTitle = ({ title }: Props) => {
  return (
    <div className="w-full flex justify-between items-center mb-3">
      <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold">{title}</h1>
      <div className="text-red-500 flex items-center md:text-xl text-lg gap-2">
        <p className="mb-1 font-medium">Ahlisini gor</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default SectionTitle;
