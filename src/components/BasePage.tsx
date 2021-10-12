import React from 'react'

type BasePageProps = {
  title?: string
}

const BasePage: React.FC<BasePageProps> = ({title}) => {
  return (
    <div>
      {title || 'Base Page Here'}
    </div>
  )
}

export default BasePage