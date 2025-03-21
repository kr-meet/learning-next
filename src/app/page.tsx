'use client'

import { uploadUserDetails } from "./utils/uploadUserDetails";

export default function App() {

  return (
    <>
      <h1>Connecting Next App with MongoDB</h1>
      <button onClick={uploadUserDetails}>Upload User Details</button>
    </>
  );
}
