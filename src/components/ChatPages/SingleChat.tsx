import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import './SingleChat.css'
import {Chat, User} from "../../types/utils";
import UserSelect from "./UserSelect";
import {OutlinedInput} from "@mui/material";
import MessageRow from "./MessageRow";
import { useSetRecoilState} from "recoil";
import { updateIndividualChatSelector} from "../../recoil/chats";

type SingleChatProps = {
  chat: Chat
}

const SingleChat: React.FC<SingleChatProps> = ({chat}) => {
  
  const [currentUser, setCurrentUser] = useState<User>(chat.users[0])
  const [currentMessage, setCurrentMessage] = useState<string>('')
  const updateIndividualChat = useSetRecoilState(updateIndividualChatSelector)
  
  const handleUpdateMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value)
  }
  
  const handleSubmit = () => {
    updateIndividualChat(
      [{
        ...chat,
        messages: [
          ...chat.messages,
          {
            text: currentMessage,
            sender: currentUser
          }
        ]
      }]
    )
    
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
      <div className={'chatInputWrapper'}>
        <OutlinedInput
          placeholder="Message Here"
          value={currentMessage}
          onChange={handleUpdateMessage}
          onKeyPress={(ev) => {
            if (ev.key === 'Enter' && currentMessage) {
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