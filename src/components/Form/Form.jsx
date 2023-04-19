import "./Form.scss";
import Footer from "../../components/footer/Footer";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

const defaultFormValues = {
  nitrogen: "",
  phosphorus: "",
  potassium: "",
  humidity: "",
  temperature: "",
  ph: "",
  rainfall: "",
};
const Form = ({ha}) => {
  // const history = useNavigate();
  const [formValues, setFormValues] = useState(defaultFormValues);

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
        console.log(data.prediction);
        // setPrediction(data.prediction);
        setFormValues(defaultFormValues);
      });
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="heading">
          <h2>enter the parameters</h2>
        </div>
        <label htmlFor="nitrogen">Nitrogen:</label>
        <input
          type="number"
          name="nitrogen"
          value={nitrogen}
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="phosphorus"> Phosphorus:</label>
        <input
          type="number"
          name="phosphorus"
          value={phosphorus}
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="potassium">Potassium:</label>
        <input
          type="number"
          name="potassium"
          value={potassium}
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="humidity">Humidity:</label>
        <input
          type="number"
          name="humidity"
          value={humidity}
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="temperature">Temperature:</label>
        <input
          type="number"
          name="temperature"
          value={temperature}
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="ph">PH:</label>
        <input
          type="number"
          name="ph"
          value={ph}
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="rainfall">Rainfall:</label>
        <input
          type="number"
          name="rainfall"
          value={rainfall}
          onChange={onChangeHandler}
          required
        />

        <button type="submit" className="submit-form">
          Submit
        </button>
      </form>
      <Footer />
    </>
  );
};
export default Form;
