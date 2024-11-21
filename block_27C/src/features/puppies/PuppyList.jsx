import { useEffect, useState } from "react";
import {
  useGetPuppiesQuery,
  // useGetPuppyQuery,
  // useAddPuppyMutation,
  // useDeletePuppyMutation,
} from "./puppySlice.js";

/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
  const { data, status, isLoading } = useGetPuppiesQuery(); //🐝
  console.log(`🐝 ${status} puppyApieee`);
  console.log(`🐝 ${data} data`);
  const [puppies, setPuppies] = useState([]);
  useEffect(() => {
    if (data?.data) {
      console.log(data.data.players);
      setPuppies(data.data.players);
    }
  }, [status]);

  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {/* puppies.map((p) => (
          <li key={p.id}>
            <h3>
              {p.name} #{p.id}
            </h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button onClick={() => setSelectedPuppyId(p.id)}>
              See details
            </button>
          </li>
        ))} */}
      </ul>
    </article>
  );
}
