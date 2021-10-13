import {atom, selector} from "recoil";
import {recoilKeys} from "../constants/recoil";
import {Chat} from "../types/utils";

export const chatsState = atom<Chat[]>({
  key: recoilKeys.chatsState,
  default: []
})

export const numberOfChats = selector<number>({
  key: recoilKeys.numberOfChats,
  get: ({get}) => {
    const chats = get(chatsState)
    return chats.length
  }
})
