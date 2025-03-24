'use client'

import { useState } from "react";
import { searchUsers, uploadUserDetails, uploadUsers } from "./utils/uploadUserDetails";
import { UserProfile } from "./UserProfile";

export default function App() {
  const [userId, setUserId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [profile, setProfile] = useState<File | undefined>();
  const [profileQuery, setProfileQuery] = useState<string>("");
  const [profileView, setProfileView] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col">
        <div>
          <input
            placeholder="Enter ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <button onClick={() => uploadUserDetails(userId, profile)}>Upload User</button>
        </div>

        <div>
          <button onClick={uploadUsers}>Upload Many</button>
        </div>

        <div>
          <input
            placeholder="Search Users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={() => searchUsers(searchQuery)}>Search Users</button>
        </div>
      </div>

      <div>
        <button onClick={uploadUsers}>Upload Many</button>
      </div>

      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) setProfile(e.target.files[0]);
          }}
          className="border p-2 rounded"
        />
      </div>

      <div>
        <input
          placeholder="View profile"
          value={profileQuery}
          onChange={(e) => setProfileQuery(e.target.value)}
        />
        <button onClick={() => setProfileView(true)}>View User</button>
      </div>

      {profileView && <UserProfile userId={profileQuery} />}
    </>
  );
}
