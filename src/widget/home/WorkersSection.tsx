import EmployerList from "../../entities/home/ui/EmployerList";
import SectionTitle from "../custom/SectionTitle";
const WorkersSection = () => {
  return (
    <div className="w-full">
      <SectionTitle title="Isgarler" />
      <EmployerList />
    </div>
  );
};

export default WorkersSection;
