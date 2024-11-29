import { useDeletePuppyMutation, useGetPuppyQuery } from "./puppySlice.js";
import { useState } from "react";
/**
 * @component
 * Shows comprehensive information about the selected puppy, if there is one.
 * Also provides a button for users to remove the selected puppy from the roster.
 */
export default function PuppyDetails({ selectedPuppyId, setSelectedPuppyId }) {
  // TODO: Grab data from the `getPuppy` query
  const { data, isLoading } = useGetPuppyQuery(selectedPuppyId);

  console.log(data?.data);

  // TODO: Use the `deletePuppy` mutation to remove a puppy when the button is clicked
  const [deletePuppy] = useDeletePuppyMutation();

  // console.log(
  //   `🐝🐝🐝 PupDet
  //    and next thing is like this------------------------------------${JSON.stringify(
  //      data?.data?.players
  //    )}`
  // );
  // console.log(`pio ${selectedPuppyId}`);
  const removePuppy = async (id) => {
    console.log(id);
    try {
      const puppy = await deletePuppy(id);
      console.log(`puppyyyy ${JSON.stringify(puppy)}`);
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
          {data?.data?.player.name} #{data?.data?.player.id}
        </h3>
        <p>{data?.data?.player.breed}</p>
        <p>Team {data?.data?.player.teamId ?? "Unassigned"}</p>
        <button onClick={() => removePuppy(data?.data?.player.id)}>
          Remove from roster
        </button>
        <figure>
          <img
            src={data?.data?.player.imageUrl}
            alt={data?.data?.player.name}
          />
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
