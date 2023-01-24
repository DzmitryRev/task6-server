import { IMessage } from "../models/message-model";
import UserModel from "../models/user-model";

class MailService {
  async getUserMessages(name: string) {
    let user = await UserModel.findOne({ name });
    if (!user) {
      user = await UserModel.create({ name, messages: [] });
    }
    return { name: user.name, messages: user.messages };
  }
  async getAllUsers() {
    let userNames = await UserModel.find({}, { name: 1, _id: 0});
    return userNames;
  }
  async sendMessage(recipient: string, message: IMessage) {
    let user = await UserModel.findOne({ name: recipient });
    if (!user) {
      user = await UserModel.create({ name: recipient, messages: [] });
    }
    await UserModel.updateOne({ name: recipient }, { $push: { messages: message } });
    return { message };
  }
}

export default new MailService();
