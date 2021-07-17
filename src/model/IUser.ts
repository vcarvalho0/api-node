import { Schema, model } from "mongoose";

interface IUser extends Document {
  _id: number;
  nickname: string;
  description?: string;
}

const UserSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },

  nickname: {
    type: String,
    required: true
  },
});

export default model<IUser>("User", UserSchema);
