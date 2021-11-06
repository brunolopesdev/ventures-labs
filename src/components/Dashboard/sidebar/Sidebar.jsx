import "./Sidebar.css";
import logo from "../../../assets/logoVenturelabs.png";
import { FaTimes, FaMinusSquare, FaWpforms } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = ({ sideBarOpen, closeSideBar }) => {
  return (
    <div className={sideBarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="Logo" />
        </div>
        <i onClick={() => closeSideBar()} id="sidebar__icon" area-hidden="true">
          <FaTimes />
        </i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i>
            <FaMinusSquare />
          </i>
          <a href="/">Inicio</a>
        </div>
        <h2>ADMIN</h2>
        <div className="sidebar__link">
          <i>
            <BsFillPeopleFill />
          </i>
          <Link to="/">Clientes</Link>
        </div>
        <div className="sidebar__link">
          <i>
            <FaWpforms />
          </i>
          <Link to="/register">Cadastrar</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
