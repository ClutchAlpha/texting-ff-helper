import React, {Dispatch, SetStateAction} from 'react'
import './Header.css'
import {Chat, User} from "../../types/utils";

type HeaderProps = {
  title?: string
  chats: Chat[]
  setChats: Dispatch<SetStateAction<Chat[]>>
  totalUsers: User[]
  setTotalUsers: Dispatch<SetStateAction<User[]>>
}

const Header: React.FC<HeaderProps> = ({
                                         title,
                                         chats,
                                         setChats,
                                         totalUsers,
                                         setTotalUsers
                                       }) => {
  
  const handleAddUser = () => {
    const newUser: User = {
      name: `User${Math.floor(Math.random() * 1000)}`
    }
    
    setTotalUsers([...totalUsers, newUser])
  }
  
  const handleAddChat = () => {
    const newChat: Chat = {
      groupName: 'New Group',
      users: [...totalUsers]
    }
    setChats([...chats, newChat])
  }
  
  return (
    <div className={'header'}>
      {title || 'Header Here'}
      <button onClick={handleAddChat}>{'Add Chat'}</button>
      <button onClick={handleAddUser}>{'Add User'}</button>
    </div>
  )
}

export default Header