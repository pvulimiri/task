import Cookies from "js-cookie";

import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu, GiSkullCrossedBones } from "react-icons/gi";
import "./NavBar.css";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { rxjsStore } from "../Store/rxjsStore";
import { Observable } from "rxjs";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  // const [value, setValue] = useState(localStorage.getItem("value"));
  const [value, setValue] = useState(1);
  function onClickLogout() {
    Cookies.remove("token");
    window.location.replace("/login");
  }
  function onClickMenu() {
    setShowMenu((prev) => !prev);
  }

  useEffect(()=>{
    // rxjsStore.getGlobalValue().subscribe(v =>{
    //   setValue(v)
    // })

    var stream1 = Observable.create(rxjsStore.setGlobalValue)

  },[])

  


  
  function onChangeValue(event){
    setValue(event.target.value)
    // localStorage.setItem("value",event.target.value)
    // window.dispatchEvent(new Event('value'))

    rxjsStore.setGlobalValue(event.target.value)
  }
  // console.log(value)
  return (
    <div>
      <nav className="navbar-container">
        <button className="hamburger-menu-btn" onClick={onClickMenu}>
          {showMenu ? <GiSkullCrossedBones className="nav-icon" /> : <GiHamburgerMenu />}
        </button>
        <Link to={"/"} className="navigation-link">
        <h1>#LOGO</h1>
        </Link>
        <div className="navbar-right">
          {/* <select className="select nav-right-route-element" onChange={(event) => {setValue(event.target.value)}}> */}
          
          <select value={value} className="select nav-right-route-element" onChange={onChangeValue}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <Link to={"/"} className="nav-right-route-element navigation-link">
            Home
          </Link>
          <Link to={"/about"} className="nav-right-route-element navigation-link">
            About
          </Link>
          <button onClick={onClickLogout}>Logout</button>
        </div>
      </nav>
      <div className="sidebar-content-container">
        {/* <SideBar showSideBar={showMenu} value={value} /> */}
        <SideBar showSideBar={showMenu} />
        {/* <Outlet context={[value]}/> */}
        <Outlet />
        {/* <Outlet /> */}
      </div>
    </div>
  );
}
