import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import BasePage from "./BasePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <BasePage/>
      <Footer/>
    </div>
  );
}

export default App;
