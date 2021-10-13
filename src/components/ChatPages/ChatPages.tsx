import React from 'react'
import './ChatPages.css'
import SingleChat from "./SingleChat";
import {useRecoilValue} from "recoil";
import {chatsState} from "../../recoil/chats";

const ChatPages: React.FC = () => {
  const chats = useRecoilValue(chatsState)
  
  return (
    <div className={'chatPages'}>
      {
        chats.length > 0
          ? chats.map(chat => <SingleChat key={chat.groupName} chat={chat}/>)
          : 'No Chats Available'
      }
    </div>
  )
}

export default ChatPages