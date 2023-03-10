import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ selectCategory, setSelectCategory }) => {
  // function yoyo() {
  //   alert(selectCategory)
  // }
  return (
    <header id="header">
      <aside id="aside">
        <Link to="/" className="logo" href="">
          <h1 className="ir">logo</h1>
        </Link>
        <div>
          <Link
            to="/"
            // href="#"
            onClick={() => setSelectCategory('a')}
            style={{
              backgroundColor:
                'a' === selectCategory ? '#1DD960' : 'transparent',
            }}
          >
            <img src="assets/img/broadcast.png" alt="" />
            <span>홈</span>
          </Link>
          <Link
            to="/popular"
            // href="#"
            onClick={() => setSelectCategory('b')}
            style={{
              backgroundColor:
                'b' === selectCategory ? '#1DD960' : 'transparent',
            }}
          >
            <img src="assets/img/trophy.png" alt="" />
            <span>인기순위</span>
          </Link>
          <Link
            to="/download"
            // href="#"
            onClick={() => setSelectCategory('c')}
            style={{
              backgroundColor:
                'c' === selectCategory ? '#1DD960' : 'transparent',
            }}
          >
            <img src="assets/img/align-text-bottom.png" alt="" />
            <span>다운로드</span>
          </Link>
          <Link
            to="/artist"
            // href="#"
            onClick={() => setSelectCategory('d')}
            style={{
              backgroundColor:
                'd' === selectCategory ? '#1DD960' : 'transparent',
            }}
          >
            <img src="assets/img/personal-collection.png" alt="" />
            <span>아티스트</span>
          </Link>
          <Link
            to="/musicvideo"
            // href="#"
            onClick={() => setSelectCategory('e')}
            style={{
              backgroundColor:
                'e' === selectCategory ? '#1DD960' : 'transparent',
            }}
          >
            <img src="assets/img/record.png" alt="" />
            <span>뮤직비디오</span>
          </Link>
        </div>
      </aside>
    </header>
  )
}

export default Header
