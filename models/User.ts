import mongoose, { Schema } from "mongoose";

interface IUser {
    name: string;
    language: string;
    id: string;
    bio: string;
    version: number;
}

const UserSchema: Schema = new Schema<IUser>({
    name: { type: String, required: true },
    language: { type: String, required: true },
    id: { type: String, required: true},
    bio: { type: String, required: true },
    version: { type: Number, required: true }
})

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);