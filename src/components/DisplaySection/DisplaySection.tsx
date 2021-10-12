import React from 'react'
import './DisplaySection.css'

type DisplaySectionProps = Record<string, string>

const DisplaySection: React.FC<DisplaySectionProps> = () => {
  return (
    <div className={'displaySection'}>
      {'Display Section Here'}
    </div>
  )
}

export default DisplaySection