import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import store from "../utils/store";
import { Outlet } from "react-router-dom";

const Body = () => {
  //const isMenuOpen = useSelector(store.app.isMenuOpen);

  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
