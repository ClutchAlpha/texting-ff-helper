import React from 'react'
import './ChatPages.css'

type ChatPagesProps = Record<string, string>

const ChatPages: React.FC<ChatPagesProps> = () => {
  return (
    <div className={'chatPages'}>
      {'Chat Pages Here'}
    </div>
  )
}

export default ChatPages