import { User } from "./user.model";

export type MessageModel = {
  id: number;
  content: string;
  roomId: number;
  userId: number;
};
export type MessageUserModel = {
  id: number;
  content: string;
  user: User;
};
