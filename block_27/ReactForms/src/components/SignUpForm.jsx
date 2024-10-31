import { useState } from "react";
import axios from "axios";

let SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log("🐝 Hello o/");

    try {
      //Error tests
      if (username == "") throw "Username is empty";
      if (password == "") throw "Password is empty";
      if (username.length < 8) throw "Username is too short";
      if (password.length < 5) throw "Password is too short";

      const response = await axios.post(
        //its post for submit related things
        "https://fsa-jwt-practice.herokuapp.com/signup",
        { username, password } //Remember to add this bit, sha
      );

      //const result = await response.data; //what we would to send to settoken
      setToken(await response.data.token);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p id="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        {" "}
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            type="password" //Remember to hide password fields
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
