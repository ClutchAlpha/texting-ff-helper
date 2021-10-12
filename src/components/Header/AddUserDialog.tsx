import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {User} from "../../types/utils";
import './AddUserDialog.css'

type AddUserDialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  totalUsers: User[]
  setTotalUsers: Dispatch<SetStateAction<User[]>>
}

const AddUserDialog: React.FC<AddUserDialogProps> = ({
                                                       open,
                                                       setOpen,
                                                       setTotalUsers,
                                                       totalUsers
                                                     }) => {
  
  const [newUserName, setNewUserName] = useState<string>('')
  
  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUserName(event.target.value)
  }
  
  const handleSubmit = () => {
    if (newUserName) {
      const newUserObject: User = {name: newUserName}
      setTotalUsers([...totalUsers, newUserObject])
    }
    setNewUserName('')
    setOpen(false)
  }
  
  return (
    <Dialog onClose={() => setOpen(false)} open={open} className={'addUserDialog'}>
      <DialogTitle>
        {'Add New User'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add a new name to update the list of total users in the story!
        </DialogContentText>
        <TextField
          onChange={handleChangeUserName}
          value={newUserName}
          placeholder={'Add New Name Here'}
          autoFocus
          margin="dense"
          id="user"
          label="User Name"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>
          {'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddUserDialog