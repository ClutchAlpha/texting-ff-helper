import React, {useEffect, useRef, useState} from 'react'
import './SingleChat.css'
import {Chat, User} from "../../types/utils";
import MessageRow from "./MessageRow";
import SingleChatInputs from "./SingleChatInputs";
import SingleChatHeader from "./SingleChatHeader";

type SingleChatProps = {
  chat: Chat
}

const SingleChat: React.FC<SingleChatProps> = ({chat}) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(chat.users[0])
  
  const messagesEndRef = useRef<null | HTMLDivElement>(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
  }
  
  useEffect(scrollToBottom, [chat.messages.length]);
  
  return (
    <div className={'singleChat'}>
      <SingleChatHeader
        chat={chat}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
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
      <SingleChatInputs
        chat={chat}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </div>
  )
}

export default SingleChat