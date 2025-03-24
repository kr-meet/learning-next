import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/connectDb";
import User from "@/models/User";

export async function POST(req: NextRequest) {

    const isConnected = await connectDb();
    if (!isConnected) {
        return NextResponse.json("Failed to connect to DB", { status: 500 });
    }

    const userData = await req.formData();
    const userId = userData.get("id");
    const profilePhoto = userData.get("profilePhoto");

    if (!userId) {
        return NextResponse.json("Error: userId is required", { status: 400 });
    }

    const existingUser = await User.findOne({ id: userId });
    if (existingUser) {
        console.log(existingUser);
        return NextResponse.json("User already exists");
    }

    if(profilePhoto && profilePhoto.size > 16 * 1024 * 1024) {
        return NextResponse.json("Error: profilePhoto size should be less than 16MB", { status: 400 });
    }

    let profilePhotoData = null;

    if (profilePhoto && typeof profilePhoto === "object") {
        const buffer = await profilePhoto.arrayBuffer();
        profilePhotoData = Buffer.from(buffer);
    }

    try {
        await User.create({ id: userId, profilePhoto: profilePhotoData, });
        return NextResponse.json("User uploaded successfully");
    } catch (error) {
        console.error("Failed to upload users", error);
        return NextResponse.json(
            { error: "Failed to upload users"},
            { status: 500 }
        );
    }
}
