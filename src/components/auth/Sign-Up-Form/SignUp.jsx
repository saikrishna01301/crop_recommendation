import "./SignUp.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase";
import FormInput from "../../FormInput/FormInput";

const defaultSignUpFormFields = {
  displayName: "",
  email: "",
  password: "",
  conformPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultSignUpFormFields);
  const { displayName, email, password, conformPassword } = formFields;
  //-----------------onChange----------------//
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  //-----------------onSubmit----------------//
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== conformPassword) {
      console.log("passwords not matched");
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
        console.log(error);
      }
    }
    setFormFields(defaultSignUpFormFields);
  };

  return (
    <div>
      <h2>Sign-Up using Email and Password</h2>
      <form onSubmit={onSubmitHandler}>
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

        <button type="submit" className="btn-s">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SignUp;
