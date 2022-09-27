import React from 'react'
import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa'
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        Copyright &copy;{new Date().getFullYear()}{' '}
        <span>
          With <FaHeart /> by{' '}
          <a href="https://github.com/manishwild"> Manish Khadgi Shahi</a>
        </span>
      </h5>
      <h5>All Rights Reserved</h5>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  text-align: center;
  span {
    color: hsl(22, 31%, 52%);
    svg {
      color: red;
      margin-bottom: -2px;
    }
  }
  span a {
    color: hsl(22, 31%, 52%);
  }
  h5 {
    color: white;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`
export default Footer
