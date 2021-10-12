import React from 'react'
import './SingleChat.css'
import {Chat} from "../../types/utils";

type SingleChatProps = {
  chat: Chat
}

const SingleChat: React.FC<SingleChatProps> = ({chat}) => {
  return (
    <div className={'singleChat'}>
      {chat.groupName}
    </div>
  )
}

export default SingleChat