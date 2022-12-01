/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Users() {
  const params = useParams();
  console.log(params.userId);

  const [searchParams, setSearchParams] = useSearchParams();
  const showActive = searchParams.get("filter") === "active";
  return (
    <div>
      <div>Users typed : {params.userId}</div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Users</button>
      <h2>Showing {showActive ? "active" : "all"} users</h2>
    </div>
  );
}
