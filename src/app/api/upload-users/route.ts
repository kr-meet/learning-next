import { NextResponse } from "next/server";
import { connectDb } from "../../../../lib/connectDb";
import User from "../../../../models/User";
import users from "../../../../data/users.json";

export async function POST() {
    const isConnected = await connectDb();

    if(!isConnected) {
        return NextResponse.json("Failed to connect to DB");
    }

    try {
        await User.insertMany(users, { ordered: false });
        return NextResponse.json("Users uploaded successfully");
    } catch (error) {
        console.log("Failed to upload users", error);
        return NextResponse.json("Failed to upload users");
    }
}