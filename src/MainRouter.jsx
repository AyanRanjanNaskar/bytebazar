import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import CartList from './Pages/CartList';

const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/product/:productId" element ={<ProductPage/>} />
            <Route path="/cart" element ={<CartList/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter