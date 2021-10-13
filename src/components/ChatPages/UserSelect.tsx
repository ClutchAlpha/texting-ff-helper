import React, {useState} from 'react'
import './UserSelect.css'
import {User} from '../../types/utils';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

type UserSelectProps = {
  chatUsers: User[]
}

const UserSelect: React.FC<UserSelectProps> = ({chatUsers}) => {
  const [currentUser, setCurrentUser] = useState<User>(chatUsers[0])
  const userMap: Record<string, User> = chatUsers.reduce((acc, user) => ({ ...acc, [user.name]: user}), {})
  const handleChangeUser = (event: SelectChangeEvent) => {
    setCurrentUser(userMap[event.target.value as string])
  }
  
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id='select-user-label'>
          {'User'}
        </InputLabel>
        <Select
          labelId='select-user-label'
          id='select-user'
          value={currentUser.name}
          label='User'
          onChange={handleChangeUser}
        >
          {
            chatUsers.map(user => (
                <MenuItem key={user.name} value={user.name}>
                  {user.name}
                </MenuItem>
              )
            )
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default UserSelect