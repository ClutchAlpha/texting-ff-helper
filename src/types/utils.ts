export type Chat = {
  groupName: string;
  users: User[];
  creator: User;
  messages: Message[]
}

export type User = {
  name: string;
}

export type Chapter = {
  _id: string
  chapterId: string
  author: string
  users: User[]
  chats: Chat[]
}

export type Message = {
  text: string
  sender?: User
}

export type ApplicationUser = {
  _id: {
    '$oid': string
  }
  userName: string
  passwordHash: string
}