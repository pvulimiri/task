// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import "./Sidebar.css";


const sidebarElements = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
];
export default function SideBar(props) {
  const { showSideBar } = props;

  return (
    <div
      className={`sidebar-container ${
        showSideBar ? "show-sidebar" : "hide-sidebar"
      }`}
    >
      <ul className="sidebar-elements">
        {sidebarElements.map((item) => (
          <Link to={`/${item}`} >
          <button key={item} className="sidebar-elements-btn">
            <li>{item}</li>
          </button>
          </Link>
        ))}
      </ul>
    </div>
  );
}
