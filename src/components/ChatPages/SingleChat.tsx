import React from 'react'
import './SingleChat.css'
import {Chat} from "../../types/utils";

type SingleChatProps = {
  chat: Chat
}

const SingleChat: React.FC<SingleChatProps> = ({chat}) => {
  return (
    <div className={'singleChat'}>
      <div className={'groupName'}>
        {chat.groupName}
      </div>
      {
        chat.users.map(x => <div>{` - ${x.name}`}</div>)
      }
    </div>
  )
}

export default SingleChat