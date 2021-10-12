import React from 'react'
import './Footer.css'

type FooterProps = {
  title?: string;
}

const Footer: React.FC<FooterProps> = ({title}) => {
  return (
    <div className={'footer'}>
      {title || 'Footer Here'}
    </div>
  )
}

export default Footer
