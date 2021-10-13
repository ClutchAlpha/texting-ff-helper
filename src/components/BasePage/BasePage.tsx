import React from 'react'
import './BasePage.css'
import DisplaySection from "../DisplaySection/DisplaySection";
import ChatPages from "../ChatPages/ChatPages";

const BasePage: React.FC = () => {
  return (
    <div className={'basePage'}>
      <DisplaySection />
      <ChatPages/>
    </div>
  )
}

export default BasePage