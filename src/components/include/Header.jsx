import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import logo from './../../styles/img/icon/logo.svg'

const Header = ({ selectCategory, setSelectCategory }) => {
  const [asideWidth, setAsideWidth] = useState(true)

  return (
    <header id="header">
      <aside id="aside" className={asideWidth ? '' : ''}>
        <Link to="/" className="logo" href="">
          {/* <h1 className="ir">logo</h1> */}
          <img src={logo} alt="로고" />
        </Link>

        <div className="menu_container">
          {/* <Link to="/" onClick={() => setSelectCategory('a')}>
            <span>메인</span>
          </Link> */}
          {/* <Link
            to="/popular"
            onClick={() => setSelectCategory('b')}
            className={'b' === selectCategory ? 'test' : ''}
          >
            <span>인기순위</span>
          </Link> */}
          {/* <Link to="/artist" onClick={() => setSelectCategory('d')}>
            <span>아티스트</span>
          </Link> */}
          {/* <Link
            to="/musicvideo"
            onClick={() => setSelectCategory('e')}
          >
            <span>뮤직비디오</span>
          </Link> */}
        </div>
      </aside>
    </header>
  )
}

export default Header
