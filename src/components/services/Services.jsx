import "./Services.scss";
// import { ReactComponent as Analysis } from "../../assets/Analysis.svg";
// import { ReactComponent as Yield } from "../../assets/Yield.svg";
// import { ReactComponent as Selection } from "../../assets/Selection.svg";

import Selection from "../../assets/Selection.png";
import Yield from "../../assets/Yield.png";
import Analysis from "../../assets/Analysis.png";

const Services = () => {
  return (
    <div className="services">
      <div className="services__container">
        <div className="service">
          <img className="service--icon" src={Analysis} alt="Crop Analysis" />
          <h3 className="service--heading">Crop Analysis</h3>
          <p className="service--para">
            We analyze the soil and climate data of your location to determine
            which crops are best suited for your farm.
          </p>
        </div>
        <div className="service">
          <img className="service--icon" src={Yield} alt="Yield Prediction" />
          <h3 className="service--heading">Yield Prediction</h3>
          <p className="service--para">
            Based on your farm's history and environmental factors, we predict
            your crop yield and provide recommendations to improve it.
          </p>
        </div>
        <div className="service">
          <img className="service--icon" src={Selection} alt="Crop Selection" />
          <h3 className="service--heading">Crop Selection</h3>
          <p className="service--para">
            Our system recommends the best crops to plant based on your
            location, climate, and soil data, helping you optimize your crop
            yield.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
