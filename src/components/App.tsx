import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BasePage from "./BasePage/BasePage";

function App() {
  return (
    <div className={'App'}>
      <Header title={'Texing FF Helper'}/>
      <BasePage title={'Coming Soon!'}/>
      <Footer title={'Created by Yours Truly'}/>
    </div>
  );
}

export default App;
