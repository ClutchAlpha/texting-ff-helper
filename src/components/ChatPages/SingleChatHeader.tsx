import React, {Dispatch, SetStateAction} from 'react';
import {Chat, User} from "../../types/utils";
import ManageChatUsersDialog from "./ManageChatUsersDialog";
import './SingleChatHeader.css'

type SingleChatHeaderProps = {
  chat: Chat,
  currentUser?: User,
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>
}

const SingleChatHeader: React.FC<SingleChatHeaderProps> = ({
                                                             chat,
                                                             currentUser,
                                                             setCurrentUser
                                                           }) => {
  
  return (
    <div className={'headerWrapper'}>
      <div className={'groupName'}>
        {chat.groupName}
      </div>
      <ManageChatUsersDialog
        chat={chat}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </div>
  )
}

export default SingleChatHeader