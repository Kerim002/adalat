import { Link } from "react-router-dom";
import { useLawsListQuery } from "../api/useLawsListQuery";

const LawsList = () => {
  const { data } = useLawsListQuery({});
  if (!data) {
    return null;
  }
  return data?.news?.map((item, index) => (
    <Link key={item.id} to={`${item.id}`}>
      <li className="text-xl md:text-2xl p-2 border-b">
        {index + 1}. {item.title}
      </li>
    </Link>
  ));
};

export default LawsList;
