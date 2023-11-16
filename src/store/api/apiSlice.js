// https://jsonplaceholder.typicode.com/posts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts", // https://jsonplaceholder.typicode.com/posts
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
