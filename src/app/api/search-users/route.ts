import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import { connectDb } from "../../../../lib/connectDb";

export async function POST(req: NextRequest) {
    const isConnected = await connectDb();
    if (!isConnected) {
        return NextResponse.json("Failed to connect to DB", { status: 500 });
    }

    const { query } = await req.json();

    if (!query || typeof query !== 'string') {
        return NextResponse.json("Error: userId is required", { status: 400 });
    }

    try {
        const users = await User.find({
            id: { $regex: query, $options: "i" }
        });

        if (!users.length) {
            return NextResponse.json({ message: "No users found" }, {status: 200});
        }

        return NextResponse.json(users, {status: 200});
    } catch (error) {
        console.error("Search error:", error);
        return NextResponse.json({ error: "Failed to search users" } , { status: 500 });
    }
}
