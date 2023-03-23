import "./FormInput.scss";
const FormInput = ({ label, ...otherprops }) => {
  return (
    <div className="form--container">
      <label className="form--label">{label}</label>
      <input className="form--input" {...otherprops} />
    </div>
  );
};
export default FormInput;
