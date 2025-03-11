import mongoose from "mongoose";

export const connectDb = async () => {
    console.log("Connecting to DB...")
    try {
        const connectionStatus = await mongoose.connect(process.env.MONGO_DB_URL as string);
        console.log("Connected to DB successfully");
        console.log((await connectionStatus.connection.listDatabases()));
    } catch (error) {
        console.log("Failed to connect DB", error);
    }
}