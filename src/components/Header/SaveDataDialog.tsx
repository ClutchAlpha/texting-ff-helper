import React, {ChangeEvent, useState} from 'react'
import './SaveDataDialog.css'
import {Chat, User} from "../../types/utils";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {postChapter} from "../../utils/mongoUtils";

type SaveDataDialogProps = {
  totalUsers: User[]
  chats: Chat[]
}

const SaveDataDialog: React.FC<SaveDataDialogProps> = ({
  totalUsers,
  chats
}) => {
  const [saveDataOpen, setSaveDataOpen] = useState<boolean>(false)
  const [chapterId, setChapterId] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  
  const handleSubmit = () => {
    postChapter(chapterId, author, totalUsers, chats)
      .then(response => {
        console.log(response)
      })
      .then(() => {
        setChapterId('')
        setAuthor('')
        setSaveDataOpen(false)
      })
  }
  
  const handleChangeChapterId = (event: ChangeEvent<HTMLInputElement>) => {
    setChapterId(event.target.value)
  }
  
  const handleChangeAuthor = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value)
  }
  
  
  return (
    <>
      <button
        className={'addButton'}
        onClick={() => setSaveDataOpen(true)}
      >
        {'Save Data'}
      </button>
      <Dialog onClose={() => setSaveDataOpen(false)} open={saveDataOpen} className={'loadDataDialog'}>
        <DialogTitle>
          {'Fill in Chapter Name and Author to Save'}
        </DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleChangeChapterId}
            value={chapterId}
            placeholder={'Chapter Name Here'}
            autoFocus
            margin="dense"
            id="chapter"
            label="Chapter Name"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleChangeAuthor}
            value={author}
            placeholder={'Author Name Here'}
            autoFocus
            margin="dense"
            id="author"
            label="Author Name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          {
            chapterId && author &&
            <Button onClick={handleSubmit}>
              {'Load Data'}
            </Button>
          }
          <Button onClick={() => setSaveDataOpen(false)}>
            {'Cancel'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SaveDataDialog