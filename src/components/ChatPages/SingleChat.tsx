import React from 'react'
import './SingleChat.css'
import {Chat, User} from "../../types/utils";
import UserSelect from "./UserSelect";

type SingleChatProps = {
  chat: Chat
  totalUsers: User[]
}

const SingleChat: React.FC<SingleChatProps> = ({chat, totalUsers}) => {
  return (
    <div className={'singleChat'}>
      <div className={'groupName'}>
        {chat.groupName}
      </div>
      <div className={'userNames'}>
        {
          chat.users.map(x => <div key={x.name}>{` - ${x.name}`}</div>)
        }
      </div>
      <div className={'chatInputWrapper'}>
        <input
          placeholder={'Text Goes Here'}
        />
        <UserSelect chatUsers={chat.users}/>
      </div>
    </div>
  )
}

export default SingleChat