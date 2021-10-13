import React, {Dispatch, SetStateAction} from 'react'
import {Button, ButtonProps, styled, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {FormState} from "./UnauthenticatedPage";
import './LoginSignupButtons.css'

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#8B0000',
  '&:hover': {
    backgroundColor: '#8B0000',
  },
}));

type LoginSignupButtonsProps = {
  formState: FormState
  setFormState: Dispatch<SetStateAction<FormState>>
  handleSubmit: () => void,
  submitEnabled: boolean
}

const LoginSignupButtons: React.FC<LoginSignupButtonsProps> = ({
                                                                 formState,
                                                                 setFormState,
                                                                 submitEnabled,
                                                                 handleSubmit
                                                               }) => {
  
  const handleUpdateFormState = (
    event: React.MouseEvent<HTMLElement>,
    newFormState: FormState,
  ) => {
    setFormState(newFormState);
  };
  return (
    <div className={'buttonWrapper'}>
      <ToggleButtonGroup
        value={formState}
        exclusive
        onChange={handleUpdateFormState}
        aria-label="text alignment"
      >
        <ToggleButton value="login" aria-label="left aligned">
          {'Login'}
        </ToggleButton>
        <ToggleButton value="signup" aria-label="centered">
          {'Sign Up'}
        </ToggleButton>
      </ToggleButtonGroup>
      <ColorButton
        variant="contained"
        onClick={handleSubmit}
        disabled={!submitEnabled}
      >
        {'Submit'}
      </ColorButton>
    </div>
  )
}

export default LoginSignupButtons