import {useQuery} from "react-query";
import {queryKeys, queryOptions} from "../constants/queries";
import {ApplicationUser} from "../types/utils";

const getUserData = async (userName: ApplicationUser | undefined) => {
  let currentUser = undefined
  if (userName) {
    currentUser = {userName: 'someUserName'} as ApplicationUser
  }
  
  return {
    userData: currentUser,
    isAuthenticated: currentUser !== undefined
  }
}

export const useFetchUserData = (appUser: ApplicationUser | undefined) => {
  return useQuery(
    [queryKeys.userData, appUser],
    () => getUserData(appUser),
    {
      ...queryOptions,
      enabled: !!appUser
    }
  )
}