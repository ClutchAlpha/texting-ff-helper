import React, {useState} from 'react';
import './App.css';
import {ApplicationUser } from "../types/utils";
import {useFetchUserData} from "../hooks/useFetchUserData";
import AuthenticatedPage from "./AuthenticatedPage";
import UnauthenticatedPage from "./UnauthenticatedPage/UnauthenticatedPage";

function App() {
  
  const [appUser, setAppUser] = useState<ApplicationUser>()
  const {data} = useFetchUserData(appUser)
  
  return (
    <div className={'App'}>
      {
        data?.isAuthenticated
          ? <AuthenticatedPage/>
          : <UnauthenticatedPage setAppUser={setAppUser}/>
      }
    </div>
  );
}

export default App;
