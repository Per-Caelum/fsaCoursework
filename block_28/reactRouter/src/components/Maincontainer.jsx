import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";
import Green from "./Green";
import Purple from "./Purple";
export default function Maincontainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/home" component={Home}></Route>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/purple" element={<Purple />} />
      </Routes>
    </div>
  );
}
