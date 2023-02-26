import "./Main.scss";
import { ReactComponent as Step1 } from "../../assets/steps/Step1.svg";
import { ReactComponent as Step2 } from "../../assets/steps/Step2.svg";
import { ReactComponent as Step3 } from "../../assets/steps/Step3.svg";
const Main = () => {
  return (
    <div className="steps__main--container">
      <h2 className="heading--2">How it works</h2>
      <p className="para">
        Our crop recommendation system is easy to use and can help you make
        informed decisions about your crops.
        <br />
        Here there are three steps to follow:
      </p>

      <div className="steps__container">
        <div className="step">
          <h3 className="step--heading">Input your data:</h3>
          <p className="step--para">
            upload data about your farm, including soil samples, crop types,
            planting dates, and other relevant information.
          </p>
        </div>
        <div className="step__right">
          <Step1 className="step__svg" />
        </div>
      </div>
      <div className="steps__container">
        <div className="step__right">
          <Step2 className="step__svg" />
        </div>
        <div className="step">
          <h3 className="step--heading">Recommendation:</h3>
          <p className="step--para">
            You'll receive detailed recommendations for optimizing your farming
            operations, including recommended crop varieties, planting
            schedules, nutrient management, pest control, and more.
          </p>
        </div>
      </div>
      <div className="steps__container">
        <div className="step">
          <h3 className="step--heading">Implementation:</h3>
          <p className="step--para">
            Use the recommendations to make changes to your farming operations
            and optimize your yields and profits.
          </p>
        </div>
        <div className="step__right">
          <Step3 className="step__svg" />
        </div>
      </div>
    </div>
  );
};
export default Main;
