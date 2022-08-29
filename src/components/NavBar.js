import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import manish from '../assets/m1.jpg'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            {' '}
            <img src={manish} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
          
          {/* <Link to="about">About</Link>
          <Link to="products">Products</Link> */}
        </div>
      </div>
    </NavContainer>
  )
}
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 100px;
      height: 100px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: hsl(22, 31%, 52%);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
`
export default NavBar
