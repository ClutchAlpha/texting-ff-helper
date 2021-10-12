import React, {useState} from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BasePage from "./BasePage/BasePage";
import {Chat} from "../types/utils";

function App() {
  
  const [chats, setChats] = useState<Chat[]>([])
  
  return (
    <div className={'App'}>
      <Header
        title={'Texing FF Helper'}
        setChats={setChats}
        chats={chats}
      />
      <BasePage
        chats={chats}
      />
      <Footer title={'Created by Yours Truly'}/>
    </div>
  );
}

export default App;
