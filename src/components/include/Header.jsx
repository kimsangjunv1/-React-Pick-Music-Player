import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = ({ selectCategory, setSelectCategory }) => {
  useState(() => {
    console.log('선택됨 : ', selectCategory)
  }, [])

  const [asideWidth, setAsideWidth] = useState(true)
  // function yoyo() {
  //   alert(selectCategory)
  // }
  const hide = () => {
    const aside = document.querySelector('#aside')
  }
  return (
    <header id="header">
      <aside id="aside" className={asideWidth ? 'minimize' : ''}>
        <Link to="/" className="logo" href="">
          <h1 className="ir">logo</h1>
        </Link>
        <button
          onClick={() => {
            asideWidth === false ? setAsideWidth(true) : setAsideWidth(false)
          }}
          className="minimize_btn"
        >
          {asideWidth === false ? '<' : '>'}
        </button>
        <div>
          <Link
            to="/"
            // href="#"
            onClick={() => setSelectCategory('a')}
            style={
              {
                // backgroundColor:
                //   'a' === selectCategory ? '#1DD960' : 'transparent',
              }
            }
            className={'a' === selectCategory ? 'test' : ''}
          >
            <img
              src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/record.png"
              alt=""
            />
            <span>홈</span>
          </Link>
          <Link
            to="/popular"
            // href="#"
            onClick={() => setSelectCategory('b')}
            style={
              {
                // backgroundColor:
                //   'b' === selectCategory ? '#1DD960' : 'transparent',
              }
            }
            className={'b' === selectCategory ? 'test' : ''}
          >
            <img
              src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/trophy.png"
              alt=""
            />
            <span>인기순위</span>
          </Link>
          <Link
            to="/download"
            // href="#"
            onClick={() => setSelectCategory('c')}
            style={
              {
                // backgroundColor:
                //   'c' === selectCategory ? '#1DD960' : 'transparent',
              }
            }
            className={'c' === selectCategory ? 'test' : ''}
          >
            <img
              src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/align-text-bottom.png"
              alt=""
            />
            <span>다운로드</span>
          </Link>
          <Link
            to="/artist"
            // href="#"
            onClick={() => setSelectCategory('d')}
            style={
              {
                // backgroundColor:
                //   'd' === selectCategory ? '#1DD960' : 'transparent',
              }
            }
            className={'d' === selectCategory ? 'test' : ''}
          >
            <img
              src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/personal-collection.png"
              alt=""
            />
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
