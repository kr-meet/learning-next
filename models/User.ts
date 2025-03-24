import mongoose, { Schema } from "mongoose";

interface IUser extends Document {
    id: string;
    profilePhoto: Buffer;
}

const UserSchema: Schema = new Schema<IUser>({
    id: { type: String, required: true, unique: true},
    profilePhoto: { type: Buffer, required: false },
})

UserSchema.index({id: "text"});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);