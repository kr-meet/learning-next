'use client'

import { useState } from "react";
import { searchUsers, uploadUserDetails, uploadUsers } from "./utils/uploadUserDetails";

export default function App() {
  const [userId, setUserId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <input
        placeholder="Enter ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={() => uploadUserDetails(userId)}>Upload User</button>
      <button onClick={uploadUsers}>Upload Many</button>
      <input
        placeholder="Search Users"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={() => searchUsers(searchQuery)}>Search Users</button>
    </>
  );
}
