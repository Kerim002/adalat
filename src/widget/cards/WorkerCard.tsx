import { Link } from "react-router-dom";
type Props = {
  item: EmployerSchema;
};
const WorkerCard = ({ item }: Props) => {
  return (
    <Link to="/news" className="">
      <div className=" rounded-md flex lg:flex-row flex-col items-center md:gap-3 gap-1">
        <img
          className="xl:w-24 xl:h-24 w-24 h-24 border-4  border-orange-500 rounded-full object-cover"
          src={item?.image}
          alt=""
        />
        <div className="flex flex-col h-fit lg:text-left text-center">
          <h2 className="md:text-xl text-lg">
            {item.name} <br /> {item.surname}
          </h2>
          <p className="text-red-500 font-semibold text-sm">{item.major}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorkerCard;
