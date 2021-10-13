import React, {Dispatch, SetStateAction} from 'react'
import './ChatUserSelect.css'
import {User} from "../../types/utils";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme, useTheme
} from "@mui/material";

type ChatUserSelectProps = {
  totalUsers: User[]
  groupUsers: string[]
  setGroupUsers: Dispatch<SetStateAction<string[]>>
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ChatUserSelect: React.FC<ChatUserSelectProps> = ({totalUsers, groupUsers, setGroupUsers}) => {
  const theme = useTheme();
  
  const handleChange = (event: SelectChangeEvent<typeof groupUsers>) => {
    const value = event.target.value
    setGroupUsers(typeof value === 'string' ? value.split(',') : value)
  }
  
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="user-select-label">Chip</InputLabel>
      <Select
        labelId="user-select-label"
        id="user-select"
        multiple
        value={groupUsers}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {totalUsers.map((user) => (
          <MenuItem
            key={user.name}
            value={user.name}
            style={getStyles(user.name, groupUsers, theme)}
          >
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default ChatUserSelect

