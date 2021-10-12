import React, {useState} from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BasePage from "./BasePage/BasePage";
import {Chat, User} from "../types/utils";

function App() {
  
  const [chats, setChats] = useState<Chat[]>([])
  const [totalUsers, setTotalUsers] = useState<User[]>([])
  
  return (
    <div className={'App'}>
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
    </div>
  );
}

export default App;
