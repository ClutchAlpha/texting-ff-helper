import {atom, DefaultValue, selector} from "recoil";
import {recoilKeys} from "../constants/recoil";
import {Chat} from "../types/utils";

export const chatsState = atom<Chat[]>({
  key: recoilKeys.chatsState,
  default: [],
})

export const numberOfChats = selector<number>({
  key: recoilKeys.numberOfChats,
  get: ({get}) => {
    const chats = get(chatsState)
    return chats.length
  }
})

export const updateIndividualChatSelector = selector<Chat[]>({
  key: recoilKeys.updateIndividualChatSelector,
  get: ({get}) => {
    return get(chatsState)
  },
  set: ({set, get}, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(chatsState, newValue)
    } else {
      const currentChats = get(chatsState)
      const targetChat = newValue[0]
      const indexOfNewChat = currentChats.findIndex(x => x.groupName === targetChat.groupName)
      set(chatsState,
        [
          ...currentChats.slice(0, indexOfNewChat),
          targetChat,
          ...currentChats.slice(indexOfNewChat + 1)
        ])
    }
    
  }
})