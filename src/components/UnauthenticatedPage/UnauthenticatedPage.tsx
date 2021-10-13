import React, {Dispatch, SetStateAction, useState} from 'react'
import './UnauthenticatedPage.css'
import {ApplicationUser} from "../../types/utils";
import LoginSignupButtons from "./LoginSignupButtons";
import LoginPanelHeader from "./LoginPanelHeader";
import LoginSignupFormFields from "./LoginSignupFormFields";
import {getUser, hashPassword, postUser} from "../../utils/mongoUtils";
import {appUserState} from "../../recoil/appUser";
import {useRecoilState} from "recoil";

export type FormState = 'login' | 'signup'

const UnauthenticatedPage: React.FC = () => {
  
  const [appUser, setAltAppUser] = useRecoilState(appUserState)
  const [formState, setFormState] = useState<FormState>('login')
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verifyPassword, setVerifyPassword] = useState<string>('')
  
  const clearFields = () => {
    setUserName('')
    setPassword('')
    setVerifyPassword('')
  }
  
  const attemptSignup = async () => {
    if (userName && password){
      const checkUserResponse = await getUser(userName)
      const users = checkUserResponse.users
      if (users.length === 0){
        await postUser(userName, password)
        setAltAppUser({userName, _id: 'someId'})
      }
    }
    clearFields()
  }
  
  const attemptLogin = async () => {
    const checkUserResponse = await getUser(userName)
    const users = checkUserResponse.users
    if (users.length > 0) {
      const targetUser = users[0]
      if (hashPassword(userName, password) === targetUser.passwordHash) {
        setAltAppUser({userName, _id: 'someId'})
      }
    }
    clearFields()
  }
  
  const handleSubmit = async () => {
    if (formState === 'login') {
      return await attemptLogin()
    } else {
      return await attemptSignup()
    }
  }
  
  const userNameValid = userName?.match(/^[A-Za-z]\w{5,25}$/) !== null
  const passwordValid = password?.match(/^[A-Za-z]\w{5,25}$/) !== null
  const verifyValid = password === verifyPassword
  
  const userNamePasswordComplete = userNameValid && passwordValid
  
  return (
    <div className={'pageBackground'}>
      <div className={'loginSignupForm'}>
        <LoginPanelHeader/>
        <LoginSignupFormFields
          userName={userName}
          password={password}
          verifyPassword={verifyPassword}
          userNameValid={userNameValid}
          passwordValid={passwordValid}
          verifyValid={verifyValid}
          setUserName={setUserName}
          setPassword={setPassword}
          setVerifyPassword={setVerifyPassword}
          formState={formState}
        />
        <LoginSignupButtons
          submitEnabled={
            formState === 'login'
              ? userNamePasswordComplete
              : userNamePasswordComplete && verifyValid
          }
          formState={formState}
          setFormState={setFormState}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default UnauthenticatedPage