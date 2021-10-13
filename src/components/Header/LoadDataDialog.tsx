import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'
import {Chat, User} from "../../types/utils";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {getChapter} from "../../utils/mongoUtils";
import {ChapterResponse} from "../../types/mongoTypes";
import './LoadDataDialog.css'

type LoadDataDialogProps = {
  setTotalUsers: Dispatch<SetStateAction<User[]>>
  setChats: Dispatch<SetStateAction<Chat[]>>
}

const LoadDataDialog: React.FC<LoadDataDialogProps> = ({
                                                         setTotalUsers,
                                                         setChats
                                                       }) => {
  const [loadDataOpen, setLoadDataOpen] = useState<boolean>(false)
  const [chapterId, setChapterId] = useState<string>('')
  
  const handleChangeChapterId = (event: ChangeEvent<HTMLInputElement>) => {
    setChapterId(event.target.value)
  }
  
  const handleSubmit = () => {
    getChapter(chapterId)
      .then((chapter: ChapterResponse[]) => {
        if (chapter.length > 0) {
          setTotalUsers(chapter[chapter.length - 1].users)
          setChats(chapter[chapter.length - 1].chats)
        }
      })
      .then(() => {
        setChapterId('')
        setLoadDataOpen(false)
      })
  }
  
  return (
    <>
      <button
        className={'addButton'}
        onClick={() => setLoadDataOpen(true)}
      >
        {'Load Data'}
      </button>
      <Dialog onClose={() => setLoadDataOpen(false)} open={loadDataOpen} className={'loadDataDialog'}>
        <DialogTitle>
          {'Type in Chapter Name to Load Data'}
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
        </DialogContent>
        <DialogActions>
          {
            chapterId &&
            <Button onClick={handleSubmit}>
              {'Load Data'}
            </Button>
          }
          <Button onClick={() => setLoadDataOpen(false)}>
            {'Cancel'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default LoadDataDialog