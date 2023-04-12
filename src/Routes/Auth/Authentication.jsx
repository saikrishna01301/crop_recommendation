import "./Authentication.scss";
import SignIn from "../../components/auth/Sign-In-Form/SignIn";
import SignUp from "../../components/auth/Sign-Up-Form/SignUp";
import { Link, Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <div>
      {/* <Link to="/auth/sign-in">sign in</Link>
      <Outlet/> */}
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
};
export default Authentication;
