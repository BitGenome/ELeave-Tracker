import { LeftMenuIcons } from "./LeftMenuIcons";

const LeftMenu = () => {
  return (
    <div className="bg-secondary w-14 h-screen py-5">
      <div className=" h-full flex flex-col items-center gap-4">
        {LeftMenuIcons.map((menu, _index) => menu.icon())}
      </div>
    </div>
  );
};

export default LeftMenu;
