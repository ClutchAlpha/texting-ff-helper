import React from 'react'

type FooterProps = {
  title?: string;
}

const Footer: React.FC<FooterProps> = ({title}) => {
  return (
    <div>
      {title || 'Footer Here'}
    </div>
  )
}

export default Footer
