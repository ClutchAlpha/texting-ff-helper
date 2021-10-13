import React, {ChangeEvent, Dispatch, SetStateAction} from 'react'
import {FormState} from './UnauthenticatedPage';
import {Grid, TextField} from '@mui/material';
import './LoginSignupFormFields.css'

type LoginSignupFormFieldsProps = {
  username: string
  setUserName: Dispatch<SetStateAction<string>>
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  verifyPassword: string
  setVerifyPassword: Dispatch<SetStateAction<string>>
  formState: FormState
}

const LoginSignupFormFields: React.FC<LoginSignupFormFieldsProps> = ({
                                                                       setUserName,
                                                                       setPassword,
                                                                       setVerifyPassword,
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
            label={'Required'}
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