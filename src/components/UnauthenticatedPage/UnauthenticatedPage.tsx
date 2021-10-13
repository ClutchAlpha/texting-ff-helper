import React, {Dispatch, SetStateAction, useState} from 'react'
import './UnauthenticatedPage.css'
import {ApplicationUser} from "../../types/utils";
import LoginSignupButtons from "./LoginSignupButtons";
import LoginPanelHeader from "./LoginPanelHeader";
import LoginSignupFormFields from "./LoginSignupFormFields";

export type FormState = 'login' | 'signup'

type UnauthenticatedPageProps = {
  setAppUser: Dispatch<SetStateAction<ApplicationUser | undefined>>
}

const UnauthenticatedPage: React.FC<UnauthenticatedPageProps> = ({setAppUser}) => {
  
  const [formState, setFormState] = useState<FormState>('login')
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verifyPassword, setVerifyPassword] = useState<string>('')
  
  return (
    <div className={'pageBackground'}>
      <div className={'loginSignupForm'}>
        <LoginPanelHeader/>
        <LoginSignupFormFields
          username={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          verifyPassword={verifyPassword}
          setVerifyPassword={setVerifyPassword}
          formState={formState}
        />
        <LoginSignupButtons
          formState={formState}
          setFormState={setFormState}
        />
      </div>
    </div>
  )
}

export default UnauthenticatedPage