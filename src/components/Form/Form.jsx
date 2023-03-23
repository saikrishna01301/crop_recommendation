import "./Form.scss";
import Footer from "../../components/footer/Footer";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

const defaultFormValues = {
  nitrogen: "",
  phosphorus: "",
  potassium: "",
  humidity: "",
};
const Form = () => {
  // const history = useNavigate();
  const [formValues, setFormValues] = useState(defaultFormValues);

  const { nitrogen, phosphorus, potassium, humidity } = formValues;

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do some form processing here...
    // Then change the route
    // history("/help");
    console.log(formValues);
    setFormValues(defaultFormValues);
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
        <button type="submit" className="submit-form">
          Submit
        </button>
      </form>
      <Footer />
    </>
  );
};
export default Form;
