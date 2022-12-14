import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import manish from '../assets/m1.jpg'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'

const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={manish} alt="logo manish" className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links" onClick={closeSidebar}>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              Checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  )
}
const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(22, 31%, 52%);
    transition: all 0.3s linear;
    cursor: pointer;
    color: hsl(360, 67%, 44%);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: red;
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: hsl(209, 34%, 30%);
    transition: all 0.3s linear;
    letter-spacing: 0.1rem;
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: hsl(210, 36%, 96%);
    color: hsl(209, 34%, 30%);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default SideBar
