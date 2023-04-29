import "./SignUp.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase";
import FormInput from "../../FormInput/FormInput";
import { useNavigate } from "react-router-dom";

const defaultSignUpFormFields = {
  displayName: "",
  email: "",
  password: "",
  conformPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultSignUpFormFields);
  const { displayName, email, password, conformPassword } = formFields;
  const navigate = useNavigate();
  //-----------------onChange----------------//
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  //-----------------onSubmit----------------//
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== conformPassword) {
      alert("passwords not matched");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("user already exists");
      } else {
        alert(error);
      }
    }
    setFormFields(defaultSignUpFormFields);
  };
  ////////////////////////////////////////
  const onAlreadyHaveAnAccountHandler = () => {
    navigate("/sign-in");
  };

  return (
    <div className="auth-container">
      <h2 className="sign-up--head">Sign-Up using Email and Password</h2>
      <form onSubmit={onSubmitHandler} className="sign-up--form">
        <FormInput
          label={"Full Name"}
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
          required
        />

        <FormInput
          label={"Email"}
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          required
        />

        <FormInput
          label={"Password"}
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          required
        />

        <FormInput
          label={"Conform Password"}
          type="password"
          name="conformPassword"
          value={conformPassword}
          onChange={onChangeHandler}
          required
        />
        <p className="new-acc" onClick={onAlreadyHaveAnAccountHandler}>
          Already have an account ?
        </p>
        <button type="submit" className="btn-sign-up">
          Sign up
        </button>
      </form>
    </div>
  );
};
export default SignUp;
