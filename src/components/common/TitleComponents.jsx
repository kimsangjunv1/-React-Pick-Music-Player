import React from 'react'
import { Link } from 'react-router-dom'

import icon_arrow_left from './../../styles/img/icon/icon_arrow_left.svg'
import icon_arrow_right from './../../styles/img/icon/icon_arrow_right.svg'

const TitleComponents = ({ title, desc, type, page }) => {
  return (
    <div
      className={`${
        type == 'main' ? 'section_title_container' : 'page_title_container'
      }`}
    >
      {type == 'main' && (
        <>
          <h2 className="section_title">{title}</h2>
          <p className="section_title_desc">{desc}</p>
        </>
      )}
      {type == 'page' && (
        <>
          <div className="info_container">
            <h2 className="page_title">{title}</h2>
            {/* <p className="section_title_desc">{desc}</p> */}
          </div>
          <div className="navigate_container">
            <Link to={`/`}>MAIN</Link>
            <img src={icon_arrow_right} alt="오른쪽 화살표" />
            <Link to={`/${page}`}>{page}</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default TitleComponents
