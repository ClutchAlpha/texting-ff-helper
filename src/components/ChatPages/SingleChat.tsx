import React, { useEffect, useRef } from 'react'
import './SingleChat.css'
import {Chat} from "../../types/utils";
import MessageRow from "./MessageRow";
import SingleChatInputs from "./SingleChatInputs";

type SingleChatProps = {
  chat: Chat
}

const SingleChat: React.FC<SingleChatProps> = ({chat}) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
  }
  
  useEffect(scrollToBottom, [chat.messages.length]);
  
  return (
    <div className={'singleChat'}>
      <div className={'groupName'}>
        {chat.groupName}
      </div>
      <div className={'chatMessages'}>
        {
          chat.messages.map((message, index) => {
            return <MessageRow
              key={index}
              message={message}
              index={index}
              chatUsers={chat.users}
              groupName={chat.groupName}
            />
          })
        }
        <div ref={messagesEndRef}/>
      </div>
      <SingleChatInputs chat={chat} />
    </div>
  )
}

export default SingleChat