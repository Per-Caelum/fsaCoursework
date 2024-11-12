import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Maincontainer from "./components/Maincontainer";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <Navbar />
        <Maincontainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
