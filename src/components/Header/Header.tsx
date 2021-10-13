import React, {Dispatch, SetStateAction, useState} from 'react'
import './Header.css'
import {Chat, User} from "../../types/utils";
import AddUserDialog from "./AddUserDialog";
import AddChatDialog from "./AddChatDialog";

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
  
  const [userListModalOpen, setUserListModalOpen] = useState<boolean>(false)

  return (
    <div className={'header'}>
      {title || 'Header Here'}
      <AddChatDialog
        chats={chats}
        setChats={setChats}
        totalUsers={totalUsers}
      />
      <AddUserDialog
        totalUsers={totalUsers}
        setTotalUsers={setTotalUsers}
      />
    </div>
  )
}

export default Header