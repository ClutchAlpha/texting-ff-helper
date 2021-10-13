import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import './SingleChat.css'
import {Chat, User} from "../../types/utils";
import UserSelect from "./UserSelect";
import {OutlinedInput} from "@mui/material";

type SingleChatProps = {
  chat: Chat
  totalUsers: User[]
}

const SingleChat: React.FC<SingleChatProps> = ({chat, totalUsers}) => {
  
  const [currentUser, setCurrentUser] = useState<User>(chat.users[0])
  const [currentMessage, setCurrentMessage] = useState<string>('')
  
  const handleUpdateMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value)
  }
  
  const handleSubmit = () => {
    chat.messages = [
      ...chat.messages,
      {
        text: currentMessage,
        sender: currentUser
      }
    ]
    
    setCurrentMessage('')
  }
  
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
          chat.messages.map((x, index) => {
            const senderPrefix = x.sender?.name ? `${x.sender.name}: ` : ''
            return (
              <div key={`${chat.groupName}-${index}`} className={'chatMessage'}>
                {`${senderPrefix}${x.text}`}
              </div>
            );
          })
        }
        <div ref={messagesEndRef}/>
      </div>
      <div className={'chatInputWrapper'}>
        <OutlinedInput
          placeholder="Message Here"
          value={currentMessage}
          onChange={handleUpdateMessage}
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              handleSubmit()
              ev.preventDefault()
            }
          }}
        />
        <UserSelect
          chatUsers={chat.users}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </div>
    </div>
  )
}

export default SingleChat