import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
