import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { website, name } = user;
  return (
    <div className="space-y-2 bg-green-300 rounded-lg p-5" >
      <h3 className="font-bold">Name: {name}</h3>
      <p>Email: {website}</p>
    </div>
  );
};

export default UserDetails;
