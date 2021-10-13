export type Chat = {
  groupName: string;
  users: User[];
  creator: User;
  messages: Message[]
}

export type User = {
  name: string;
}

export type Message = {
  text: string
  sender?: User
}

export type ApplicationUser = {
  _id: string
  userName: string
}