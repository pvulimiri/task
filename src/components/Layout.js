import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import "./Layout.css";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <div className="sidebar-content-container">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
