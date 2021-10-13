import React, {ChangeEvent, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {User} from "../../types/utils";
import './AddUserDialog.css'
import {useRecoilState} from "recoil";
import {usersState} from "../../recoil/users";

const AddUserDialog: React.FC = () => {
  
  const [userModalOpen, setUserModalOpen] = useState<boolean>(false)
  const [newUserName, setNewUserName] = useState<string>('')
  const [totalUsers, setTotalUsers] = useRecoilState(usersState)
  
  const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUserName(event.target.value)
  }
  
  const handleSubmit = () => {
    if (newUserName) {
      const newUserObject: User = {name: newUserName}
      setTotalUsers([...totalUsers, newUserObject])
    }
    setNewUserName('')
    setUserModalOpen(false)
  }
  
  return (
    <>
      <button
        className={'addButton'}
        onClick={() => setUserModalOpen(true)}
      >
        {'Add User'}
      </button>
      <Dialog onClose={() => setUserModalOpen(false)} open={userModalOpen} className={'addUserDialog'}>
        <DialogTitle>
          {'Add a new name to update the list of total users in the story!'}
        </DialogTitle>
        <DialogContent>
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
    </>
  )
}

export default AddUserDialog