import "./SignIn.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
const SignIn = () => {
  const onGoogleHandler = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div className="auth-container">
      <div className="sign-in">
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />

          <div>
            <button type="submit">sign in</button>
            <button type="button" onClick={onGoogleHandler}>
              google sign in
            </button>
          </div>
        </form>
      </div>
      <div className="sign-up"></div>
    </div>
  );
};

export default SignIn;
