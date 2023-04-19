import "./Crop.scss";
import Form from "../../components/Form/Form";

const Crop = ({ handlePrediction }) => {
  return (
    <div className="crop-container">
      <Form handlePrediction={handlePrediction} />
    </div>
  );
};

export default Crop;
