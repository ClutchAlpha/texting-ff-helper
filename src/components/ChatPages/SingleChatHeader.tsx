import React from 'react';
import {Chat, User} from "../../types/utils";
import ManageChatUsersDialog from "./ManageChatUsersDialog";
import './SingleChatHeader.css'

type SingleChatHeaderProps = {
  chat: Chat,
  currentUser: User
}

const SingleChatHeader: React.FC<SingleChatHeaderProps> = ({
                                                             chat,
                                                             currentUser
                                                           }) => {
  
  
  return (
    <div className={'headerWrapper'}>
      <div className={'groupName'}>
        {chat.groupName}
      </div>
      <ManageChatUsersDialog
        chat={chat}
        currentUser={currentUser}
      />
    </div>
  )
}

export default SingleChatHeader