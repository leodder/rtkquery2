import React from "react";
import { useGetAllPostsQuery } from "../store/api/apiSlice";

const Post = () => {
  const { data, error, isLoading } = useGetAllPostsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  console.log("Posts", data);

  return <h1>Post</h1>;
};

export default Post;
