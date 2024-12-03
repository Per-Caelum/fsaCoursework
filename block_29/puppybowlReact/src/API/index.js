//https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players`;

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    endpoints: () => ({}),
  }),
  // tagTypes: ["Puppy"], //🐝
});

export default api;

//you can add files that are not instructed to add
