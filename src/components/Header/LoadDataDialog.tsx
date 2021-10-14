import React, {useEffect, useState} from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, FormControl, MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import {getChapter, getChaptersForUser} from "../../utils/mongoUtils";
import './LoadDataDialog.css'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {usersState} from "../../recoil/users";
import {chatsState} from "../../recoil/chats";
import {appUserState} from "../../recoil/appUser";
import {Chapter} from "../../types/utils";

const LoadDataDialog: React.FC = () => {
  const [loadDataOpen, setLoadDataOpen] = useState<boolean>(false)
  const [chapterId, setChapterId] = useState<string>('')
  const [userChapters, setUserChapters] = useState<Chapter[]>()
  const setTotalUsers = useSetRecoilState(usersState)
  const setChats = useSetRecoilState(chatsState)
  const appUser = useRecoilValue(appUserState)
  
  useEffect(() => {
    if (appUser) {
      getChaptersForUser(appUser._id.$oid)
        .then(json => {
          setUserChapters(json.chapters || [])
        })
    }
    
  }, [appUser])
  
  const handleChangeChapterId = (event: SelectChangeEvent) => {
    setChapterId(event.target.value as string)
  }
  
  const handleSubmit = () => {
    if (appUser) {
      getChapter(chapterId, appUser._id.$oid)
        .then((chapter: Chapter[]) => {
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
        <DialogTitle style={{height: '60%'}}>
          {'Type in Chapter Name to Load Data'}
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            {
              userChapters &&
              <>
                <Select
                  id="user-chapters"
                  displayEmpty
                  value={chapterId}
                  onChange={handleChangeChapterId}
                >
                  <MenuItem value=''>
                    <em>{'Select Chapter'}</em>
                  </MenuItem>
                  {
                    userChapters.map(x => {
                      return (
                        <MenuItem key={x.chapterId} value={x.chapterId}>
                          {x.chapterId}
                        </MenuItem>
                      );
                    })
                  }
                </Select>
              </>
            }
          </FormControl>
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