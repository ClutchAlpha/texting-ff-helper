const MONGO_BASE_URL = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/text-ff-backend-forai/service/data-retrieval/incoming_webhook'

export const getChapter = async (chapterId: string) => {
  if (chapterId) {
    const response = await fetch(
      `${MONGO_BASE_URL}/get-chapter`,
      {
        method: 'POST',
        body: JSON.stringify({
          chapterId
        })
      }
    )
    const json = await response.json()
    return json.chapters || []
  }
}