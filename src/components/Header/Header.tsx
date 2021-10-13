import React, {Dispatch, SetStateAction} from 'react'
import './Header.css'
import {Chat, User} from "../../types/utils";
import AddUserDialog from "./AddUserDialog";
import AddChatDialog from "./AddChatDialog";
import UserListModal from "./UserListModal";
import LoadDataDialog from "./LoadDataDialog";

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
      <UserListModal
        totalUsers={totalUsers}
        chats={chats}
      />
      <LoadDataDialog
        setChats={setChats}
        setTotalUsers={setTotalUsers}
      />
    </div>
  )
}

export default Header