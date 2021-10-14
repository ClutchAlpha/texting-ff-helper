import {ApplicationUser, Chat, User} from "../types/utils";
import {pbkdf2Sync} from 'crypto'

const MONGO_BASE_URL = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/text-ff-backend-forai/service/data-retrieval/incoming_webhook'

const makePostRequestToMongo = async (endpoint: string, bodyParams: Record<string, unknown>) => {
  const response = await fetch(
    `${MONGO_BASE_URL}/${endpoint}`,
    {
      method: 'POST',
      body: JSON.stringify({
        ...bodyParams
      })
    }
  )
  return await response.json()
}

export const getChapter = async (chapterId: string, userId: string) => {
  if (chapterId && userId) {
    const responseJson = await makePostRequestToMongo(
      'get-chapter',
      {chapterId, userId}
    )
    return responseJson.chapters || []
  }
}

export const getChaptersForUser = async (userId: string) => {
  if (userId) {
    return await makePostRequestToMongo(
      'get-chapters-for-user',
      {userId}
    )
  }
}

export const postChapter = async (chapterId: string, appUser: ApplicationUser, users: User[], chats: Chat[]) => {
  if (chapterId && users.length) {
    return makePostRequestToMongo(
      'post-chapter',
      {
        chapterId,
        userId: appUser._id.$oid,
        users,
        chats
      }
    )
  }
}

export const getUser = async (userName: string) => {
  if (userName) {
    return makePostRequestToMongo(
      'get-user',
      {userName}
    )
  }
}

export const hashPassword = (userName: string, password: string) => {
  return pbkdf2Sync(password, `${userName}ff`, 100, 32, 'sha512')
    .toString('hex')
}

export const postUser = async (userName: string, password: string) => {
  if (userName && password) {
    const passwordHash = hashPassword(userName, password)
    return makePostRequestToMongo(
      'post-user',
      {userName, passwordHash}
    )
  }
}

