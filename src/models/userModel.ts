import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  refreshToken?: string;
}

const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: false
  }
});

const userModel = mongoose.model<IUser>("Users", userSchema);

export default userModel;