import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../lib/connectDb";
import User from "../../../../models/User";

export async function POST(req: NextRequest) {

    const isConnected = await connectDb();
    if (!isConnected) {
        return NextResponse.json("Failed to connect to DB", { status: 500 });
    }

    const { userId } = await req.json();
    if (!userId) {
        return NextResponse.json("Error: userId is required", { status: 400 });
    }

    const existingUser = await User.findOne({ id: userId });
    if (existingUser) {
        return NextResponse.json("User already exists");
    }

    try {
        await User.create({ id: userId });
        return NextResponse.json("User uploaded successfully");
    } catch (error) {
        console.error("Failed to upload users", error);
        return NextResponse.json(
            { error: "Failed to upload users"},
            { status: 500 }
        );
    }
}
