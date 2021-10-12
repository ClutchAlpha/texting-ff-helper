import React from 'react'
import './Header.css'

type HeaderProps = {
  title?: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <div className={'header'}>
      {title || 'Header Here'}
    </div>
  )
}

export default Header