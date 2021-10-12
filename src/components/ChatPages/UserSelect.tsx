import React from 'react'
import './UserSelect.css'
import {User} from "../../types/utils";

type UserSelectProps = {
  totalUsers: User[]
}

const UserSelect: React.FC<UserSelectProps> = ({totalUsers}) => {
  return (
    <div>
      {'Select Here'}
    </div>
  )
}

export default UserSelect