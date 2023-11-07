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
          <Link
            to="/"
            onClick={() => setSelectCategory('a')}
            className={'a' === selectCategory ? 'test' : ''}
          >
            {/* <img
              src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/record.png"
              alt=""
            /> */}
            <span>MAIN</span>
          </Link>
          <Link
            to="/popular"
            onClick={() => setSelectCategory('b')}
            className={'b' === selectCategory ? 'test' : ''}
          >
            {/* <img
              src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/trophy.png"
              alt=""
            /> */}
            <span>POPULAR</span>
          </Link>
          <Link
            to="/artist"
            onClick={() => setSelectCategory('d')}
            className={'d' === selectCategory ? 'test' : ''}
          >
            {/* <img
              src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/personal-collection.png"
              alt=""
            /> */}
            <span>아티스트</span>
          </Link>
          {/* <Link
            to="/musicvideo"
            // href="#"
            onClick={() => setSelectCategory('e')}
            style={{
              // backgroundColor:
              //   'e' === selectCategory ? '#1DD960' : 'transparent',
            }}
          >
            <img src="assets/img/record.png" alt="" />
            <span>뮤직비디오</span>
          </Link> */}
        </div>
      </aside>
    </header>
  )
}

export default Header
