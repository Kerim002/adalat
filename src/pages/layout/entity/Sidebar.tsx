import { BiHome } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { tv } from "tailwind-variants";

type Props = {
  isOpen: boolean;
  setIsOpen: any;
};

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  const condition = tv({
    base: "bg-primary text-textbase md:hidden z-50 fixed top-0 bottom-0  sm:w-[45%] w-[65%]  transition-transform transform flex flex-col",
    // base: "lg:max-w-[240px] bg-red-400 lg:min-w-[200px] md:max-w-[240px] md:min-w-[200px]  z-30 md:static fixed top-0 bottom-0 sm:w-[40%] w-[50%]  transition-transform transform",
    variants: {
      open: {
        true: "translate-x-0",
        false: "-translate-x-full md:translate-x-0",
      },
    },
    compoundVariants: [
      {
        open: true,
      },
    ],
  });
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-700 bg-opacity-50 z-30 left-0 right-0 top-0 bottom-0 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className={condition({ open: isOpen })}>
        <div className="p-3">
          <h1 className="text-3xl text-red-500 font-semibold text-center mt-3">
            Adalatly
          </h1>
        </div>
        <div className="px-4 border-t pt-3 flex flex-col gap-3">
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "bg-colder" : ""
              } flex items-center py-1.5 px-3 rounded-lg text-xl gap-1`
            }
          >
            <BiHome className="text-2xl" />
            <p>Bas sahypa</p>
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="laws"
            className={({ isActive }) =>
              `${
                isActive ? "bg-colder" : ""
              } flex items-center py-1.5 px-3 rounded-lg text-xl gap-1`
            }
          >
            <BiHome className="text-2xl" />
            <p>Laws</p>
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="news"
            className={({ isActive }) =>
              `${
                isActive ? "bg-colder" : ""
              } flex items-center py-1.5 px-3 rounded-lg text-xl gap-1`
            }
          >
            <BiHome className="text-2xl" />
            <p>News</p>
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="videos"
            className={({ isActive }) =>
              `${
                isActive ? "bg-colder" : ""
              } flex items-center py-1.5 px-3 rounded-lg text-xl gap-1`
            }
          >
            <BiHome className="text-2xl" />
            <p>Videos</p>
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="about"
            className={({ isActive }) =>
              `${
                isActive ? "bg-colder" : ""
              } flex items-center py-1.5 px-3 rounded-lg text-xl gap-1`
            }
          >
            <BiHome className="text-2xl" />
            <p>About</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
