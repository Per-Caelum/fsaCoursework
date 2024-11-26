import { useDeletePuppyMutation, useGetPuppyQuery } from "./puppySlice.js";

/**
 * @component
 * Shows comprehensive information about the selected puppy, if there is one.
 * Also provides a button for users to remove the selected puppy from the roster.
 */
export default function PuppyDetails({ selectedPuppyId, setSelectedPuppyId }) {
  // TODO: Grab data from the `getPuppy` query
  const { data, status, isLoading } = useGetPuppyQuery();

  // TODO: Use the `deletePuppy` mutation to remove a puppy when the button is clicked
  const [deletePuppy] = useDeletePuppyMutation();
  console.log(`🐝🐝🐝. 🐝🐝🐝 ${data?.data?.json().unwrap()}`);

  const removePuppy = async (id) => {
    try {
      const response = await deletePuppy(id).unwrap();
      setSelectedPuppyId(id);
    } catch (error) {
      console.error(error);
    }
  };

  // There are 3 possibilities:
  let $details;
  // 1. A puppy has not yet been selected.
  if (!selectedPuppyId) {
    $details = <p>Please select a puppy to see more details.</p>;
  }
  //  2. A puppy has been selected, but results have not yet returned from the API.
  else if (isLoading) {
    $details = <p>Loading puppy information...</p>;
  }
  // 3. Information about the selected puppy has returned from the API.
  else {
    $details = (
      <>
        <h3>
          {data?.data?.name} #{data?.data?.id}
        </h3>
        <p>{data?.data?.breed}</p>
        <p>Team {data?.data?.team?.name ?? "Unassigned"}</p>
        <button onClick={() => removePuppy(data?.data?.id)}>
          Remove from roster
        </button>
        <figure>
          <img src={data?.data?.imageUrl} alt={data?.data?.name} />
        </figure>
      </>
    );
  }

  return (
    <aside>
      <h2>Selected Puppy</h2>
      {$details}
    </aside>
  );
}
