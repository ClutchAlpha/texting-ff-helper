import React, {useState} from 'react'
import {Chat, User} from "../../types/utils";
import './UserListModal.css'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List, ListItem, ListItemText,
} from "@mui/material";

type UserListModalProps = {
  totalUsers: User[]
  chats: Chat[]
}

const UserListModal: React.FC<UserListModalProps> = ({totalUsers, chats}) => {
  
  const [userListModalOpen, setUserListModalOpen] = useState<boolean>(false)
  
  return (
    <>
      <button
        className={'addButton'}
        onClick={() => setUserListModalOpen(true)}
        disabled={totalUsers.length < 1}
      >
        {'See Total Users'}
      </button>
      <Dialog onClose={() => setUserListModalOpen(false)} open={userListModalOpen} className={'userListModal'}>
        <DialogTitle>
          {'All Users'}
        </DialogTitle>
        <DialogContent className={'dialogContent'}>
          <List>
            {
              totalUsers.map(user => {
                const userChats = chats.filter(chat => chat.users.map(x => x.name).includes(user.name)).length
                return (
                  <ListItem key={user.name}>
                    <ListItemText
                      primary={user.name}
                      secondary={`Active user in ${userChats} chats`}
                    />
                  </ListItem>
                )
              })
            }
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setUserListModalOpen(false)}>
            {'Close'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default UserListModal