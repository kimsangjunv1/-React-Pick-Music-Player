import React from 'react'
import { Link } from 'react-router-dom'

const TitleComponents = ({ title, desc, type }) => {
  return (
    <div className="section_title">
      {type == 'main' && (
        <>
          <h2>{title}</h2>
          <p className="section_title_desc">{desc}</p>
        </>
      )}
      {type == 'page' && (
        <>
          <h2>{title}</h2>
          <Link to={`/`}>〈</Link>
          {/* <p className="section_title_desc">{desc}</p> */}
        </>
      )}
    </div>
  )
}

export default TitleComponents
