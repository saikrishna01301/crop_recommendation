import "./Navbar.scss";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../context/user.context";
import { userSignOut } from "../../utils/firebase";

const Navigation = () => {
  const { currentUser } = useContext(userContext);
  // console.log(currentUser);

  const onSignOutHandler = async () => {
    await userSignOut();
  };
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
            <NavLink className="nav__link" to="shop">
              Shop
            </NavLink>
          </li>
          <li className="nav__right--item">
            <NavLink className="nav__link" to="help">
              Help
            </NavLink>
          </li>
          <li className="nav__right--item">
            {currentUser ? (
              <span className="nav__link" onClick={onSignOutHandler}>
                Sign Out
              </span>
            ) : (
              <NavLink className="nav__link" to="sign-in ">
                Sign In
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
