import { useState } from "react";

import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Autenticate";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //const [count, setCount] = useState(0);
  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} />
      <SignUpForm setToken={setToken} />
    </>
  );
}

export default App;
