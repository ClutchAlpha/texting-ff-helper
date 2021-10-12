import React from 'react'
import './ChatPages.css'
import {Chat, User} from "../../types/utils";
import SingleChat from "./SingleChat";

type ChatPagesProps = {
  chats: Chat[],
  totalUsers: User[]
}

const ChatPages: React.FC<ChatPagesProps> = ({chats, totalUsers}) => {
  return (
    <div className={'chatPages'}>
      {
        chats.length > 0
          ? chats.map(chat => <SingleChat chat={chat} totalUsers={totalUsers}/>)
          : 'No Chats Available'
      }
    </div>
  )
}

export default ChatPages