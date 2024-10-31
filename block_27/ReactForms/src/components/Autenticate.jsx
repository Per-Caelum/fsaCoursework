import { useState } from "react";
import axios from "axios";

let Authenticate = ({ token }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  let handleClick = async () => {
    try {
      console.log("🐝 sending token:", token);
      const response = await axios.get(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.name == "JsonWebTokenError") throw "Not found";

      setSuccessMessage(
        response.data.message + " Welcome, " + response.data.data.username
      );
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <h2>Authenticate!</h2>
      {successMessage && <p id="success">{successMessage}</p>}
      {error && <p id="error">{error}</p>}
      <button onClick={handleClick}>Authenticate</button>;
    </>
  );
};

export default Authenticate;
