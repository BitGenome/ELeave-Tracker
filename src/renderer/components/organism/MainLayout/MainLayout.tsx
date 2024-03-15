import { ReactNode } from "react";
import LeftMenu from "../LeftMenu";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex">
      <LeftMenu />
      {children}
    </section>
  );
};

export default MainLayout;
