import {Chat, User} from "./utils";

export type ChapterResponse = {
  _id: string
  chapterId: string
  author: string
  users: User[]
  chats: Chat[]
}