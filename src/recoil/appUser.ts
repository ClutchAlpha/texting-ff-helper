import {atom} from "recoil";
import {recoilKeys} from "../constants/recoil";
import {ApplicationUser} from "../types/utils";

export const appUserState = atom<ApplicationUser | undefined>({
  key: recoilKeys.appUserState,
  default: undefined
})