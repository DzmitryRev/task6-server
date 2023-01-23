import { Schema, model } from "mongoose";

export interface IMessage {
  author: string;
  message: string;
  subject: string;
}

export const MessageSchema = new Schema<IMessage>({
  author: { type: String, required: true },
  message: { type: String, required: true },
  subject: { type: String, required: true },
});

export default model("Message", MessageSchema);
