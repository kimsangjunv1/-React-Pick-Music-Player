import React from 'react'

const TitleComponents = ({ title, desc }) => {
  return (
    <div className="section_title">
      <h2>{title}</h2>
      <p className="section_title_desc">{desc}</p>
    </div>
  )
}

export default TitleComponents
