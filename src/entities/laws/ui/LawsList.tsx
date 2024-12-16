import { Link } from "react-router-dom";
import { useLawsListQuery } from "../api/useLawsListQuery";
import { VscLaw } from "react-icons/vsc";

const LawsList = () => {
  const { data } = useLawsListQuery({});
  if (!data) {
    return null;
  }
  return data?.data?.map((item, index) => (
    <Link key={item.id} to={`${item.id}`}>
      <li className="text-xl  px-2 py-4 border-b-4 border-bronze flex  gap-2">
        <VscLaw className="icon mt-0.5" />
        {index + 1}. {item.title}
      </li>
    </Link>
  ));
};

export default LawsList;
