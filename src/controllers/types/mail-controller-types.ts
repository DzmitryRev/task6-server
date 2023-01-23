import { Request, Response } from "express";
import { Document, Types } from "mongoose";
import { IMessage } from "../../models/message-model";
import { IUser } from "../../models/user-model";

export type IGetUserMessagesReq = Request<{}, {}, { name: string }>;

export type IGetUserMessagesRes = Response<{
  name: string;
  messages: IMessage[];
}>;

export type ISendMessagesReq = Request<{}, {}, { name: string; message: IMessage }>;

export type ISendMessagesRes = Response<{
  message: IMessage;
}>;
