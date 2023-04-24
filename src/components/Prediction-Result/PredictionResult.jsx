import "./PredictionResult.scss";
import { useContext } from "react";
import { predictionResultContext } from "../../context/prediction-result.context";

const PredictionResult = () => {
  const { result } = useContext(predictionResultContext);
  return (
    <div className="">
      <h1>{`The predicted crop is ${result}`}</h1>
      <iframe
        src={`https://en.wikipedia.org/wiki/${result}`}
        width="80%"
        height="500"
      ></iframe>
      {/* <a href="https://en.wikipedia.org/wiki/Pigeon_pea" target="_parent">
        Click me!
      </a> */}
    </div>
  );
};

export default PredictionResult;
