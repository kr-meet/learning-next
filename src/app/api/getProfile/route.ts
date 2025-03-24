import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/connectDb";
import User from "@/models/User";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const isConnected = await connectDb();
    if (!isConnected) {
        return NextResponse.json("Failed to connect to DB", { status: 500 });
    }

    const user = await User.findOne({ id: userId });

    if (!user || !user.profilePhoto) {
        return NextResponse.json({ error: "Profile photo not found" }, { status: 404 });
    }

    return new NextResponse(user.profilePhoto, {
        status: 200,
        headers: {
            "Content-Type": user.profilePhotoType || "image/jpeg",
            "Cache-Control": "max-age=31536000, immutable",
        },
    });
}
