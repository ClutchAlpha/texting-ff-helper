import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'
import {OutlinedInput} from "@mui/material";
import UserSelect from "./UserSelect";
import './SingleChatInputs.css'
import {Chat, Message, User} from "../../types/utils";
import {useSetRecoilState} from "recoil";
import {updateIndividualChatSelector} from "../../recoil/chats";

type SingleChatInputsProps = {
  chat: Chat,
  currentUser?: User,
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>
}

const SingleChatInputs: React.FC<SingleChatInputsProps> = ({
                                                             chat,
                                                             currentUser,
                                                             setCurrentUser
                                                           }) => {
  const [currentMessage, setCurrentMessage] = useState<string>('')
  const updateIndividualChat = useSetRecoilState(updateIndividualChatSelector)
  
  const handleUpdateMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value)
  }
  
  const handleSubmit = () => {
    const newMessage: Message = {text: currentMessage}
    if (currentUser) {
      newMessage.sender = currentUser
    }
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
      {
        chat.users.length > 0
          ? <>
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
          </>
          : <div>
            {'Add Users to revive the chat!'}
          </div>
      }
    </div>
  )
}

export default SingleChatInputs