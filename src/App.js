import Navigation from "./Routes/Navbar/Navbar";
import Home from "./Routes/Home/Home";
import Crop from "./Routes/Crop/Crop";
import Authentication from "./Routes/Auth/Authentication";
import { Routes, Route } from "react-router-dom";

import SignIn from "./components/auth/Sign-In-Form/SignIn";
import SignUp from "./components/auth/Sign-Up-Form/SignUp";
import Shop from "./components/shop/Shop-main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/crop-recommendation" element={<Crop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
