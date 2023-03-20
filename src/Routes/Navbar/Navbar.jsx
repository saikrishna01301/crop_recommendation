import "./Navbar.scss";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="nav__container">
        <div className="nav__left">
          <NavLink to="/">
            <img
              className="nav__logo"
              alt="logo"
              src={require("../../assets/logo.png")}
            />
          </NavLink>
        </div>
        <ul className="nav__right">
          <li className="nav__right--item">
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav__right--item">
            <NavLink className="nav__link" to="/crop-recommendation">
              Crop Recommendation
            </NavLink>
          </li>
          <li className="nav__right--item">
            <NavLink className="nav__link" to="/shop">
              Shop
            </NavLink>
          </li>
          <li className="nav__right--item">
            <NavLink className="nav__link" to="help">
              Help
            </NavLink>
          </li>
          <li className="nav__right--item">
            <NavLink className="nav__link" to="sign-in">
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
