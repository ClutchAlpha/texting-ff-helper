import {atom, selector} from 'recoil'
import {recoilKeys} from "../constants/recoil";
import {User} from "../types/utils";

export const usersState = atom<User[]>({
  key: recoilKeys.usersState,
  default: []
})

export const numberOfUsers = selector<number>({
  key: recoilKeys.numberOfUsers,
  get: ({get}) => {
    const users = get(usersState)
    return users.length
  }
})