import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../API";

const SinglePlayer = () => {
  useEffect(() => {
    const [puppies, setPuppies] = useState();

    const fetchPuppies = async () => {
      try {
        const { data } = await axios.get(api);
        setPuppies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPuppies();
  }, []);

  return (
    <div>
      <button onClick={useNavigate("./SinglePlayer.jsx")}></button>
    </div>
  );
};
export default SinglePlayer;
