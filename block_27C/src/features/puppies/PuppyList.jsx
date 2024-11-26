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

  /*
  If get funky data: print method with ()
  console.log(useGetPuppiesQuery())
  once this return success we can start digging into data
  we see here there is another layer called data
  ok one layer deeper in players and that is our array
  **/
  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {data?.data?.players.map((p) => (
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
        ))}
      </ul>
    </article>
  );
}
