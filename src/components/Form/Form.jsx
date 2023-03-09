import "./Form.scss";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Form = () => {
  const history = useNavigate();
  const [formValues, setFormValues] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    humidity: "",
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { nitrogen, phosphorus, potassium, humidity } = e.target;
    setFormValues({ ...formValues , });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do some form processing here...
    // Then change the route
    // history("/help");
    console.log(formValues);
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
          value={formValues.nitrogen}
          onChange={onChangeHandler}
        />

        <label htmlFor="phosphorus"> Phosphorus:</label>
        <input
          type="number"
          value={formValues.phosphorus}
          onChange={onChangeHandler}
        />

        <label htmlFor="potassium">Potassium:</label>
        <input
          type="number"
          value={formValues.potassium}
          onChange={onChangeHandler}
        />

        <label htmlFor="humidity">Humidity:</label>
        <input
          type="number"
          value={formValues.humidity}
          onChange={onChangeHandler}
        />

        <input type="submit" />
      </form>
      <Footer />
    </>
  );
};
export default Form;
