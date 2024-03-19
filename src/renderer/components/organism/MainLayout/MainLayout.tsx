import { ReactNode } from "react";
import LeftMenu from "../LeftMenu";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section className="flex bg-slate-100">
      <div className="flex-none">
        <LeftMenu />
      </div>
      <div className="h-screen overflow-y-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default MainLayout;
