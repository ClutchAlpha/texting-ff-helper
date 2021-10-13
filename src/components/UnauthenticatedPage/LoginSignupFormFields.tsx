import React, {ChangeEvent, Dispatch, SetStateAction} from 'react'
import {FormState} from './UnauthenticatedPage';
import {Grid, TextField} from '@mui/material';
import './LoginSignupFormFields.css'

type LoginSignupFormFieldsProps = {
  userNameValid: boolean
  userName: string
  setUserName: Dispatch<SetStateAction<string>>
  passwordValid: boolean
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  verifyValid: boolean
  verifyPassword: string
  setVerifyPassword: Dispatch<SetStateAction<string>>
  formState: FormState
}

const LoginSignupFormFields: React.FC<LoginSignupFormFieldsProps> = ({
                                                                       setUserName,
                                                                       userName,
                                                                       userNameValid,
                                                                       setPassword,
                                                                       password,
                                                                       passwordValid,
                                                                       setVerifyPassword,
                                                                       verifyPassword,
                                                                       verifyValid,
                                                                       formState
                                                                     }) => {
  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }
  
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  
  const handleChangeVerifyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setVerifyPassword(event.target.value)
  }
  
  return (
    <div className={'gridWrapper'}>
      <Grid container direction={'column'} spacing={2}>
        <Grid item>
          <TextField
            className={'loginSignupFormField'}
            required
            id={'outlined-required'}
            value={userName}
            label={'Required'}
            error={!userNameValid}
            helperText={userNameValid ? '' : 'Username must be alphanumeric, 5-25 characters'}
            placeholder={'Enter Username'}
            onChange={handleChangeUsername}
          />
        </Grid>
        <Grid item>
          <TextField
            className={'loginSignupFormField'}
            type={'password'}
            id={'password'}
            label={'Password'}
            value={password}
            error={!passwordValid}
            helperText={passwordValid ? '' : 'Password must be alphanumeric, 5-25 characters'}
            placeholder={'Enter Password'}
            onChange={handleChangePassword}
          />
        </Grid>
        {
          formState === 'signup' &&
          <Grid item>
            <TextField
              className={'loginSignupFormField'}
              type={'password'}
              id={'verify-password'}
              label={'Verify Password'}
              value={verifyPassword}
              error={!verifyValid}
              helperText={verifyValid ? '' : 'Password do not match'}
              placeholder={'Verify Password'}
              onChange={handleChangeVerifyPassword}
            />
          </Grid>
        }
      </Grid>
    </div>
  )
}

export default LoginSignupFormFields