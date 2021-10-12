import React, {Dispatch, SetStateAction, useState} from 'react'
import './Header.css'
import {Chat, User} from "../../types/utils";
import AddUserDialog from "./AddUserDialog";

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
  
  const [userModalOpen, setUserModalOpen] = useState<boolean>(false)
  const [chatModalOpen, setChatModalOpen] = useState<boolean>(false)
  const [userListModalOpen, setUserListModalOpen] = useState<boolean>(false)

  return (
    <div className={'header'}>
      {title || 'Header Here'}
      <button
        className={'addButton'}
        onClick={() => setChatModalOpen(true)}
        disabled={totalUsers.length < 1}
      >
        {'Add Chat'}
      </button>
      <button
        className={'addButton'}
        onClick={() => setUserModalOpen(true)}
      >
        {'Add User'}
      </button>
      <AddUserDialog
        open={userModalOpen}
        setOpen={setUserModalOpen}
        totalUsers={totalUsers}
        setTotalUsers={setTotalUsers}
      />
    </div>
  )
}

export default Header