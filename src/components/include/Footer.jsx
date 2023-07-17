import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <Link to="/" className="logo" href="">
          <h1 className="ir">logo</h1>
        </Link>
      </div>
      <div>
        <p>프론트 : 김상준, 이영환&nbsp;&nbsp;|&nbsp;&nbsp;</p>
        <p>디자인 : 김상준&nbsp;&nbsp;|&nbsp;&nbsp;</p>
        <p>이메일 : to_before@naver.com</p>
      </div>
    </footer>
  )
}

export default Footer
