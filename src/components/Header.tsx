import React from 'react'

type HeaderProps = {
  title?: string
  
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <div>
      {title || 'Header Here'}
    </div>
  )
}

export default Header