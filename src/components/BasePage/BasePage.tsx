import React from 'react'
import './BasePage.css'

type BasePageProps = {
  title?: string
}

const BasePage: React.FC<BasePageProps> = ({title}) => {
  return (
    <div className={'basePage'}>
      {title || 'Base Page Here'}
    </div>
  )
}

export default BasePage