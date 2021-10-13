import React from 'react';
import './App.css';
import AuthenticatedPage from "./AuthenticatedPage";
import UnauthenticatedPage from "./UnauthenticatedPage/UnauthenticatedPage";
import {useRecoilState} from "recoil";
import {appUserState} from "../recoil/appUser";

function App() {
  
  const [appUser] = useRecoilState(appUserState)
  
  return (
    <div className={'App'}>
      {
        appUser
          ? <AuthenticatedPage/>
          : <UnauthenticatedPage/>
      }
    </div>
  );
}

export default App;
