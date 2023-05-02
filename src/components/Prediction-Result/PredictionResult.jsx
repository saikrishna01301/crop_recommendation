import "./PredictionResult.scss";
import { useContext } from "react";
import { predictionResultContext } from "../../context/prediction-result.context";

const PredictionResult = () => {
  const { result } = useContext(predictionResultContext);
  return (
    <div className="prediction-result">
      <h1 className="result-head">{`The predicted crop is ${result}`}</h1>
      <iframe
        src={`https://en.wikipedia.org/wiki/${result}`}
        width="80%"
        height="700"
        className="result-des"
      ></iframe>
    </div>
  );
};

export default PredictionResult;
