import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex w-full mt-5 items-center">
        <div className="flex-1">
          <h2 className="text-red-500 text-3xl font-semibold">
            Adalatly Maslahat
          </h2>
        </div>
        <div className="flex-1">
          <h2 className="text-xl">Habarlasmak ucin:</h2>
        </div>
        <div className="flex-1">
          <h2 className=" text-xl">Bizin programmamyzy ulanyn:</h2>
        </div>
      </div>
      <div className="flex w-full mt-2">
        <div className="flex-1 flex flex-col gap-2 text-lg">
          <Link to="">Laws</Link>
          <Link to="">News</Link>
          <Link to="">Videos</Link>
          <Link to="">Employess</Link>
          <Link to="">About</Link>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-lg">
          <p>+99365656565</p>
          <p>+99365656565</p>
          <p>+99365656565</p>
        </div>
        <div className="flex-1">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
