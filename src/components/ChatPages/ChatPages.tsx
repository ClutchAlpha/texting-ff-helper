import React from 'react'
import './ChatPages.css'
import {Chat} from "../../types/utils";
import SingleChat from "./SingleChat";

type ChatPagesProps = {
  chats: Chat[]
}

const ChatPages: React.FC<ChatPagesProps> = ({chats}) => {
  return (
    <div className={'chatPages'}>
      {
        chats.length > 0
          ? chats.map(chat => <SingleChat chat={chat}/>)
          : 'No Chats Available'
      }
    </div>
  )
}

export default ChatPages