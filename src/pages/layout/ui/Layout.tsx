import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../entity/Sidebar";
import { Suspense, useState } from "react";
import { Navbar } from "../entity";
import { Footer } from "@/widget/footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    // <div className="w-full h-screen relative bg-gray-800">
    <div className="w-full h-screen relative bg-mainblack ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <div className="h-full overflow-auto 2xl:w-[1420px] z-20 text-white no-scrollbar mx-auto bg-gray-900 xl:px-16 px-2 md:pb-20 pb-16 relative"> */}
      <div className="h-full  overflow-auto 2xl:w-[1420px] z-20 text-white no-scrollbar mx-auto bg-mainblack   relative">
        {/* Navbar */}
        <Navbar setIsOpen={setIsOpen} />
        <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
          <Outlet />
        </Suspense>
        {pathname !== "/chat" ? <Footer /> : null}
      </div>
    </div>
  );
};

export default Layout;
