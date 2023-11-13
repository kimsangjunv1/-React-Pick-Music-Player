import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../styles/img/icon/footer_logo.svg'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer_inner">
        <Link to="/" className="logo" href="">
          {/* <h1 className="ir">logo</h1> */}
          <img src={logo} alt="푸터로고" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
