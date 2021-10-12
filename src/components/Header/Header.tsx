import React, {Dispatch, SetStateAction} from 'react'
import './Header.css'
import {Chat} from "../../types/utils";

type HeaderProps = {
  title?: string
  chats: Chat[]
  setChats: Dispatch<SetStateAction<Chat[]>>
}

const Header: React.FC<HeaderProps> = ({title, chats, setChats}) => {
  
  const handleAddChat = () => {
    const newChat: Chat = {
      groupName: 'New Group',
      users: []
    }
    setChats([...chats, newChat])
  }
  
  return (
    <div className={'header'}>
      {title || 'Header Here'}
      <button onClick={handleAddChat}>{'Add Chat'}</button>
    </div>
  )
}

export default Header