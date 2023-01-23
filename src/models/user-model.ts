import { Schema, model } from "mongoose";
import { IMessage, MessageSchema } from "./message-model";

export interface IUser {
  name: string;
  messages: IMessage[];
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  messages: [MessageSchema],
});

export default model("User", UserSchema);
