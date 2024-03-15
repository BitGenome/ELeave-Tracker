import { useNavigate } from "react-router-dom";
import { LeftMenuIcons } from "./LeftMenuIcons";

const LeftMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-secondary w-14 h-screen py-5">
      <div className=" h-full flex flex-col items-center gap-4">
        {LeftMenuIcons.map((menu, _index) => {
          return <span onClick={() => navigate(menu.link)}>{menu.icon()}</span>;
        })}
      </div>
    </div>
  );
};

export default LeftMenu;
