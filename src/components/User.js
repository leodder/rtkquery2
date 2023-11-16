import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.user.user);
  const UserProfile = () => (
    <>
      <p>name: {user?.name.first}</p>
      <p>gender: {user?.gender}</p>
      <p>phone:{user?.phone}</p>
    </>
  );
  return (
    <div>
      <h1>User Profile</h1>
      {user?.name ? <UserProfile /> : null}
    </div>
  );
};

export default User;
