import React from 'react'
import Header from "./Header/Header";
import BasePage from "./BasePage/BasePage";
import Footer from "./Footer/Footer";

const AuthenticatedPage: React.FC = () => {
  return (
    <>
      <Header title={'Texing FF Helper'} />
      <BasePage/>
      <Footer title={'Created by Yours Truly'}/>
    </>
  )
}

export default AuthenticatedPage