type MessageModel = {
  id: number;
  content: string;
  roomId: number;
  userId: number;
};
type MessageUserModel = {
  id: number;
  content: string;
  user: User;
};
