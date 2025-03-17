import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Cart from './components/Cart'
import Products from './components/Products'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <div>
      <Router>
   <Home/>
      <Routes>
         <Route path="/" element={<HomePage/>}></Route>
         <Route path="/products" element={<Products/>}></Route>
         <Route path="/gallery" element={<Gallery/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App