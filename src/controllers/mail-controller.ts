import { NextFunction } from "express";
import MailService from "../services/MailService";
import { IGetUserMessagesReq, IGetUserMessagesRes, ISendMessagesReq, ISendMessagesRes } from "./types/mail-controller-types";

class UserController {
  async getUsers(req: IGetUserMessagesReq, res: IGetUserMessagesRes, next: NextFunction) {
    try {
      const { name } = req.body;
      const users = await MailService.getUserMessages(name);
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
  async sendMessage(req: ISendMessagesReq, res: ISendMessagesRes, next: NextFunction) {
    try {
      const { name, message } = req.body;
      const messageRes = await MailService.sendMessage(name, message);
      return res.json(messageRes);
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();
