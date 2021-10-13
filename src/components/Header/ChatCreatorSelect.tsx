import React, {Dispatch, SetStateAction} from 'react'
import './ChatCreatorSelect.css'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type ChatCreatorSelectProps = {
  groupCreator: string
  setGroupCreator: Dispatch<SetStateAction<string>>
  groupUsers: string[]
}

const ChatCreatorSelect: React.FC<ChatCreatorSelectProps> = ({
                                                               groupCreator,
                                                               setGroupCreator,
                                                               groupUsers
                                                             }) => {
  const handleGroupCreator = (event: SelectChangeEvent) => {
    setGroupCreator(event.target.value as string)
  }
  
  return (
    <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
      <InputLabel id="group-creator-label">Group Creator</InputLabel>
      <Select
        labelId="group-creator-label"
        id="group-creator"
        value={groupCreator}
        onChange={handleGroupCreator}
        label="Group Creator"
      >
        {
          groupUsers.map(user => (
            <MenuItem key={user} value={user}>{user}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default ChatCreatorSelect