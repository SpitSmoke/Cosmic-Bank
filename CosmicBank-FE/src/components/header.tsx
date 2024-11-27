import { useState } from "react"
import { Link } from 'react-router-dom'
import {
  Hamburger,
  Logo,
  NavItem,
  NavList,
  NavM,
  SpanBank,
  SpanCosmic,
} from '../styles/HeaderStyles'
import '../styles/HeaderStyles'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <NavM>
      <Logo>
        <SpanCosmic>Cosmic</SpanCosmic>
        <SpanBank>Bank</SpanBank>
      </Logo>
      <Hamburger onClick={toggleMenu} className={menuOpen ? 'menu-open' : ''}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </Hamburger>
      <NavList>
        <NavItem>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <a>Home</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="#about" style={{ textDecoration: 'none' }}>
            <a>About</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="#services" style={{ textDecoration: 'none' }}>
            <a>Services</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="login" style={{ textDecoration: 'none' }}>
            <a>Login</a>
          </Link>
        </NavItem>
      </NavList>
    </NavM>
  )
}

export default Header