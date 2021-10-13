import React from 'react'
import './LoginPanelHeader.css'

const LoginPanelHeader: React.FC = () => {
  return (
    <div className={'titleWrapper'}>
      <div className={'welcomeTitle'}>
        {'Welcome to Text FF Helper'}
      </div>
      <div className={'secondaryText'}>
        {'Login or Sign Up to Continue'}
      </div>
    </div>
  )
}

export default LoginPanelHeader