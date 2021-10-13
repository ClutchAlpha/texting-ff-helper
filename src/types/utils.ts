export type Chat = {
  groupName: string;
  users: User[];
  creator: User;
}

export type User = {
  name: string;
}