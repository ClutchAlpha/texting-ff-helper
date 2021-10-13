import React from 'react'
import './MessageRow.css'
import {Message, User} from "../../types/utils";
import classNames from "classnames";

type MessageRowProps = {
  message: Message
  index: number
  chatUsers: User[]
  groupName: string
}

const MessageRow: React.FC<MessageRowProps> = ({message, index, chatUsers, groupName}) => {
  const leftOrRight = chatUsers.findIndex(user => user.name === message.sender?.name) % 2 === 0
  const senderPrefix = message.sender?.name ? `${message.sender.name}: ` : ''
  let alignment
  
  if (!message.sender) {
    alignment = 'centerMessage'
  } else {
    alignment = leftOrRight ? 'leftMessage' : 'rightMessage'
  }
  
  return (
    <div key={`${groupName}-${index}`} className={classNames('chatMessage', alignment)}>
      <p className={alignment === 'centerMessage' ? 'special' : ''}>
      {senderPrefix && <span className={'senderName'}>{`${senderPrefix}`}</span>}
      {message.text}
      </p>
    </div>
  );
}

export default MessageRow