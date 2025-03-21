"use server"

import mongoose, { ConnectionStates } from "mongoose";

export const connectDb = async () => {

    if(mongoose.connection.readyState === ConnectionStates.connected) {
        console.log("Already connected to DB");
        return true;
    }

    console.log("Connecting to DB...")
    try {
        await mongoose.connect(process.env.MONGO_DB_URL as string);
        console.log("Connected to DB successfully");
        return true;
    } catch (error) {
        console.log("Failed to connect DB", error);
        return false;
    }
}