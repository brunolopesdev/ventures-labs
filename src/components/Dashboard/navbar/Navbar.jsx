import "./Navbar.css";
import { BsFillGearFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ openSideBar, sideBarOpen }) => {
  return (
    <nav className="navbar-dashboard">
      <div className="nav_icon-dashboard" onClick={() => openSideBar()}>
        <i className="fa fa-bars" aria-hidden="true">
          <FaBars />
        </i>
      </div>

      <div className="navbar__left">
        <Link to="/register">Cadastrar</Link>
        <Link to="/">Clientes</Link>
      </div>

      <div className="navbar__right">
        <i>
          <BsFillGearFill />
        </i>
      </div>
    </nav>
  );
};

export default Navbar;
