import React, {ChangeEvent, useState} from 'react'
import {OutlinedInput} from "@mui/material";
import UserSelect from "./UserSelect";
import './SingleChatInputs.css'
import {Chat, User} from "../../types/utils";
import {useSetRecoilState} from "recoil";
import {updateIndividualChatSelector} from "../../recoil/chats";

type SingleChatInputsProps = {
  chat: Chat
}

const SingleChatInputs: React.FC<SingleChatInputsProps> = ({chat}) => {
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
  
  return (
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
  )
}

export default SingleChatInputs