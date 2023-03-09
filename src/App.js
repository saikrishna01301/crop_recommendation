import Navigation from "./Routes/Navbar/Navbar";
import Home from "./Routes/Home/Home";
import Crop from "./Routes/Crop/Crop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/crop-recommendation" element={<Crop />} />
      </Route>
    </Routes>
  );
}

export default App;
