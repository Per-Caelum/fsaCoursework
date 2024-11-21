import api from "../API";
import { useEffect, useState } from "react";
import axios from "axios";

const AllPlayers = () => {
  const [puppies, setPuppies] = useState();

  useEffect(() => {
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
      {puppies.map((player) => {
        return (
          <div key={player.id}>
            <h4>{player.name}</h4>
            ...whatever you want to display
          </div>
        );
      })}
    </div>
  );
};
export default AllPlayers;
