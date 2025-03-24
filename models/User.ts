import mongoose, { Schema } from "mongoose";

interface IUser {
    id: string;
}

const UserSchema: Schema = new Schema<IUser>({
    id: { type: String, required: true, unique: true},
})

UserSchema.index({id: "text"});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);