import { useState } from "react";
import {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} from "./puppySlice";

/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */
export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  // TODO: Use the `addPuppy` mutation to add a puppy when the form is submitted
  const [addPuppy, { error, isLoading }] = useAddPuppyMutation();
  console.log(`PupForm useaddpup ${JSON.stringify(useAddPuppyMutation())}`);
  const postPuppy = async (event) => {
    event.preventDefault();
    // Placeholder image w/ random photos of dogs
    const imageUrl = "https://loremflickr.com/200/300/dog";
    //addPuppy(name, breed, imageUrl);
    addPuppy({ name: name, breed: breed, imageUrl: imageUrl });
  };

  return (
    <>
      <h2>Add a Puppy</h2>
      <form onSubmit={postPuppy}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <button>Add to Roster</button>
        {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </>
  );
}
