import React from 'react'
import './Header.css'
import AddUserDialog from "./AddUserDialog";
import AddChatDialog from "./AddChatDialog";
import UserListModal from "./UserListModal";
import LoadDataDialog from "./LoadDataDialog";
import SaveDataDialog from "./SaveDataDialog";

type HeaderProps = {
  title?: string
}

const Header: React.FC<HeaderProps> = ({
                                         title
                                       }) => {
  
  return (
    <div className={'header'}>
      {title || 'Header Here'}
      <AddChatDialog />
      <AddUserDialog />
      <UserListModal />
      <LoadDataDialog />
      <SaveDataDialog />
    </div>
  )
}

export default Header