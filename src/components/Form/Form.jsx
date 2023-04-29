import "./Form.scss";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { predictionResultContext } from "../../context/prediction-result.context";

const defaultFormValues = {
  nitrogen: "",
  phosphorus: "",
  potassium: "",
  humidity: "",
  temperature: "",
  ph: "",
  rainfall: "",
};
const Form = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { setResult } = useContext(predictionResultContext);
  const {
    nitrogen,
    phosphorus,
    potassium,
    humidity,
    temperature,
    ph,
    rainfall,
  } = formValues;

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Do some form processing here...
  //   // Then change the route
  //   // history("/help");
  //   console.log(formValues);
  //   setFormValues(defaultFormValues);
  // };

  ////////////////////////////////////////////////
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/predict", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormValues(defaultFormValues);
        setResult(data.prediction);
        navigate("/PredictionResult ");
      });

    // setFormValues(defaultFormValues);
    // setResult("wheat");
    // navigate("/PredictionResult ");
  };
  // setFormValues(defaultFormValues);
  // setResult("wheat");
  // navigate("/PredictionResult ");

  return (
    <>
      <form className="crop-form-container" onSubmit={handleSubmit}>
        <div className="heading">
          <h3>enter the parameters</h3>
        </div>
        <label className="form__label" htmlFor="nitrogen">
          Nitrogen:
        </label>
        <input
          className="form__input"
          type="number"
          name="nitrogen"
          value={nitrogen}
          onChange={onChangeHandler}
          required
        />
        <label className="form__label" htmlFor="phosphorus">
          {" "}
          Phosphorus:
        </label>
        <input
          className="form__input"
          type="number"
          name="phosphorus"
          value={phosphorus}
          onChange={onChangeHandler}
          required
        />
        <label className="form__label" htmlFor="potassium">
          Potassium:
        </label>
        <input
          className="form__input"
          type="number"
          name="potassium"
          value={potassium}
          onChange={onChangeHandler}
          required
        />
        <label className="form__label" htmlFor="humidity">
          Humidity:
        </label>
        <input
          className="form__input"
          type="number"
          name="humidity"
          value={humidity}
          onChange={onChangeHandler}
          required
        />
        <label className="form__label" htmlFor="temperature">
          Temperature:
        </label>
        <input
          className="form__input"
          type="number"
          name="temperature"
          value={temperature}
          onChange={onChangeHandler}
          required
        />
        <label className="form__label" htmlFor="ph">
          PH:
        </label>
        <input
          className="form__input"
          type="number"
          name="ph"
          value={ph}
          onChange={onChangeHandler}
          required
        />
        <label className="form__label" htmlFor="rainfall">
          Rainfall:
        </label>
        <input
          className="form__input"
          type="number"
          name="rainfall"
          value={rainfall}
          onChange={onChangeHandler}
          required
        />

        <span type="submit" className="btn-form">
          Submit
        </span>
      </form>
      <Footer />
    </>
  );
};
export default Form;
