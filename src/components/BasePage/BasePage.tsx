import React from 'react'
import './BasePage.css'
import DisplaySection from "../DisplaySection/DisplaySection";
import ChatPages from "../ChatPages/ChatPages";

type BasePageProps = {
  title?: string
}

const BasePage: React.FC<BasePageProps> = ({title}) => {
  return (
    <div className={'basePage'}>
      <DisplaySection />
      <ChatPages />
    </div>
  )
}

export default BasePage