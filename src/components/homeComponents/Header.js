import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {


  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <figure>
            <a href="/">

              <img id="logo" src="./images/origional.svg" alt="" />
            </a>
          </figure>
        </div>
        <div className="menu-link">
          <ul>
            <li>
             <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="initiatives">

              Initiatives
              </NavLink>
            </li>
            <li>
              <NavLink to="about">

              About
              </NavLink>
            </li>
            <li>
            <NavLink to="connect">
              Connect
              </NavLink>
            </li>
            <li>
              <NavLink to="team">

              Team
              </NavLink>
            </li>
            <li>
              <NavLink to="blogs">

              Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="gallary">

              Gallary
              </NavLink>
              </li>
            <li>
              <NavLink to="contact">

              Contact
              </NavLink>
            </li>
          </ul>
        </div>

      </nav>
    </>
  );
};

export default Header;