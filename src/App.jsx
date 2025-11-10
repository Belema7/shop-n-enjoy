import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import About from './pages/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path='/products' element={<Products/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
