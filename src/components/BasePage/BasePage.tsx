import React from 'react'
import './BasePage.css'
import DisplaySection from "../DisplaySection/DisplaySection";
import ChatPages from "../ChatPages/ChatPages";
import {Chat} from "../../types/utils";

type BasePageProps = {
  chats: Chat[]
}

const BasePage: React.FC<BasePageProps> = ({chats}) => {
  return (
    <div className={'basePage'}>
      <DisplaySection />
      <ChatPages chats={chats}/>
    </div>
  )
}

export default BasePage