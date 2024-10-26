import { Outlet } from "react-router-dom";
import Sidebar from "../entity/Sidebar";
import { Suspense, useState } from "react";
import { Navbar } from "../entity";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="w-full h-screen relative bg-gray-800">
    <div className="w-full h-screen relative bg-secondary">
      {/* <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/test/photo.png')" }}
      ></div> */}

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <div className="h-full overflow-auto 2xl:w-[1420px] z-20 text-white no-scrollbar mx-auto bg-gray-900 xl:px-16 px-2 md:pb-20 pb-16 relative"> */}
      <div className="h-full overflow-auto 2xl:w-[1420px] z-20 text-white no-scrollbar mx-auto bg-primary xl:px-16 px-2 md:pb-20 pb-16 relative">
        {/* Navbar */}
        <Navbar setIsOpen={setIsOpen} />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
