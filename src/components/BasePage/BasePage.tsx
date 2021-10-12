import React from 'react'
import './BasePage.css'
import DisplaySection from "../DisplaySection/DisplaySection";
import ChatPages from "../ChatPages/ChatPages";
import {Chat, User} from "../../types/utils";

type BasePageProps = {
  chats: Chat[]
  totalUsers: User[]
}

const BasePage: React.FC<BasePageProps> = ({chats, totalUsers}) => {
  return (
    <div className={'basePage'}>
      <DisplaySection />
      <ChatPages chats={chats} totalUsers={totalUsers}/>
    </div>
  )
}

export default BasePage