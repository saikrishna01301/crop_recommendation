import "./Footer.scss";
import { ReactComponent as Facebook } from "../../assets/social/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/social/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/social/twitter.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer--logo-box">
          <img
            className="footer--logo"
            alt="logo"
            src={require("../../assets/logo.png")}
          />
          <span className="footer--heading">Company</span>
          <div className="footer--icons">
            <Instagram className="footer--icon" />
            <Facebook className="footer--icon" />
            <Twitter className="footer--icon" />
          </div>
          <p className="footer--left-para">
            Copyright © 2023 by Lovely Professional University, Inc. All rights
            reserved.
          </p>
        </div>
        <div className="div-right">
          You'll receive detailed recommendations for optimizing your farming
          operations, including recommended crop varieties, planting schedules,
          nutrient management, pest control, and more.
        </div>
      </div>
    </div>
  );
};

export default Footer;
