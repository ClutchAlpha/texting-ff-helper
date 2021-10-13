import React, {Dispatch, SetStateAction, useState} from 'react'
import './UnauthenticatedPage.css'
import {ApplicationUser} from "../../types/utils";
import LoginSignupButtons from "./LoginSignupButtons";
import LoginPanelHeader from "./LoginPanelHeader";
import LoginSignupFormFields from "./LoginSignupFormFields";
import {getUser, hashPassword, postUser} from "../../utils/mongoUtils";

export type FormState = 'login' | 'signup'

type UnauthenticatedPageProps = {
  setAppUser: Dispatch<SetStateAction<ApplicationUser | undefined>>
}

const UnauthenticatedPage: React.FC<UnauthenticatedPageProps> = ({setAppUser}) => {
  
  const [formState, setFormState] = useState<FormState>('login')
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verifyPassword, setVerifyPassword] = useState<string>('')
  
  const clearFields = () => {
    setUserName('')
    setPassword('')
    setVerifyPassword('')
  }
  
  const attemptSignup = () => {
    if (userName && password) {
      getUser(userName)
        .then(response => {
          return response.users.length > 0
        })
        .then(userExists => {
          if (!userExists) {
            postUser(userName, password)
              .then(response => {
                console.log(response)
              })
            setAppUser({userName})
          } else {
            clearFields()
          }
        })
    }
    return true
  }
  
  const attemptLogin = () => {
    getUser(userName)
      .then(response => {
        return [response.users.length > 0, response.users]
      })
      .then(([userExists, users]) => {
        if (userExists){
          if (hashPassword(userName, password) === users[0].passwordHash){
            setAppUser({userName})
          } else {
            clearFields()
          }
        } else {
          clearFields()
        }
      })
  }
  
  const handleSubmit = () => {
    if (formState === 'login') {
      return attemptLogin()
    } else {
      return attemptSignup()
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