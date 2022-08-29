import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar, SideBar, Footer } from './components'
import {
  AboutPage,
  CartPage,
  ErrorPages,
  HomePages,
  PrivateRout,
  ProductsPage,
  SingleProductPage,
} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="" element={<PrivateRout />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
