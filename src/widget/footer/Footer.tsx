const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row h-96 md:h-52 border-b-8 border-bronze mt-8">
      <div className="bg-white flex-1 border-b-8 border-bronze md:border-b-0 md:border-r-8 flex items-center justify-center">
        <img className="h-40" src="/logo.svg" alt="" />
      </div>
      <div className="flex-1 md:flex-[3] bg-darkbordo  flex flex-col md:flex-row md:justify-center p-2 gap-3">
        <div className="flex-1 flex justify-center flex-col gap-2">
          <p className="text-center text-xl">Contact with us</p>
          <div className="flex items-center gap-2 justify-center md:flex-col">
            <p>example@gmail.com</p>
            <p>+99365385973</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1 md:justify-center">
          <p className="text-center text-xl">Use our app</p>
          <div className="flex items-center justify-center gap-3 ">
            <img src="/apple.png" alt="" />
            <img src="/play.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="flex w-full mt-5 items-center">
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
      </div> */
}
