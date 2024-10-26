import { LangButton } from "@/features";
import { BiChat, BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

type Props = {
  setIsOpen: any;
};

const Navbar = ({ setIsOpen }: Props) => {
  return (
    <div
      className={` sticky top-0 w-full flex transition-transform duration-300 ease-in-out z-10 bg-primary mb-1 justify-between py-4 items-center  md:h-20 h-16`}
      // className={` sticky top-0 w-full flex transition-transform duration-300 ease-in-out z-10 bg-gray-900 mb-1 justify-between py-4 items-center  md:h-20 h-16`}
    >
      <div className="flex items-center gap-3 ">
        <BiMenu
          onClick={() => setIsOpen(true)}
          className="text-4xl text-white md:hidden"
        />
        <Link to="/">
          <h1 className="md:text-3xl text-2xl  font-semibold text-red-500">
            Adalatly
          </h1>
        </Link>
        <div className="md:flex items-center text-xl gap-5 hidden text-textsecondary">
          |
          <NavLink
            className={({ isActive }) =>
              `border-b-2 border-transparent transition-all duration-100 ${
                isActive && "border-gray-300 text-white scale-110"
              }`
            }
            to="/laws"
          >
            Laws
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `border-b-2 border-transparent transition-all duration-100 ${
                isActive && "border-gray-300 text-white scale-110"
              }`
            }
            to="/news"
          >
            News
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `border-b-2 border-transparent transition-all duration-100 ${
                isActive && "border-gray-300 text-white scale-110"
              }`
            }
            to="/videos"
          >
            Videos
          </NavLink>
          {/* <NavLink
            className={({ isActive }) =>
              `border-b-2 border-transparent transition-all duration-100 ${
                isActive && "border-gray-300 text-white scale-110"
              }`
            }
            to="/workers"
          >
            Employees
          </NavLink> */}
          <NavLink
            className={({ isActive }) =>
              `border-b-2 border-transparent transition-all duration-100 ${
                isActive && "border-gray-300 text-white scale-110"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
          <BiChat className="text-xl" />
        </span>
        <LangButton />
      </div>
    </div>
  );
};

export default Navbar;
