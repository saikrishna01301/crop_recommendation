import "./SignIn.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  authSignInWithEmailAndPassword,
} from "../../../utils/firebase";
import { useState } from "react";
import FormInput from "../../FormInput/FormInput";
import { useNavigate } from "react-router-dom";

// import { useContext } from "react";
// import { userContext } from "../../../context/user.context";

/////////////////////////////////////////////////////
const defaultSignInFormFields = {
  email: "",
  password: "",
};
///////////////////component///////////////////////////////
const SignIn = () => {
  // const { setCurrentUser } = useContext(userContext);

  const navigate = useNavigate();
  const createAccountHandler = () => {
    navigate("/sign-up");
  };
  //----------google sign in--------------------------
  const onGoogleHandler = async () => {
    await signInWithGooglePopup();

    // setCurrentUser(user);
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
      const { user } = await authSignInWithEmailAndPassword(email, password);
      // setCurrentUser(user);
    } catch (error) {
      console.log(error);
    }
    setFormFields(defaultSignInFormFields);
  };

  return (
    <div className="auth-container">
      <h2 className="sign-in--head">Already have an account ?</h2>
      <p className="sign-in--p">Sign-in to your account</p>

      <form onSubmit={onSubmitHandler} className="sign-in--form">
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
        <p className="new-acc" onClick={createAccountHandler}>
          Create new account ?
        </p>
        <div className="buttons-container">
          <button type="submit" className="btn-s">
            sign in
          </button>
          <button type="button" className="btn-s" onClick={onGoogleHandler}>
            google sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
