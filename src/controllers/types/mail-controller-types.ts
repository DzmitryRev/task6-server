import { Request, Response } from "express";
import { Document, Types } from "mongoose";
import { IMessage } from "../../models/message-model";
import { IUser } from "../../models/user-model";

export type IGetUserMessagesReq = Request<{ userName: string }>;

export type IGetUserMessagesRes = Response<{
  name: string;
  messages: IMessage[];
}>;
export type IUpdateMessagesReq = IGetUserMessagesReq;

export type IUpdateMessagesRes = Response<{
  messages: IMessage[];
}>;

export type ISendMessagesReq = Request<{}, {}, { recipient: string; message: IMessage }>;

export type ISendMessagesRes = Response<{
  message: IMessage;
}>;
