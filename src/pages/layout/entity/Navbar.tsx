import { LangButton } from "@/features";
import { useTranslation } from "react-i18next";
import { BiChat, BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

type Props = {
  setIsOpen: any;
};

const Navbar = ({ setIsOpen }: Props) => {
  const { t } = useTranslation();
  return (
    <div
      className={` sticky top-0  bg-[url('/navbg.png')] w-full z-10 mb-1 px-4 py-3   h-28 border-b-8 border-bronze`}
    >
      <div className="bg-darkbordo w-full h-full flex rounded-2xl items-center  justify-between px-3">
        <div className="flex-1 md:hidden">
          <BiMenu
            onClick={() => setIsOpen(true)}
            className="text-4xl text-white "
          />
        </div>
        <div className="flex items-center gap-2">
          <img src="/logo.svg" className="w-20 h-20" alt="" />
          <div className="md:flex hidden gap-5">
            <h1 className="lg:text-2xl md:text-xl font-serif font-extralight ">
              ADALATLY <br />
              HUKUK
            </h1>
            <div className="md:flex items-center lg:text-xl text-lg gap-5 hidden text-gray-200">
              <NavLink
                className={({ isActive }) =>
                  `border-b-2 pb-1 transition-all duration-100 ${
                    isActive
                      ? "border-white text-white scale-110"
                      : "border-transparent"
                  }`
                }
                to="/"
              >
                {t("home")}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `border-b-2 pb-1 transition-all duration-100 ${
                    isActive
                      ? "border-white text-white scale-110"
                      : "border-transparent"
                  }`
                }
                to="/laws"
              >
                {t("laws")}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `border-b-2 pb-1 transition-all duration-100 ${
                    isActive
                      ? "border-white text-white scale-110"
                      : "border-transparent"
                  }`
                }
                to="/news"
              >
                {t("news")}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `border-b-2 pb-1 transition-all duration-100 ${
                    isActive
                      ? "border-white text-white scale-110"
                      : "border-transparent"
                  }`
                }
                to="/videos"
              >
                {t("videos")}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `border-b-2 pb-1 transition-all duration-100 ${
                    isActive
                      ? "border-white text-white scale-110"
                      : "border-transparent"
                  }`
                }
                to="/about"
              >
                {t("about")}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-1 items-center justify-end">
          <Link to="chat">
            <BiChat className="text-2xl" />
          </Link>
          <LangButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="flex items-center gap-3 ">
          <BiMenu
            onClick={() => setIsOpen(true)}
            className="text-4xl text-white md:hidden"
          />
          <Link to="/" className="items-center gap-2 hidden">
            <img src="/logo.svg" className="w-12 h-12" alt="" />
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
              {t("laws")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `border-b-2 border-transparent transition-all duration-100 ${
                  isActive && "border-gray-300 text-white scale-110"
                }`
              }
              to="/news"
            >
              {t("news")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `border-b-2 border-transparent transition-all duration-100 ${
                  isActive && "border-gray-300 text-white scale-110"
                }`
              }
              to="/videos"
            >
              {t("videos")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `border-b-2 border-transparent transition-all duration-100 ${
                  isActive && "border-gray-300 text-white scale-110"
                }`
              }
              to="/about"
            >
              {t("about")}
            </NavLink>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="chat">
            <span className="w-10 h-10 bg-bgsecondary rounded-lg flex items-center justify-center">
              <BiChat className="text-xl" />
            </span>
          </Link>
          <LangButton />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <button
              className="fixed bottom-5 p-1 h-12 w-12 xl:flex hidden items-center justify-center bg-bgsecondary text-white  rounded-full shadow-lg hover:scale-105"
              style={{
                left: "calc(50% + 710px - 60px)",
                top: "30%",
                bottom: "70%",
              }}
            >
              <BiChat className="text-xl" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="bg-bgsecondary w-[500px] h-60 border-slate-400 text-white"
          >
            <div className="w-full h-44 overflow-auto flex flex-col gap-3">
              <div className="flex items-end justify-end ">
                <div className="border p-2 text-sm rounded-md w-fit max-w-72 border-slate-300">
                  Can I share my news?
                </div>
              </div>
              <div className="flex items-end justify-start">
                <div className="border p-2 text-sm rounded-md w-fit max-w-72 border-slate-300">
                  Send in this gmail example@gmail.com
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div className="border p-2 text-sm rounded-md w-fit max-w-72 border-slate-300">
                  Okay Thanks.
                </div>
              </div>
            </div>
            <div className="h-10 w-full flex items-center">
              <input
                className="h-8 w-full bg-bgprimary p-2 rounded-md outline-none text-sm"
                type="text"
                placeholder="Enter your messsage"
              />
              <button className="w-10 flex items-center justify-center">
                <LuSendHorizonal className="text-2xl" />
              </button>
            </div>
          </PopoverContent>
        </Popover> */
}
