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
  
  console.log('=====> totalUsers.length', totalUsers.length > 0)
  const addChatDisabled = totalUsers.length < 1
  console.log('=====> addChatDisabled', addChatDisabled)
  return (
    <div className={'header'}>
      {title || 'Header Here'}
      <button
        className={'addButton'}
        onClick={handleAddChat}
        disabled={addChatDisabled}
      >
        {'Add Chat'}
      </button>
      <button
        className={'addButton'}
        onClick={handleAddUser}
      >
        {'Add User'}
      </button>
    </div>
  )
}

export default Header