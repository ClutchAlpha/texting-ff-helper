import { useQuery } from 'react-query'
import {ApplicationUser, Chat} from "../types/utils";
import {queryKeys, queryOptions} from "../constants/queries";

interface UseChats {
  appUser: ApplicationUser
}

const handleChats = (appUser: ApplicationUser) => {
  return {
    chats: []
  }
}

export const useChats = ({appUser}: UseChats) => {
  return useQuery<{chats: Chat[]}>(
    [queryKeys.chats, appUser],
    () => handleChats(appUser),
    {
      ...queryOptions,
      enabled: !!appUser
    }
  )
}