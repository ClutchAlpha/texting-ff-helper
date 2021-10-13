import React, {useState} from 'react'
import Header from "./Header/Header";
import BasePage from "./BasePage/BasePage";
import Footer from "./Footer/Footer";
import {Chat, User} from "../types/utils";

const AuthenticatedPage: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([])
  const [totalUsers, setTotalUsers] = useState<User[]>([])
  
  return (
    <>
      <Header
        title={'Texing FF Helper'}
        setChats={setChats}
        chats={chats}
        totalUsers={totalUsers}
        setTotalUsers={setTotalUsers}
      />
      <BasePage
        chats={chats}
        totalUsers={totalUsers}
      />
      <Footer title={'Created by Yours Truly'}/>
    </>
  )
}

export default AuthenticatedPage