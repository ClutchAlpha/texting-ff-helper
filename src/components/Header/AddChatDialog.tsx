import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'
import {Chat, User} from "../../types/utils";
import './AddChatDialog.css'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import ChatUserSelect from "./ChatUserSelect";

type AddChatDialogProps = {
  chats: Chat[]
  setChats: Dispatch<SetStateAction<Chat[]>>
  totalUsers: User[]
}

const AddChatDialog: React.FC<AddChatDialogProps> = ({
                                                       chats,
                                                       setChats,
                                                       totalUsers
                                                     }) => {
  const [chatModalOpen, setChatModalOpen] = useState<boolean>(false)
  const [groupUsers, setGroupUsers] = useState<string[]>([])
  const [groupCreator, setGroupCreator] = useState<User>()
  const [groupName, setGroupName] = useState<string>('')
  
  const userMap: Record<string, User> = totalUsers.reduce((acc, user) => ({ ...acc, [user.name]: user}), {})
  
  const handleChangeGroupName = (event: ChangeEvent<HTMLInputElement>) => {
    setGroupName(event.target.value)
  }
  
  const handleSubmit = () => {
    if (groupUsers.length > 0 && groupName && groupCreator){
      const newChat: Chat = {
        groupName,
        users: groupUsers.map(name => userMap[name]),
        creator: groupCreator
      }
      setChats([
        ...chats,
        newChat
      ])
    }
    
    setChatModalOpen(false)
  }
  
  return (
    <>
      <button
        className={'addButton'}
        onClick={() => setChatModalOpen(true)}
        disabled={totalUsers.length < 1}
      >
        {'Add Chat'}
      </button>
      <Dialog onClose={() => setChatModalOpen(false)} open={chatModalOpen} className={'addChatDialog'}>
        <DialogTitle>
          {'New Chat'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add users, give it a name, and begin a new chat!
          </DialogContentText>
          <TextField
            onChange={handleChangeGroupName}
            value={groupName}
            placeholder={'Set Group Name Here'}
            autoFocus
            margin="dense"
            id="group"
            label="Group Name"
            fullWidth
            variant="standard"
          />
          <ChatUserSelect
            totalUsers={totalUsers}
            groupUsers={groupUsers}
            setGroupUsers={setGroupUsers}
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

export default AddChatDialog
