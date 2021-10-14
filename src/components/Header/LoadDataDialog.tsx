import React, {ChangeEvent, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {getChapter} from "../../utils/mongoUtils";
import {ChapterResponse} from "../../types/mongoTypes";
import './LoadDataDialog.css'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {usersState} from "../../recoil/users";
import {chatsState} from "../../recoil/chats";
import {appUserState} from "../../recoil/appUser";

const LoadDataDialog: React.FC = () => {
  const [loadDataOpen, setLoadDataOpen] = useState<boolean>(false)
  const [chapterId, setChapterId] = useState<string>('')
  const setTotalUsers = useSetRecoilState(usersState)
  const setChats = useSetRecoilState(chatsState)
  const appUser = useRecoilValue(appUserState)
  
  const handleChangeChapterId = (event: ChangeEvent<HTMLInputElement>) => {
    setChapterId(event.target.value)
  }
  
  const handleSubmit = () => {
    if (appUser){
      getChapter(chapterId, appUser._id.$oid)
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