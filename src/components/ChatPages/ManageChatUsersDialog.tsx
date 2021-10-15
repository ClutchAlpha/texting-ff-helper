import React, {Dispatch, SetStateAction, useState} from 'react';
import {Chat, User} from "../../types/utils";
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@mui/material";
import {usersState} from "../../recoil/users";
import {useRecoilValue, useSetRecoilState} from "recoil";
import ChatUserSelect from "../Header/ChatUserSelect";
import {updateIndividualChatSelector} from "../../recoil/chats";

type ManageChatUsersDialogProps = {
  chat: Chat,
  currentUser?: User,
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>
}

const ManageChatUsersDialog: React.FC<ManageChatUsersDialogProps> = ({
                                                                       chat,
                                                                       currentUser,
                                                                       setCurrentUser
                                                                     }) => {
  const totalUsers = useRecoilValue(usersState)
  const userMap: Record<string, User> = totalUsers.reduce((acc, user) => ({...acc, [user.name]: user}), {})
  const updateIndividualChat = useSetRecoilState(updateIndividualChatSelector)
  const [usersInChat, setUsersInChat] = useState<string[]>(chat.users.map(x => x.name))
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  
  const handleApply = () => {
    const oldNames = chat.users.map(x => x.name)
    
    const removedNames = oldNames.filter(x => !usersInChat.includes(x) && x !== currentUser?.name)
    const addedNames = usersInChat.filter(x => !oldNames.includes(x))
    
    let updatedMessages = chat.messages
    
    if (!currentUser){
      const joinedMessage = `${addedNames.join(', ')} joined the chat`
      updatedMessages = [...updatedMessages, {text: joinedMessage}]
    }
    
    if (currentUser){
      if (removedNames.length > 0) {
        const removedMessage = `${currentUser?.name} removed ${removedNames.join(', ')}`
        updatedMessages = [...updatedMessages, {text: removedMessage}]
      }
  
      if (addedNames.length > 0) {
        const addedMessage = `${currentUser?.name} added ${addedNames.join(', ')}`
        updatedMessages = [...updatedMessages, {text: addedMessage}]
      }
  
      if (!usersInChat.includes(currentUser?.name || '')) {
        const leftMessage = `${currentUser?.name} left the chat`
        updatedMessages = [...updatedMessages, {text: leftMessage}]
      }
    }
  
    const newUsers = usersInChat.map(x => userMap[x]);
    
    updateIndividualChat([{
      ...chat,
      users: newUsers,
      messages: updatedMessages
    }])
    
    setCurrentUser(newUsers.length > 0 ? newUsers[0] : undefined)
    setDialogOpen(false)
  }
  
  const handleCancel = () => {
    
    setDialogOpen(false)
  }
  
  return (
    <>
      <PersonAddIcon onClick={() => setDialogOpen(true)}/>
      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen} className={'manageUsersDialog'}>
        <DialogContent className={'dialogContent'}>
          <DialogContentText>
            Manage Users
          </DialogContentText>
          <ChatUserSelect
            totalUsers={totalUsers}
            groupUsers={usersInChat}
            setGroupUsers={setUsersInChat}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleApply}
          >
            {'Apply'}
          </Button>
          <Button onClick={handleCancel}>
            {'Cancel'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ManageChatUsersDialog