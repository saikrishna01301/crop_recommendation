import "./SignIn.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  authSignInWithEmailAndPassword,
} from "../../../utils/firebase";
import { useState } from "react";
import FormInput from "../../FormInput/FormInput";

/////////////////////////////////////////////////////
const defaultSignInFormFields = {
  email: "",
  password: "",
};
///////////////////component///////////////////////////////
const SignIn = () => {
  //----------google sign in--------------------------
  const onGoogleHandler = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  //----------functionality---------------------------
  const [formFields, setFormFields] = useState(defaultSignInFormFields);
  const { email, password } = formFields;
  //------------onCChange-------------------------
  const onClickHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  //------------onSubmit-------------------------
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await authSignInWithEmailAndPassword(email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    setFormFields(defaultSignInFormFields);
  };

  return (
    <div className="auth-container">
      <div className="sign-in">
        <form onSubmit={onSubmitHandler}>
          <FormInput
            label={"Email"}
            type="email"
            name="email"
            value={email}
            onChange={onClickHandler}
            required
          />
          <FormInput
            label={"Password"}
            type="password"
            name="password"
            value={password}
            onChange={onClickHandler}
            required
          />
          <div>
            <button type="submit">sign in</button>
            <button type="button" onClick={onGoogleHandler}>
              google sign in
            </button>
          </div>
          {/* <link href="../Sign-Up-Form/SignUp.jsx">
            already have an account?
          </link> */}
        </form>
      </div>
      <div className="sign-up"></div>
    </div>
  );
};

export default SignIn;
