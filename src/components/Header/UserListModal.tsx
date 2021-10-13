import React, {useState} from 'react'
import './UserListModal.css'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List, ListItem, ListItemText,
} from "@mui/material";
import {useRecoilValue} from "recoil";
import {usersState} from "../../recoil/users";
import {chatsState} from "../../recoil/chats";

const UserListModal: React.FC = () => {
  
  const [userListModalOpen, setUserListModalOpen] = useState<boolean>(false)
  const totalUsers = useRecoilValue(usersState)
  const chats = useRecoilValue(chatsState)
  
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
                      key={user.name}
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