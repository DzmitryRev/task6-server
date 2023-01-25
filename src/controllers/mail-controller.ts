import { NextFunction, Request } from "express";
import MailService from "../services/MailService";
import events from "events";
import {
  IGetAllUserNamesRes,
  IGetUserMessagesReq,
  IGetUserMessagesRes,
  ISendMessagesReq,
  ISendMessagesRes,
} from "./types/mail-controller-types";

const emitter = new events.EventEmitter();
class UserController {
  async getUserMessages(req: IGetUserMessagesReq, res: IGetUserMessagesRes, next: NextFunction) {
    try {
      const { userName } = req.params;
      const user = await MailService.getUserMessages(userName);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }
  async getAllUserNames(req: Request, res: IGetAllUserNamesRes, next: NextFunction) {
    try {
      const names = await MailService.getAllUsers();
      return res.json(names.map((item) => item.name));
    } catch (e) {
      next(e);
    }
  }

  async sendMessage(req: ISendMessagesReq, res: ISendMessagesRes, next: NextFunction) {
    try {
      const { recipient, message } = req.body;
      if (!message.author || !message.body || !message.subject || !recipient) {
        throw new Error("Error");
      }
      const messageRes = await MailService.sendMessage(recipient, message);
      return res.json(messageRes);
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();
