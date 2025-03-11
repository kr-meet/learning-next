'use client'

import { useEffect } from "react";
import { connectDb } from "./dbConnector/connectDb";

export default function App() {

  useEffect(() => {
    connectDb();
  }, [])

  return (
    <h1>Connecting Next App with MongoDB</h1>
  );
}
