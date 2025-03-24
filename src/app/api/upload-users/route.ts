import { NextResponse } from "next/server";
import { connectDb } from "../../../../lib/connectDb";
import User from "../../../../models/User";

export async function POST() {
    const isConnected = await connectDb();

    if (!isConnected) {
        return NextResponse.json("Failed to connect to DB", { status: 500 });
    }

    const users = [];
    for(let i = 1; i <= 500000; i++) {
        users.push({id : "user"+i});
    }

    try {
        await User.insertMany(users, { ordered: false });
        return NextResponse.json("Users uploaded successfully");
    } catch (error) {
        console.error("Failed to upload users", error);
        return NextResponse.json(
            { error: "Failed to upload users"},
            { status: 500 }
        );
    }
}
