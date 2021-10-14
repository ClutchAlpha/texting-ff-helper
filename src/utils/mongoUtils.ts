import {ApplicationUser, Chat, User} from "../types/utils";
import {pbkdf2Sync} from 'crypto'

const MONGO_BASE_URL = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/text-ff-backend-forai/service/data-retrieval/incoming_webhook'

export const getChapter = async (chapterId: string, userId: string) => {
  if (chapterId && userId) {
    const response = await fetch(
      `${MONGO_BASE_URL}/get-chapter`,
      {
        method: 'POST',
        body: JSON.stringify({
          chapterId,
          userId
        })
      }
    )
    const json = await response.json()
    return json.chapters || []
  }
}

export const postChapter = async (chapterId: string, appUser: ApplicationUser, users: User[], chats: Chat[]) => {
  if (chapterId && users.length){
    const response = await fetch(
      `${MONGO_BASE_URL}/post-chapter`,
      {
        method: 'POST',
        body: JSON.stringify({
          chapterId,
          userId: appUser._id.$oid,
          users,
          chats
        })
      }
    )
    return await response.json()
  }
}

export const getUser = async (userName: string) => {
  if (userName){
    const response = await fetch(
      `${MONGO_BASE_URL}/get-user`,
      {
        method: 'POST',
        body: JSON.stringify({
          userName
        })
      }
    )
    return await response.json()
  }
}

export const hashPassword = (userName: string, password: string) => {
  return pbkdf2Sync(password, `${userName}ff`, 100, 32, 'sha512')
    .toString('hex')
}

export const postUser = async (userName: string, password: string) => {
  if (userName && password){
    const passwordHash = hashPassword(userName, password)
    
    const response = await fetch(
      `${MONGO_BASE_URL}/post-user`,
      {
        method: 'POST',
        body: JSON.stringify({
          userName,
          passwordHash
        })
      }
    )

    return await response.json()
  }
}