import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPages = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried is not found!</h3>
        <Link to="/" className='btn'>Homepage</Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: hsl(22, 31%, 88%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPages
